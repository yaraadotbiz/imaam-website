"use client"
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, Award, Star, Target, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const performanceData = [
    {
        class: "Hifz-A",
        academic: 92,
        attendance: 96,
        behavior: 94,
        overall: 94,
        topStudent: "Ahmed Hassan"
    },
    {
        class: "Hifz-B",
        academic: 89,
        attendance: 97,
        behavior: 91,
        overall: 92,
        topStudent: "Aisha Khan"
    },
    {
        class: "Maktab-M1",
        academic: 85,
        attendance: 95,
        behavior: 88,
        overall: 89,
        topStudent: "Omar Siddiqui"
    },
    {
        class: "Maktab-F1",
        academic: 91,
        attendance: 98,
        behavior: 93,
        overall: 94,
        topStudent: "Fatima Rahman"
    },
];

const Performance = () => {
    const [performanceRecords, setPerformanceRecords] = useState(performanceData);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        class: "",
        academic: "",
        attendance: "",
        behavior: "",
        topStudent: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newRecord = {
            class: formData.class,
            academic: Number(formData.academic),
            attendance: Number(formData.attendance),
            behavior: Number(formData.behavior),
            overall: Math.round((Number(formData.academic) + Number(formData.attendance) + Number(formData.behavior)) / 3),
            topStudent: formData.topStudent
        };

        if (editingRecord) {
            setPerformanceRecords(performanceRecords.map((record, idx) =>
                idx === editingRecord ? newRecord : record
            ));
            toast({ title: "Performance record updated successfully!" });
        } else {
            setPerformanceRecords([...performanceRecords, newRecord]);
            toast({ title: "Performance record added successfully!" });
        }

        setIsDialogOpen(false);
        setEditingRecord(null);
        setFormData({ class: "", academic: "", attendance: "", behavior: "", topStudent: "" });
    };

    const handleEdit = (record: any, index: number) => {
        setEditingRecord(index);
        setFormData({
            class: record.class,
            academic: record.academic.toString(),
            attendance: record.attendance.toString(),
            behavior: record.behavior.toString(),
            topStudent: record.topStudent
        });
        setIsDialogOpen(true);
    };

    const handleDelete = (index: number) => {
        setPerformanceRecords(performanceRecords.filter((_, idx) => idx !== index));
        toast({ title: "Performance record deleted successfully!" });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Performance Analytics</h1>
                    <p className="text-muted-foreground">Monitor and evaluate student performance across all metrics</p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#90000a] text-primary-foreground" onClick={() => {
                            setEditingRecord(null);
                            setFormData({ class: "", academic: "", attendance: "", behavior: "", topStudent: "" });
                        }}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Performance Record
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>{editingRecord !== null ? "Edit" : "Add"} Performance Record</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label>Class Name</Label>
                                <Input
                                    value={formData.class}
                                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                                    placeholder="e.g., Hifz-A"
                                    required
                                />
                            </div>
                            <div>
                                <Label>Academic Score (%)</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={formData.academic}
                                    onChange={(e) => setFormData({ ...formData, academic: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Attendance Score (%)</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={formData.attendance}
                                    onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Behavior Score (%)</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={formData.behavior}
                                    onChange={(e) => setFormData({ ...formData, behavior: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Top Student Name</Label>
                                <Input
                                    value={formData.topStudent}
                                    onChange={(e) => setFormData({ ...formData, topStudent: e.target.value })}
                                    placeholder="Student name"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-[#90000a] text-primary-foreground">
                                {editingRecord !== null ? "Update" : "Add"} Record
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-[#90000a]">
                            <Target className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">Avg Academic</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">89.3%</p>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-[#90000a]">
                            <TrendingUp className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">Avg Attendance</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">96.5%</p>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-[#90000a]">
                            <Star className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">Avg Behavior</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">91.5%</p>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-[#90000a]">
                            <Award className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">Overall Score</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">92.4%</p>
                </Card>
            </div>

            <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Class Performance Breakdown</h2>
                <div className="space-y-6">
                    {performanceRecords.map((item, index) => (
                        <div key={index} className="p-5 rounded-lg border-2 hover:border-primary transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="font-bold text-xl text-foreground">{item.class}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Top Performer: <span className="text-primary font-semibold">{item.topStudent}</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="text-lg px-4 py-2 bg-[#90000a] text-primary-foreground border-0">
                                        {item.overall}% Overall
                                    </Badge>
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(item, index)}>
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={() => handleDelete(index)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Academic Excellence</span>
                                        <span className="font-semibold">{item.academic}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="bg-emerald-800 h-2 rounded-full transition-all"
                                            style={{ width: `${item.academic}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Attendance Rate</span>
                                        <span className="font-semibold">{item.attendance}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="bg-emerald-400 h-2 rounded-full transition-all"
                                            style={{ width: `${item.attendance}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Behavior Score</span>
                                        <span className="font-semibold">{item.behavior}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="bg-yellow-300 h-2 rounded-full transition-all"
                                            style={{ width: `${item.behavior}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Performance;
