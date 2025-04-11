
export const validateEmail = (email: string): { valid: boolean; message?: string } => {
  if (!email.trim()) {
    return { valid: false, message: "Email is required" };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address" };
  }
  
  return { valid: true };
};

export const validatePassword = (password: string): { valid: boolean; message?: string } => {
  if (!password) {
    return { valid: false, message: "Password is required" };
  }
  
  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters" };
  }
  
  return { valid: true };
};

export const validateName = (name: string): { valid: boolean; message?: string } => {
  if (!name.trim()) {
    return { valid: false, message: "Name is required" };
  }
  
  if (name.trim().length < 2) {
    return { valid: false, message: "Name must be at least 2 characters" };
  }
  
  return { valid: true };
};

export const validatePasswordMatch = (password: string, confirmPassword: string): { valid: boolean; message?: string } => {
  if (password !== confirmPassword) {
    return { valid: false, message: "Passwords don't match" };
  }
  
  return { valid: true };
};
