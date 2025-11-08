"use client"
import { useEffect } from "react";
import { Building2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "../_components/DashboardSidebar";

const DashboardLayout = ({ children }: {
  children: React.ReactNode;
}) => {

  const router = useRouter()


  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />

        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center justify-between px-6 sticky top-0 z-40">
            <div></div>
            {/* <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-islamic flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Imaam 360</h1>
                </div>
              </div>
            </div> */}

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>
              <div className="flex items-center gap-3 pl-3 border-l">
                <div className="text-right">
                  <div className="text-sm font-semibold">Admin User</div>
                  <div className="text-xs text-muted-foreground">Administrator</div>
                </div>
                <div className="w-10 h-10 rounded-full gradient-islamic flex items-center justify-center text-primary-foreground font-bold">
                  A
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
