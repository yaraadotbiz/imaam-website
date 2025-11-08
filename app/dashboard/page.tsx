import { Card } from "@/components/ui/card";
import { Users, UserCheck, TrendingUp, Award } from "lucide-react";

const stats = [
    { title: "Total Students", value: "523", change: "+12%", icon: Users, color: "from-primary to-accent" },
    { title: "Today's Attendance", value: "96.8%", change: "+2.1%", icon: UserCheck, color: "from-accent to-primary" },
    { title: "Avg Performance", value: "87.5%", change: "+5.3%", icon: TrendingUp, color: "from-secondary to-amber-400" },
    { title: "Top Performers", value: "48", change: "+8", icon: Award, color: "from-primary to-secondary" },
];

const recentActivities = [
    { student: "Ahmed Hassan", action: "Completed Juz 5", time: "2 hours ago", type: "achievement" },
    { student: "Fatima Rahman", action: "Perfect Attendance - 6 months", time: "5 hours ago", type: "milestone" },
    { student: "Ibrahim Ali", action: "Excellent Behavior Score", time: "1 day ago", type: "recognition" },
    { student: "Aisha Khan", action: "Tajweed Certificate Earned", time: "2 days ago", type: "achievement" },
];

const upcomingEvents = [
    { title: "Quran Recitation Competition", date: "Dec 15, 2024", participants: "45 students" },
    { title: "Parent-Teacher Meeting", date: "Dec 20, 2024", participants: "All classes" },
    { title: "Annual Day Celebration", date: "Dec 28, 2024", participants: "Entire Madrasa" },
];

const Overview = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-[#90000a]`}>
                                    <Icon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <span className="text-sm font-semibold text-[#90000a]">{stat.change}</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">{stat.title}</p>
                                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#90000a]" />
                        Recent Activities
                    </h2>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#90000a] flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                                    {activity.student.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-foreground">{activity.student}</p>
                                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-secondary" />
                        Upcoming Events
                    </h2>
                    <div className="space-y-4">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="p-4 rounded-lg border-l-4 border-[#90000a] bg-muted/30 hover:bg-muted/50 transition-colors">
                                <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                                <p className="text-sm text-muted-foreground">{event.date}</p>
                                <p className="text-xs text-[#90000a] font-medium mt-2">{event.participants}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Overview;
