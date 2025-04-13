
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product } from '../data/products';
import { useToast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const CART_STORAGE_KEY = 'laxmi-enterprises-cart';

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { totalItems, totalAmount };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;
  
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };
        
        const { totalItems, totalAmount } = calculateTotals(updatedItems);
        newState = {
          ...state,
          items: updatedItems,
          totalItems,
          totalAmount,
        };
      } else {
        // Add new item
        const updatedItems = [...state.items, action.payload];
        const { totalItems, totalAmount } = calculateTotals(updatedItems);
        
        newState = {
          ...state,
          items: updatedItems,
          totalItems,
          totalAmount,
        };
      }
      break;
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const { totalItems, totalAmount } = calculateTotals(updatedItems);
      
      newState = {
        ...state,
        items: updatedItems,
        totalItems,
        totalAmount,
      };
      break;
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or negative
        const updatedItems = state.items.filter(item => item.id !== id);
        const { totalItems, totalAmount } = calculateTotals(updatedItems);
        
        newState = {
          ...state,
          items: updatedItems,
          totalItems,
          totalAmount,
        };
      } else {
        const updatedItems = state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        
        const { totalItems, totalAmount } = calculateTotals(updatedItems);
        
        newState = {
          ...state,
          items: updatedItems,
          totalItems,
          totalAmount,
        };
      }
      break;
    }
    
    case 'CLEAR_CART':
      newState = initialState;
      break;
      
    case 'LOAD_CART':
      newState = action.payload;
      break;
      
    default:
      return state;
  }
  
  // Save to localStorage
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState));
  return newState;
};

interface CartContextType {
  cart: CartState;
  addToCart: (item: CartItem) => void;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const addItem = (product: Product) => {
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      } 
    });
    
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    toast({
      title: 'Item removed',
      description: 'Item has been removed from your cart.',
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: 'Cart cleared',
      description: 'Your cart has been cleared.',
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
