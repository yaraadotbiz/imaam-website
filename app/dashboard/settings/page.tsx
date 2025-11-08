"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Bell, Shield, Database, Users } from "lucide-react";

const Settings = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
                <p className="text-muted-foreground">Manage system settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <SettingsIcon className="w-5 h-5 text-primary" />
                        General Settings
                    </h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="madrasa-name">Madrasa Name</Label>
                            <Input id="madrasa-name" defaultValue="Imaam 360 Islamic Center" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contact">Contact Number</Label>
                            <Input id="contact" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="info@imaam360.com" />
                        </div>
                        <Button className="bg-[#90000a] text-primary-foreground">Save Changes</Button>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-primary" />
                        Notification Settings
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b">
                            <div>
                                <p className="font-medium">Attendance Alerts</p>
                                <p className="text-sm text-muted-foreground">Get notified about low attendance</p>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b">
                            <div>
                                <p className="font-medium">Performance Updates</p>
                                <p className="text-sm text-muted-foreground">Receive performance reports</p>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <p className="font-medium">Event Reminders</p>
                                <p className="text-sm text-muted-foreground">Notifications for upcoming events</p>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        User Management
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">Manage admin and staff access</p>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                                <div>
                                    <p className="font-medium">Total Admins</p>
                                    <p className="text-2xl font-bold text-primary">3</p>
                                </div>
                                <Button variant="outline" size="sm">Manage</Button>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                                <div>
                                    <p className="font-medium">Total Ustaads</p>
                                    <p className="text-2xl font-bold text-primary">25</p>
                                </div>
                                <Button variant="outline" size="sm">Manage</Button>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" />
                        Data Management
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">Backup and export options</p>
                        <div className="space-y-3">
                            <Button variant="outline" className="w-full justify-start">
                                <Database className="w-4 h-4 mr-2" />
                                Backup Database
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Shield className="w-4 h-4 mr-2" />
                                Export Student Data
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Shield className="w-4 h-4 mr-2" />
                                Export Attendance Records
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Settings;
