"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, CheckCircle, XCircle, Clock, Users, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const attendanceData = [
    { class: "Hifz-A", total: 45, present: 43, absent: 2, percentage: 95.6 },
    { class: "Hifz-B", total: 38, present: 37, absent: 1, percentage: 97.4 },
    { class: "Maktab-M1", total: 62, present: 60, absent: 2, percentage: 96.8 },
    { class: "Maktab-M2", total: 58, present: 56, absent: 2, percentage: 96.6 },
    { class: "Maktab-F1", total: 55, present: 54, absent: 1, percentage: 98.2 },
    { class: "Maktab-F2", total: 48, present: 46, absent: 2, percentage: 95.8 },
    { class: "Diniyat-M1", total: 52, present: 51, absent: 1, percentage: 98.1 },
    { class: "Diniyat-F1", total: 45, present: 44, absent: 1, percentage: 97.8 },
];

const teacherData = [
    { name: "Ustaad Abdul Rahman", status: "present", zone: "Zone 1", masjid: "Masjid An-Noor" },
    { name: "Ustadha Khadija", status: "present", zone: "Zone 2", masjid: "Masjid Al-Falah" },
    { name: "Ustaad Yusuf", status: "present", zone: "Zone 1", masjid: "Masjid An-Noor" },
    { name: "Ustadha Zaynab", status: "absent", zone: "Zone 3", masjid: "Masjid As-Salam" },
    { name: "Ustaad Ibrahim", status: "present", zone: "Zone 2", masjid: "Masjid Al-Falah" },
    { name: "Ustadha Maryam", status: "present", zone: "Zone 4", masjid: "Masjid Al-Huda" },
    { name: "Ustaad Hassan", status: "present", zone: "Zone 5", masjid: "Masjid Al-Iman" },
    { name: "Ustadha Aisha", status: "absent", zone: "Zone 5", masjid: "Masjid Al-Iman" },
];

const zoneData = [
    { zone: "Zone 1", total: 124, present: 120, percentage: 96.8 },
    { zone: "Zone 2", total: 98, present: 95, percentage: 96.9 },
    { zone: "Zone 3", total: 87, present: 85, percentage: 97.7 },
    { zone: "Zone 4", total: 76, present: 74, percentage: 97.4 },
    { zone: "Zone 5", total: 92, present: 88, percentage: 95.7 },
    { zone: "Zone 6", total: 68, present: 66, percentage: 97.1 },
    { zone: "Zone 7", total: 54, present: 52, percentage: 96.3 },
    { zone: "Zone 8", total: 45, present: 44, percentage: 97.8 },
];

const mockStudentsByZone: Record<string, Array<{ id: string; name: string; present: boolean }>> = {
    "Zone 1": [
        { id: "STU001", name: "Ahmed Hassan", present: true },
        { id: "STU003", name: "Ibrahim Ali", present: true },
        { id: "STU007", name: "Yusuf Khan", present: false },
    ],
    "Zone 2": [
        { id: "STU002", name: "Fatima Rahman", present: true },
        { id: "STU005", name: "Omar Siddiqui", present: true },
    ],
};

const Attendance = () => {
    const [isMarkingOpen, setIsMarkingOpen] = useState(false);
    const [selectedZone, setSelectedZone] = useState("");
    const [selectedMasjid, setSelectedMasjid] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [studentAttendance, setStudentAttendance] = useState<Record<string, boolean>>({});
    const { toast } = useToast();

    const totalStudents = attendanceData.reduce((sum, item) => sum + item.total, 0);
    const totalPresent = attendanceData.reduce((sum, item) => sum + item.present, 0);
    const totalAbsent = attendanceData.reduce((sum, item) => sum + item.absent, 0);
    const overallPercentage = ((totalPresent / totalStudents) * 100).toFixed(1);

    const presentTeachers = teacherData.filter(t => t.status === "present").length;
    const absentTeachers = teacherData.filter(t => t.status === "absent").length;

    const studentsToMark = selectedZone ? mockStudentsByZone[selectedZone] || [] : [];

    const handleMarkAttendance = () => {
        toast({
            title: "Attendance Marked",
            description: `Attendance has been recorded for ${Object.values(studentAttendance).filter(Boolean).length} students`
        });
        setIsMarkingOpen(false);
        setSelectedZone("");
        setSelectedMasjid("");
        setSelectedTeacher("");
        setStudentAttendance({});
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Attendance Management</h1>
                    <p className="text-muted-foreground">Track and manage daily attendance</p>
                </div>
                <Dialog open={isMarkingOpen} onOpenChange={setIsMarkingOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#90000a] text-primary-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            Mark Today's Attendance
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Mark Attendance</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Select Zone</Label>
                                <Select value={selectedZone} onValueChange={setSelectedZone}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose zone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {zoneData.map(z => (
                                            <SelectItem key={z.zone} value={z.zone}>{z.zone}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {selectedZone && (
                                <div className="space-y-2">
                                    <Label>Select Masjid</Label>
                                    <Select value={selectedMasjid} onValueChange={setSelectedMasjid}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose masjid" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Masjid An-Noor">Masjid An-Noor</SelectItem>
                                            <SelectItem value="Masjid Al-Falah">Masjid Al-Falah</SelectItem>
                                            <SelectItem value="Masjid As-Salam">Masjid As-Salam</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            {selectedMasjid && (
                                <div className="space-y-2">
                                    <Label>Select Teacher</Label>
                                    <Select value={selectedTeacher} onValueChange={setSelectedTeacher}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose teacher" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {teacherData.filter(t => t.zone === selectedZone && t.masjid === selectedMasjid).map(t => (
                                                <SelectItem key={t.name} value={t.name}>{t.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            {selectedTeacher && studentsToMark.length > 0 && (
                                <div className="space-y-3 pt-4">
                                    <Label>Mark Student Attendance</Label>
                                    <div className="border rounded-lg p-4 space-y-3 max-h-[300px] overflow-y-auto">
                                        {studentsToMark.map(student => (
                                            <div key={student.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#90000a] flex items-center justify-center text-primary-foreground text-xs font-bold">
                                                        {student.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{student.name}</p>
                                                        <p className="text-xs text-muted-foreground">{student.id}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox
                                                        checked={studentAttendance[student.id] ?? student.present}
                                                        onCheckedChange={(checked) =>
                                                            setStudentAttendance({ ...studentAttendance, [student.id]: checked as boolean })
                                                        }
                                                    />
                                                    <span className="text-sm">Present</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-4">
                                <Button variant="outline" onClick={() => setIsMarkingOpen(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    className="bg-[#90000a] text-primary-foreground"
                                    onClick={handleMarkAttendance}
                                    disabled={!selectedTeacher || studentsToMark.length === 0}
                                >
                                    Save Attendance
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-destructive/10">
                            <Users className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-sm text-muted-foreground">Total Students</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{totalStudents}</p>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-destructive/10">
                            <CheckCircle className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-sm text-muted-foreground">Present Today</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{totalPresent}</p>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-destructive/10">
                            <XCircle className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-sm text-muted-foreground">Absent Today</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{totalAbsent}</p>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-destructive/10">
                            <Award className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-sm text-muted-foreground">Attendance Rate</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{overallPercentage}%</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Teacher Attendance</h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-300" />
                                <span className="font-semibold">Present Teachers</span>
                            </div>
                            <Badge className="bg-accent/10 text-accent border-0 text-lg px-4">{presentTeachers}</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg">
                            <div className="flex items-center gap-3">
                                <XCircle className="w-5 h-5 text-destructive" />
                                <span className="font-semibold">Absent Teachers</span>
                            </div>
                            <Badge variant="destructive" className="text-lg px-4">{absentTeachers}</Badge>
                        </div>
                    </div>
                    <div className="mt-4 max-h-[300px] overflow-y-auto space-y-2">
                        {teacherData.map((teacher, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                                <div>
                                    <p className="font-medium">{teacher.name}</p>
                                    <p className="text-xs text-muted-foreground">{teacher.zone} - {teacher.masjid}</p>
                                </div>
                                <Badge variant={teacher.status === "present" ? "default" : "destructive"}>
                                    {teacher.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Zone-wise Top Present</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {zoneData.map((zone, idx) => (
                            <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-foreground">{zone.zone}</h3>
                                    <Badge className="bg-[#90000a] text-primary-foreground">
                                        {zone.percentage}%
                                    </Badge>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Total:</span>
                                        <span className="font-semibold">{zone.total}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-accent">Present:</span>
                                        <span className="font-semibold text-accent">{zone.present}</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="w-full bg-muted rounded-full h-1.5">
                                        <div
                                            className="bg-[#90000a] h-1.5 rounded-full"
                                            style={{ width: `${zone.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Class-wise Attendance</h2>
                <div className="space-y-4">
                    {attendanceData.map((item, index) => (
                        <div key={index} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">{item.class}</h3>
                                    <p className="text-sm text-muted-foreground">Total: {item.total} students</p>
                                </div>
                                <Badge
                                    variant={item.percentage >= 97 ? "default" : "secondary"}
                                    className="text-base px-4 py-1"
                                >
                                    {item.percentage}%
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-accent" />
                                    <span className="text-sm">
                                        <span className="font-semibold text-accent">{item.present}</span> Present
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <XCircle className="w-4 h-4 text-destructive" />
                                    <span className="text-sm">
                                        <span className="font-semibold text-destructive">{item.absent}</span> Absent
                                    </span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                        className="bg-[#90000a] h-2 rounded-full transition-all"
                                        style={{ width: `${item.percentage}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Attendance;
