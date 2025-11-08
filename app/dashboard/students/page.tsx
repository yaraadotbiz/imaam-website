"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, UserPlus, Edit, Trash2, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Student {
    id: string;
    name: string;
    parentNo: string;
    class: string;
    zone: string;
    teacher: string;
    masjid: string;
    photo?: string;
    attendance: string;
    performance: string;
    status: string;
}

const initialMockStudents: Student[] = [
    { id: "STU001", name: "Ahmed Hassan", parentNo: "+91 98765 43210", class: "Hifz-A", zone: "Zone 1", teacher: "Ustaad Abdul Rahman", masjid: "Masjid An-Noor", attendance: "98%", performance: "95%", status: "active" },
    { id: "STU002", name: "Fatima Rahman", parentNo: "+91 98765 43211", class: "Maktab-F1", zone: "Zone 2", teacher: "Ustadha Khadija", masjid: "Masjid Al-Falah", attendance: "100%", performance: "92%", status: "active" },
    { id: "STU003", name: "Ibrahim Ali", parentNo: "+91 98765 43212", class: "Diniyat-M2", zone: "Zone 1", teacher: "Ustaad Yusuf", masjid: "Masjid An-Noor", attendance: "96%", performance: "88%", status: "active" },
    { id: "STU004", name: "Aisha Khan", parentNo: "+91 98765 43213", class: "Hifz-B", zone: "Zone 3", teacher: "Ustadha Zaynab", masjid: "Masjid As-Salam", attendance: "99%", performance: "97%", status: "active" },
    { id: "STU005", name: "Omar Siddiqui", parentNo: "+91 98765 43214", class: "Maktab-M1", zone: "Zone 2", teacher: "Ustaad Ibrahim", masjid: "Masjid Al-Falah", attendance: "94%", performance: "85%", status: "active" },
    { id: "STU006", name: "Zainab Ahmed", parentNo: "+91 98765 43215", class: "Diniyat-F1", zone: "Zone 4", teacher: "Ustadha Maryam", masjid: "Masjid Al-Huda", attendance: "97%", performance: "90%", status: "active" },
    { id: "STU007", name: "Yusuf Khan", parentNo: "+91 98765 43216", class: "Hifz-A", zone: "Zone 1", teacher: "Ustaad Abdul Rahman", masjid: "Masjid An-Noor", attendance: "95%", performance: "89%", status: "active" },
    { id: "STU008", name: "Mariam Hassan", parentNo: "+91 98765 43217", class: "Maktab-F2", zone: "Zone 5", teacher: "Ustadha Aisha", masjid: "Masjid Al-Iman", attendance: "98%", performance: "93%", status: "active" },
];

const Students = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState<Student[]>(initialMockStudents);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState<Student | null>(null);
    const [formData, setFormData] = useState<Partial<Student>>({});
    const { toast } = useToast();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOpenDialog = (student?: Student) => {
        if (student) {
            setEditingStudent(student);
            setFormData(student);
        } else {
            setEditingStudent(null);
            setFormData({
                id: `STU${String(students.length + 1).padStart(3, '0')}`,
                status: 'active'
            });
        }
        setIsDialogOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingStudent) {
            setStudents(students.map(s => s.id === editingStudent.id ? { ...s, ...formData } as Student : s));
            toast({ title: "Success", description: "Student updated successfully" });
        } else {
            setStudents([...students, formData as Student]);
            toast({ title: "Success", description: "Student added successfully" });
        }

        setIsDialogOpen(false);
        setFormData({});
    };

    const handleDelete = (id: string) => {
        setStudents(students.filter(s => s.id !== id));
        toast({ title: "Success", description: "Student deleted successfully", variant: "destructive" });
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, photo: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Student Management</h1>
                    <p className="text-muted-foreground">Manage and monitor all students</p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#90000a] text-primary-foreground" onClick={() => handleOpenDialog()}>
                            <UserPlus className="w-4 h-4 mr-2" />
                            Add Student
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{editingStudent ? 'Edit Student' : 'Add New Student'}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="id">Student ID</Label>
                                    <Input
                                        id="id"
                                        value={formData.id || ''}
                                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                        disabled={!!editingStudent}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name || ''}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="parentNo">Parent Contact</Label>
                                    <Input
                                        id="parentNo"
                                        value={formData.parentNo || ''}
                                        onChange={(e) => setFormData({ ...formData, parentNo: e.target.value })}
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="class">Class</Label>
                                    <Select value={formData.class || ''} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Hifz-A">Hifz-A</SelectItem>
                                            <SelectItem value="Hifz-B">Hifz-B</SelectItem>
                                            <SelectItem value="Maktab-M1">Maktab-M1</SelectItem>
                                            <SelectItem value="Maktab-M2">Maktab-M2</SelectItem>
                                            <SelectItem value="Maktab-F1">Maktab-F1</SelectItem>
                                            <SelectItem value="Maktab-F2">Maktab-F2</SelectItem>
                                            <SelectItem value="Diniyat-M1">Diniyat-M1</SelectItem>
                                            <SelectItem value="Diniyat-M2">Diniyat-M2</SelectItem>
                                            <SelectItem value="Diniyat-F1">Diniyat-F1</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="zone">Zone</Label>
                                    <Select value={formData.zone || ''} onValueChange={(value) => setFormData({ ...formData, zone: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select zone" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(z => (
                                                <SelectItem key={z} value={`Zone ${z}`}>Zone {z}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teacher">Assigned Teacher</Label>
                                    <Input
                                        id="teacher"
                                        value={formData.teacher || ''}
                                        onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="masjid">Masjid Name</Label>
                                <Input
                                    id="masjid"
                                    value={formData.masjid || ''}
                                    onChange={(e) => setFormData({ ...formData, masjid: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="photo">Student Photo</Label>
                                <div className="flex items-center gap-4">
                                    {formData.photo && (
                                        <img src={formData.photo} alt="Student" className="w-20 h-20 rounded-lg object-cover" />
                                    )}
                                    <div className="flex-1">
                                        <Input
                                            id="photo"
                                            type="file"
                                            accept="image/*"
                                            onChange={handlePhotoUpload}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-[#90000a] text-primary-foreground">
                                    {editingStudent ? 'Update' : 'Add'} Student
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Card className="p-6">
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Button variant="outline">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">ID</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Name</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Parent No</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Class</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Zone</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Teacher</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Masjid</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="border-b hover:bg-muted/50 transition-colors">
                                    <td className="py-4 px-4 font-medium">{student.id}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            {student.photo ? (
                                                <img src={student.photo} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-[#90000a] flex items-center justify-center text-primary-foreground text-sm font-bold">
                                                    {student.name.charAt(0)}
                                                </div>
                                            )}
                                            <span className="font-medium">{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm">{student.parentNo}</td>
                                    <td className="py-4 px-4">{student.class}</td>
                                    <td className="py-4 px-4">
                                        <Badge variant="outline">{student.zone}</Badge>
                                    </td>
                                    <td className="py-4 px-4 text-sm">{student.teacher}</td>
                                    <td className="py-4 px-4 text-sm">{student.masjid}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(student)}>
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(student.id)}>
                                                <Trash2 className="w-4 h-4 text-destructive" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Students;
