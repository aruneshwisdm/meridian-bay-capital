"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Shield, Info } from "lucide-react";
import Link from "next/link";
import { Button, Input, Card } from "@/components/ui";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function PortalPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);

    // Demo login - accept demo credentials
    if (data.email === "client@demo.com" && data.password === "demo123") {
      setTimeout(() => {
        router.push("/portal/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        alert("Invalid credentials. Use demo@demo.com / demo123");
      }, 1000);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 bg-gradient-ocean relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="flex flex-col items-center">
                <span className="font-heading font-bold text-2xl text-white tracking-tight">
                  MERIDIAN BAY
                </span>
                <span className="font-heading font-medium text-sm text-white/80 tracking-[0.2em]">
                  CAPITAL
                </span>
              </div>
            </Link>
            <h1 className="font-heading font-semibold text-heading-lg text-white mt-4">
              Client Portal
            </h1>
          </div>

          {/* Login Card */}
          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                error={errors.email?.message}
                {...register("email", { required: "Email is required" })}
              />

              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  error={errors.password?.message}
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-text-tertiary hover:text-text transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
                  />
                  <span className="text-body-sm text-text-secondary">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-body-sm text-primary hover:text-accent transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isLoading}
              >
                <Lock className="h-4 w-4 mr-2" />
                Secure Login
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-1 text-caption text-text-tertiary">
                <Shield className="h-3 w-3" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-1 text-caption text-text-tertiary">
                <Lock className="h-3 w-3" />
                <span>Secure Access</span>
              </div>
            </div>
          </Card>

          {/* Demo Credentials */}
          <Card className="mt-4 p-4 bg-accent-50 border-accent-200">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-accent-700 flex-shrink-0 mt-0.5" />
              <div className="text-body-sm text-accent-700">
                <p className="font-semibold mb-1">Demo Credentials</p>
                <p>Email: client@demo.com</p>
                <p>Password: demo123</p>
              </div>
            </div>
          </Card>

          {/* Not a Client */}
          <p className="text-center mt-6 text-body-sm text-white/70">
            Not a client?{" "}
            <Link href="/contact" className="text-accent hover:text-white transition-colors">
              Contact us to get started
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
