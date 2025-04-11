
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  // Mock social login - would connect to real auth providers in a full implementation
  const handleSocialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
    // In a real app, this would authenticate with the provider
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-navy">Account Access</DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Login or create an account to continue
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col space-y-4 mb-4">
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-2" 
            onClick={() => handleSocialLogin('google')}
          >
            <FaGoogle className="text-red-500" />
            <span>Continue with Google</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-2"
            onClick={() => handleSocialLogin('facebook')}
          >
            <FaFacebook className="text-blue-600" />
            <span>Continue with Facebook</span>
          </Button>
        </div>
        
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <LoginForm onSuccess={onClose} />
          </TabsContent>
          
          <TabsContent value="signup">
            <SignupForm onSuccess={onClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
