
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-navy">Account Access</DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Login or create an account to continue
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full mt-4">
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
