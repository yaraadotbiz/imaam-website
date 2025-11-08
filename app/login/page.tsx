"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Building2, Lock, Mail } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "imaam@imaam.com" && password === "admin@123") {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("userRole", "admin");
            toast.success("Welcome back, Admin!");
            router.push("/dashboard");
        } else {
            toast.error("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-300">
            <Card className="w-full max-w-md p-8 space-y-6 bg-card/95 backdrop-blur-sm">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">Imaam 360</h1>
                    <p className="text-muted-foreground">Dashboard Login</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="imaam@imaam.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="h-12"
                        />
                    </div>

                    <Button type="submit" className="w-full h-12 bg-[#90000a] text-primary-foreground text-lg">
                        Login to Dashboard
                    </Button>
                    <Link href={"/"} className="">
                        <Button type="button" variant={"outline"} className="w-full mt-2 h-12 text-primary text-lg">
                            Back to Home
                        </Button>
                    </Link>
                </form>

                <div className="pt-4 border-t text-center">
                    <p className="text-sm text-muted-foreground">
                        Demo Credentials: imaam@imaam.com / admin@123
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Login;
