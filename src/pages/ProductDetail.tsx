import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { getReviewsByEntityId, getAverageRating } from "@/data/reviews";
import ReviewStars from "@/components/reviews/ReviewStars";
import ReviewList from "@/components/reviews/ReviewList";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || "");
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("description");

  // Enhanced: Default to 20L or last variant
  const defaultVariantIdx =
    product && Array.isArray(product.variants) && product.variants.length > 0
      ? product.variants.findIndex((v: any) => v.size === "20L") !== -1
        ? product.variants.findIndex((v: any) => v.size === "20L")
        : product.variants.length - 1
      : 0;
  const [selectedVariantIdx, setSelectedVariantIdx] =
    useState<number>(defaultVariantIdx);
  const selectedVariant =
    product && Array.isArray(product.variants) && product.variants.length > 0
      ? product.variants[selectedVariantIdx]
      : null;
  const handleVariantSelect = (idx: number) => setSelectedVariantIdx(idx);

  // Get reviews for this product
  const productReviews = getReviewsByEntityId("product", productId || "");
  const averageRating = getAverageRating("product", productId || "");

  const handleAddToCart = () => {
    if (product) {
      const variant = selectedVariant || product;
      addToCart({
        id: product.id,
        name:
          product.name +
          (selectedVariantIdx !== undefined &&
          product.variants &&
          product.variants[selectedVariantIdx]?.size
            ? ` (${product.variants[selectedVariantIdx].size})`
            : ""),
        price:
          selectedVariantIdx !== undefined &&
          product.variants &&
          product.variants[selectedVariantIdx]?.price
            ? product.variants[selectedVariantIdx].price
            : product.price,
        image: product.image,
        quantity: quantity,
      });
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name}${
          selectedVariantIdx !== undefined &&
          product.variants &&
          product.variants[selectedVariantIdx]?.size
            ? ` (${product.variants[selectedVariantIdx].size})`
            : ""
        } has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="mb-6">
          Sorry, the product you're looking for doesn't exist or has been
          removed.
        </p>
        <Link to="/products">
          <Button>Return to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-lightblue hover:text-navy transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-xl overflow-hidden shadow-soft">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                to={`/products/${product.category}`}
                className="text-sm bg-blue-100 text-lightblue px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
              >
                {product.category}
              </Link>
              {product.inStock ? (
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                  <Check size={14} className="mr-1" /> In Stock
                </span>
              ) : (
                <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-navy mb-2">
              {product.name}
            </h1>

            {/* Reviews summary */}
            <div className="flex items-center gap-2 mb-4">
              <ReviewStars rating={averageRating} />
              <span className="text-gray-500">
                {productReviews.length}{" "}
                {productReviews.length === 1 ? "review" : "reviews"}
              </span>
            </div>

            {/* Product Info Table */}
            <div className="mb-4">
              <table className="w-full border border-gray-200 rounded-md text-sm">
                <tbody>
                  <tr>
                    <td className="font-semibold p-2 bg-gray-50 w-32">Brand</td>
                    <td className="p-2">{product.brand}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2 bg-gray-50">Category</td>
                    <td className="p-2">{product.category}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-2 bg-gray-50">In Stock</td>
                    <td className="p-2">{product.inStock ? "Yes" : "No"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Price and Variants */}
            {product.variants && product.variants.length > 0 ? (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={variant.size}
                      type="button"
                      className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-150 focus:outline-none ${
                        selectedVariantIdx === idx
                          ? "bg-lightblue text-white border-lightblue shadow"
                          : "bg-white text-navy border-gray-300 hover:bg-blue-50"
                      }`}
                      onClick={() => handleVariantSelect(idx)}
                    >
                      {variant.size}
                    </button>
                  ))}
                </div>
                <span className="text-2xl font-bold text-navy">
                  ₹
                  {selectedVariant
                    ? selectedVariant.price.toFixed(2)
                    : product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold text-navy">
                  ₹{product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ₹{product.oldPrice.toFixed(2)}
                  </span>
                )}
                {product.oldPrice && (
                  <span className="ml-2 text-sm bg-orange text-white px-2 py-1 rounded-full">
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </div>
            )}

            {/* Short Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mb-8">
              <div className="flex border border-gray-300 rounded-md overflow-hidden mr-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-12 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="w-14 h-12 flex items-center justify-center border-x border-gray-300">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-12 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-navy hover:bg-lightblue text-white flex-1 h-12 rounded-md flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Additional Information */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Brand</p>
                  <p className="font-medium">{product.brand || "Generic"}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">SKU</p>
                  <p className="font-medium">{product.sku || product.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Description and Reviews */}
        <div className="bg-white rounded-xl shadow-soft mb-16">
          <Tabs
            defaultValue="description"
            value={tab}
            onValueChange={setTab}
            className="w-full"
          >
            <TabsList className="w-full border-b border-gray-200 rounded-none">
              <TabsTrigger
                value="description"
                className="flex-1 rounded-none rounded-tl-xl data-[state=active]:border-b-2 data-[state=active]:border-navy"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="flex-1 rounded-none rounded-tr-xl data-[state=active]:border-b-2 data-[state=active]:border-navy"
              >
                Reviews ({productReviews.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-8">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-navy mb-4">
                  Product Description
                </h3>
                <p>{product.description}</p>

                {product.features && product.features.length > 0 && (
                  <>
                    <h4 className="text-lg font-semibold text-navy mt-6 mb-3">
                      Key Features
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {product.specifications && (
                  <>
                    <h4 className="text-lg font-semibold text-navy mt-6 mb-3">
                      Specifications
                    </h4>
                    <table className="w-full border-collapse">
                      <tbody>
                        {Object.entries(product.specifications).map(
                          ([key, value]) => (
                            <tr key={key} className="border-b border-gray-200">
                              <td className="py-2 pr-4 font-medium w-1/3">
                                {key}
                              </td>
                              <td className="py-2">{value}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-8">
              <h3 className="text-xl font-semibold text-navy mb-4">
                Customer Reviews
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <ReviewStars rating={averageRating} size="large" />
                <span className="text-2xl font-semibold text-navy">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-gray-500">
                  Based on {productReviews.length}{" "}
                  {productReviews.length === 1 ? "review" : "reviews"}
                </span>
              </div>

              <ReviewList
                reviews={productReviews}
                entityId={product.id}
                entityType="product"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
