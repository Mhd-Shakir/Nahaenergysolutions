import { useState, useEffect } from "react";
import { Plus, Trash2, Home, Building2, Factory, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the Project type
export interface Project {
    id: string; // Add an ID for easier management
    title: string;
    location: string;
    category: "Residential" | "Commercial" | "Industrial";
    iconName: "Home" | "Building2" | "Factory";
    capacity: string;
    image: string;
    savings: string;
    gradient: string;
}

const ProjectsManager = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const { toast } = useToast();

    // Form State
    const [newProject, setNewProject] = useState<Partial<Project>>({
        category: "Residential",
        iconName: "Home",
        gradient: "from-blue-500/20 to-cyan-500/20"
    });

    // Default gradients
    const gradients = [
        { label: "Blue/Cyan", value: "from-blue-500/20 to-cyan-500/20" },
        { label: "Purple/Pink", value: "from-purple-500/20 to-pink-500/20" },
        { label: "Green/Emerald", value: "from-green-500/20 to-emerald-500/20" },
        { label: "Orange/Yellow", value: "from-orange-500/20 to-yellow-500/20" },
        { label: "Red/Pink", value: "from-red-500/20 to-pink-500/20" },
        { label: "Indigo/Blue", value: "from-indigo-500/20 to-blue-500/20" },
    ];

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        const stored = localStorage.getItem("nahasolar_projects_v3");
        if (stored) {
            setProjects(JSON.parse(stored));
        } else {
            // Seed defaults to avoid empty state in Admin
            const defaults: Project[] = [
                {
                    id: "1",
                    title: "Luxury Villa Solar Installation",
                    location: "Bangalore, Karnataka",
                    category: "Residential",
                    iconName: "Home",
                    capacity: "15 KW",
                    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
                    savings: "₹18,000/month",
                    gradient: "from-blue-500/20 to-cyan-500/20",
                },
                {
                    id: "2",
                    title: "Commercial Office Complex",
                    location: "Mumbai, Maharashtra",
                    category: "Commercial",
                    iconName: "Building2",
                    capacity: "50 KW",
                    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
                    savings: "₹65,000/month",
                    gradient: "from-purple-500/20 to-pink-500/20",
                },
                {
                    id: "3",
                    title: "Manufacturing Plant",
                    location: "Pune, Maharashtra",
                    category: "Industrial",
                    iconName: "Factory",
                    capacity: "200 KW",
                    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
                    savings: "₹2,50,000/month",
                    gradient: "from-green-500/20 to-emerald-500/20",
                },
                {
                    id: "4",
                    title: "Residential Community",
                    location: "Delhi NCR",
                    category: "Residential",
                    iconName: "Home",
                    capacity: "100 KW",
                    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
                    savings: "₹1,20,000/month",
                    gradient: "from-orange-500/20 to-yellow-500/20",
                },
                {
                    id: "5",
                    title: "Hospital Solar System",
                    location: "Hyderabad, Telangana",
                    category: "Commercial",
                    iconName: "Building2",
                    capacity: "75 KW",
                    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
                    savings: "₹90,000/month",
                    gradient: "from-red-500/20 to-pink-500/20",
                },
                {
                    id: "6",
                    title: "Tech Park Solar Grid",
                    location: "Chennai, Tamil Nadu",
                    category: "Commercial",
                    iconName: "Building2",
                    capacity: "150 KW",
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
                    savings: "₹1,80,000/month",
                    gradient: "from-indigo-500/20 to-blue-500/20",
                },
            ];
            setProjects(defaults);
            localStorage.setItem("nahasolar_projects_v3", JSON.stringify(defaults));
        }
    };

    const handleInputChange = (field: keyof Project, value: string) => {
        setNewProject((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddProject = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProject.title || !newProject.capacity || !newProject.savings || !newProject.image) {
            toast({
                title: "Missing Fields",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        const project: Project = {
            id: Date.now().toString(),
            title: newProject.title || "",
            location: newProject.location || "India",
            category: newProject.category as any,
            iconName: newProject.iconName as any,
            capacity: newProject.capacity || "",
            image: newProject.image || "",
            savings: newProject.savings || "",
            gradient: newProject.gradient || gradients[0].value,
        };

        const updatedProjects = [...projects, project];
        setProjects(updatedProjects);
        localStorage.setItem("nahasolar_projects_v3", JSON.stringify(updatedProjects));

        // Reset form
        setNewProject({
            category: "Residential",
            iconName: "Home",
            gradient: "from-blue-500/20 to-cyan-500/20",
            title: "",
            location: "",
            capacity: "",
            savings: "",
            image: ""
        });

        toast({
            title: "Success",
            description: "Project added successfully!",
        });
    };

    const handleDeleteProject = (id: string) => {
        const updatedProjects = projects.filter(p => p.id !== id);
        setProjects(updatedProjects);
        localStorage.setItem("nahasolar_projects_v3", JSON.stringify(updatedProjects));
        toast({
            title: "Deleted",
            description: "Project removed successfully.",
        });
    };

    return (
        <div className="space-y-8">
            {/* Add New Project Form */}
            <div className="bg-card p-6 rounded-xl border shadow-sm">
                <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <Plus className="w-5 h-5 text-primary" />
                    Add New Project
                </h3>
                <form onSubmit={handleAddProject} className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Project Title</Label>
                        <Input
                            id="title"
                            placeholder="e.g. Luxury Villa Solar"
                            value={newProject.title || ""}
                            onChange={(e) => handleInputChange("title", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            placeholder="e.g. Bangalore, Karnataka"
                            value={newProject.location || ""}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            value={newProject.category}
                            onValueChange={(val) => handleInputChange("category", val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Residential">Residential</SelectItem>
                                <SelectItem value="Commercial">Commercial</SelectItem>
                                <SelectItem value="Industrial">Industrial</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="icon">Icon Type</Label>
                        <Select
                            value={newProject.iconName}
                            onValueChange={(val) => handleInputChange("iconName", val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Icon" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Home">Home (Residential)</SelectItem>
                                <SelectItem value="Building2">Building (Commercial)</SelectItem>
                                <SelectItem value="Factory">Factory (Industrial)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input
                            id="capacity"
                            placeholder="e.g. 15 KW"
                            value={newProject.capacity || ""}
                            onChange={(e) => handleInputChange("capacity", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="savings">Savings</Label>
                        <Input
                            id="savings"
                            placeholder="e.g. ₹18,000/month"
                            value={newProject.savings || ""}
                            onChange={(e) => handleInputChange("savings", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input
                            id="image"
                            placeholder="https://..."
                            value={newProject.image || ""}
                            onChange={(e) => handleInputChange("image", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gradient">Card Gradient</Label>
                        <Select
                            value={newProject.gradient}
                            onValueChange={(val) => handleInputChange("gradient", val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Gradient" />
                            </SelectTrigger>
                            <SelectContent>
                                {gradients.map(g => (
                                    <SelectItem key={g.label} value={g.value}>{g.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="md:col-span-2 mt-2">
                        <Button type="submit" className="w-full gradient-solar">Add Project</Button>
                    </div>
                </form>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
                <h3 className="font-display font-bold text-lg">Existing Projects</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                            <div className="h-32 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    className="absolute top-2 right-2 h-8 w-8"
                                    onClick={() => handleDeleteProject(project.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold line-clamp-1">{project.title}</h4>
                                        <p className="text-xs text-muted-foreground">{project.location}</p>
                                    </div>
                                    <Badge variant="outline">{project.category}</Badge>
                                </div>
                                <div className="flex gap-4 text-xs text-muted-foreground">
                                    <span>{project.capacity}</span>
                                    <span>{project.savings}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    {projects.length === 0 && (
                        <p className="text-muted-foreground text-sm col-span-2 text-center py-8">
                            No projects found. Add one above to get started.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsManager;
