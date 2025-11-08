import { LayoutDashboard, Users, ClipboardCheck, TrendingUp, Award, Settings, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Students", url: "/dashboard/students", icon: Users },
  { title: "Attendance", url: "/dashboard/attendance", icon: ClipboardCheck },
  { title: "Performance", url: "/dashboard/performance", icon: TrendingUp },
  { title: "Recognition", url: "/dashboard/recognition", icon: Award },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { open } = useSidebar();
  const router = useRouter()
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarContent className="bg-card">
        <SidebarGroup>
          <SidebarGroupLabel className={open ? "text-base font-semibold" : "sr-only"}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#90000a]/50 transition-colors ${pathname === item.url
                        ? "bg-[#90000a] text-primary-foreground font-medium hover:bg-[#90000a]"
                        : ""
                        }`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {open && <span>{item.title} </span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-destructive/10 text-destructive cursor-pointer transition-colors w-full">
                    <LogOut className="w-5 h-5 flex-shrink-0" />
                    {open && <span>Logout</span>}
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
