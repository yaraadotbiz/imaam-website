"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Award, Trophy, Star, Medal, Download, Plus, Edit, Trash2, FileText } from "lucide-react";
import { useState } from "react";

const topPerformers = [
    {
        name: "Ahmed Hassan",
        class: "Hifz-A",
        category: "Academic Excellence",
        score: 98,
        achievement: "Memorized 5 Juz with perfect Tajweed",
        month: "November 2024"
    },
    {
        name: "Fatima Rahman",
        class: "Maktab-F1",
        category: "Perfect Attendance",
        score: 100,
        achievement: "100% attendance for 6 consecutive months",
        month: "November 2024"
    },
    {
        name: "Ibrahim Ali",
        class: "Diniyat-M2",
        category: "Best Akhlaq",
        score: 97,
        achievement: "Outstanding behavior and character",
        month: "November 2024"
    },
    {
        name: "Aisha Khan",
        class: "Hifz-B",
        category: "Tajweed Master",
        score: 99,
        achievement: "Perfect Quran recitation with beautiful voice",
        month: "November 2024"
    },
];

const Recognition = () => {
    const [performers, setPerformers] = useState(topPerformers);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isCertificateOpen, setIsCertificateOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [selectedStudent, setSelectedStudent] = useState<any>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        class: "",
        category: "",
        score: "",
        achievement: "",
        month: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newPerformer = {
            name: formData.name,
            class: formData.class,
            category: formData.category,
            score: Number(formData.score),
            achievement: formData.achievement,
            month: formData.month
        };

        if (editingIndex !== null) {
            const updated = [...performers];
            updated[editingIndex] = newPerformer;
            setPerformers(updated);
            toast({ title: "Student recognition updated successfully!" });
        } else {
            setPerformers([...performers, newPerformer]);
            toast({ title: "Student recognition added successfully!" });
        }

        setIsDialogOpen(false);
        setEditingIndex(null);
        setFormData({ name: "", class: "", category: "", score: "", achievement: "", month: "" });
    };

    const handleEdit = (performer: any, index: number) => {
        setEditingIndex(index);
        setFormData({
            name: performer.name,
            class: performer.class,
            category: performer.category,
            score: performer.score.toString(),
            achievement: performer.achievement,
            month: performer.month
        });
        setIsDialogOpen(true);
    };

    const handleDelete = (index: number) => {
        setPerformers(performers.filter((_, idx) => idx !== index));
        toast({ title: "Student recognition deleted successfully!" });
    };

    const handleGenerateCertificate = (student: any) => {
        setSelectedStudent(student);
        setIsCertificateOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Recognition & Awards</h1>
                    <p className="text-muted-foreground">Celebrate excellence and achievement</p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#90000a] text-primary-foreground" onClick={() => {
                            setEditingIndex(null);
                            setFormData({ name: "", class: "", category: "", score: "", achievement: "", month: "" });
                        }}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Recognition
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{editingIndex !== null ? "Edit" : "Add"} Student Recognition</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label>Student Name</Label>
                                <Input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g., Ahmed Hassan"
                                    required
                                />
                            </div>
                            <div>
                                <Label>Class</Label>
                                <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select class" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Hifz-A">Hifz-A</SelectItem>
                                        <SelectItem value="Hifz-B">Hifz-B</SelectItem>
                                        <SelectItem value="Maktab-M1">Maktab-M1</SelectItem>
                                        <SelectItem value="Maktab-F1">Maktab-F1</SelectItem>
                                        <SelectItem value="Diniyat-M2">Diniyat-M2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Category</Label>
                                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Academic Excellence">Academic Excellence</SelectItem>
                                        <SelectItem value="Perfect Attendance">Perfect Attendance</SelectItem>
                                        <SelectItem value="Best Akhlaq">Best Akhlaq</SelectItem>
                                        <SelectItem value="Tajweed Master">Tajweed Master</SelectItem>
                                        <SelectItem value="Hifz Completion">Hifz Completion</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Score (%)</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={formData.score}
                                    onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Achievement Description</Label>
                                <Textarea
                                    value={formData.achievement}
                                    onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
                                    placeholder="Describe the achievement..."
                                    required
                                />
                            </div>
                            <div>
                                <Label>Month & Year</Label>
                                <Input
                                    value={formData.month}
                                    onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                                    placeholder="e.g., November 2024"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-[#90000a] text-primary-foreground">
                                {editingIndex !== null ? "Update" : "Add"} Recognition
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <Card className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#90000a] flex items-center justify-center">
                        <Trophy className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-foreground">48</p>
                        <p className="text-sm text-muted-foreground">Top Performers</p>
                    </div>
                </Card>

                <Card className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#90000a] flex items-center justify-center">
                        <Star className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-foreground">125</p>
                        <p className="text-sm text-muted-foreground">Certificates Issued</p>
                    </div>
                </Card>

                <Card className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#90000a] flex items-center justify-center">
                        <Medal className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-foreground">32</p>
                        <p className="text-sm text-muted-foreground">Special Awards</p>
                    </div>
                </Card>

                <Card className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#90000a] flex items-center justify-center">
                        <Award className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-foreground">15</p>
                        <p className="text-sm text-muted-foreground">Monthly Winners</p>
                    </div>
                </Card>
            </div>

            <Card className="p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-[#90000a]" />
                    Students of the Month - November 2024
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {performers.map((student, index) => (
                        <Card key={index} className="p-6 border-2 hover:border-primary hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-[#90000a] flex items-center justify-center text-primary-foreground text-2xl font-bold">
                                        {student.name.charAt(0)}
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                                        <Star className="w-4 h-4 text-foreground fill-current" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{student.name}</h3>
                                        <p className="text-sm text-muted-foreground">{student.class}</p>
                                    </div>

                                    <Badge className="bg-[#90000a] text-primary-foreground border-0">
                                        {student.category}
                                    </Badge>

                                    <p className="text-sm text-muted-foreground">{student.achievement}</p>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex items-center gap-2">
                                            <div className="text-2xl font-bold text-[#90000a]">{student.score}%</div>
                                            <span className="text-xs text-muted-foreground">Score</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline" onClick={() => handleGenerateCertificate(student)}>
                                                <FileText className="w-4 h-4 mr-1" />
                                                Certificate
                                            </Button>
                                            <Button size="sm" variant="outline" onClick={() => handleEdit(student, index)}>
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" variant="outline" onClick={() => handleDelete(index)}>
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>

            {/* Certificate Preview Dialog */}
            <Dialog open={isCertificateOpen} onOpenChange={setIsCertificateOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Certificate Preview</DialogTitle>
                    </DialogHeader>
                    {selectedStudent && (
                        <div className="bg-yellow-50/30 p-8 border-8 border-double border-primary rounded-lg relative overflow-hidden">
                            {/* Islamic Pattern Overlay */}
                            <div className="absolute inset-0 opacity-5 pattern-islamic pointer-events-none"></div>

                            {/* Header */}
                            <div className="text-center mb-8 relative z-10">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#90000a] flex items-center justify-center">
                                    <Award className="w-12 h-12 text-primary-foreground" />
                                </div>
                                <h2 className="text-4xl font-bold gradient-text mb-2">Certificate of Excellence</h2>
                                <p className="text-xl text-muted-foreground">Imaam 360 Islamic Academy</p>
                            </div>

                            {/* Body */}
                            <div className="text-center space-y-6 mb-8 relative z-10">
                                <p className="text-lg text-muted-foreground">This is to certify that</p>
                                <h3 className="text-5xl font-bold gradient-text">{selectedStudent.name}</h3>
                                <p className="text-lg text-muted-foreground">of <span className="font-semibold text-foreground">{selectedStudent.class}</span></p>

                                <div className="py-6">
                                    <Badge className="text-xl px-8 py-3 bg-[#90000a] text-primary-foreground border-0">
                                        {selectedStudent.category}
                                    </Badge>
                                </div>

                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    {selectedStudent.achievement}
                                </p>

                                <div className="flex items-center justify-center gap-3 pt-4">
                                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                                    <span className="text-4xl font-bold text-yellow-400">{selectedStudent.score}%</span>
                                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                                </div>

                                <p className="text-sm text-muted-foreground pt-4">{selectedStudent.month}</p>
                            </div>

                            {/* Footer Signatures */}
                            <div className="grid grid-cols-2 gap-12 mt-12 relative z-10">
                                <div className="text-center">
                                    <div className="border-t-2 border-muted-foreground/30 pt-2">
                                        <p className="font-semibold text-foreground">Principal's Signature</p>
                                        <p className="text-sm text-muted-foreground">Imaam 360 Academy</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="border-t-2 border-muted-foreground/30 pt-2">
                                        <p className="font-semibold text-foreground">Teacher's Signature</p>
                                        <p className="text-sm text-muted-foreground">Class Instructor</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-8 left-8 w-16 h-16 gradient-gold rounded-full opacity-20"></div>
                            <div className="absolute bottom-8 right-8 w-16 h-16 gradient-gold rounded-full opacity-20"></div>
                        </div>
                    )}
                    <div className="flex gap-3 justify-end mt-4">
                        <Button variant="outline" onClick={() => setIsCertificateOpen(false)}>Close</Button>
                        <Button className="bg-[#90000a] text-primary-foreground" onClick={() => {
                            toast({ title: "Certificate downloaded successfully!" });
                            setIsCertificateOpen(false);
                        }}>
                            <Download className="w-4 h-4 mr-2" />
                            Download Certificate
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Recognition;
