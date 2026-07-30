import { useState, useEffect } from "react";
import { Plus, Trash2, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
}

const TestimonialsManager = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const { toast } = useToast();

    // Form State
    const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
        rating: 5,
    });

    useEffect(() => {
        loadTestimonials();
    }, []);

    const loadTestimonials = () => {
        const stored = localStorage.getItem("nahasolar_testimonials_v1");
        if (stored) {
            setTestimonials(JSON.parse(stored));
        } else {
            const defaults: Testimonial[] = [
                {
                    id: "1",
                    name: "Rajesh Kumar",
                    role: "Homeowner, Mumbai",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                    rating: 5,
                    text: "Naha Energy transformed my home! My electricity bills dropped by 85%. The installation was smooth, and the team was incredibly professional. Best investment I've made!",
                },
                {
                    id: "2",
                    name: "Priya Sharma",
                    role: "Business Owner, Delhi",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                    rating: 5,
                    text: "Our factory now runs on clean solar energy. The ROI was faster than expected, and we're contributing to a greener future. Highly recommend Naha Energy!",
                },
                {
                    id: "3",
                    name: "Amit Patel",
                    role: "Villa Owner, Bangalore",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
                    rating: 5,
                    text: "Exceptional service from start to finish. The solar panels look sleek on my roof, and the smart monitoring system is amazing. Zero electricity bills for 6 months now!",
                },
            ];
            setTestimonials(defaults);
            localStorage.setItem("nahasolar_testimonials_v1", JSON.stringify(defaults));
        }
    };

    const handleInputChange = (field: keyof Testimonial, value: string | number) => {
        setNewTestimonial((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddTestimonial = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTestimonial.name || !newTestimonial.role || !newTestimonial.text || !newTestimonial.image) {
            toast({
                title: "Missing Fields",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        const testimonial: Testimonial = {
            id: Date.now().toString(),
            name: newTestimonial.name || "",
            role: newTestimonial.role || "",
            image: newTestimonial.image || "",
            rating: Number(newTestimonial.rating) || 5,
            text: newTestimonial.text || "",
        };

        const updatedTestimonials = [...testimonials, testimonial];
        setTestimonials(updatedTestimonials);
        localStorage.setItem("nahasolar_testimonials_v1", JSON.stringify(updatedTestimonials));

        // Reset form
        setNewTestimonial({
            name: "",
            role: "",
            image: "",
            rating: 5,
            text: "",
        });

        toast({
            title: "Success",
            description: "Testimonial added successfully!",
        });
    };

    const handleDeleteTestimonial = (id: string) => {
        const updatedTestimonials = testimonials.filter(t => t.id !== id);
        setTestimonials(updatedTestimonials);
        localStorage.setItem("nahasolar_testimonials_v1", JSON.stringify(updatedTestimonials));
        toast({
            title: "Deleted",
            description: "Testimonial removed successfully.",
        });
    };

    return (
        <div className="space-y-8">
            {/* Add New Testimonial Form */}
            <div className="bg-card p-6 rounded-xl border shadow-sm">
                <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <Plus className="w-5 h-5 text-primary" />
                    Add New Testimonial
                </h3>
                <form onSubmit={handleAddTestimonial} className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="e.g. Rajesh Kumar"
                            value={newTestimonial.name || ""}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Role / Location</Label>
                        <Input
                            id="role"
                            placeholder="e.g. Homeowner, Mumbai"
                            value={newTestimonial.role || ""}
                            onChange={(e) => handleInputChange("role", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rating">Rating (1-5)</Label>
                        <Select
                            value={newTestimonial.rating?.toString()}
                            onValueChange={(val) => handleInputChange("rating", parseInt(val))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Rating" />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>{num} Stars</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Profile Image (Upload or URL)</Label>
                        <div className="flex gap-2">
                            <Input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="w-auto"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    
                                    if (file.size > 2 * 1024 * 1024) {
                                        toast({
                                            title: "File too large",
                                            description: "Image must be under 2MB",
                                            variant: "destructive"
                                        });
                                        return;
                                    }

                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        handleInputChange("image", reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                }}
                            />
                            <Input
                                id="image-url"
                                placeholder="Or enter URL..."
                                value={newTestimonial.image?.startsWith("data:") ? "" : (newTestimonial.image || "")}
                                onChange={(e) => handleInputChange("image", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="text">Testimonial Content</Label>
                        <Textarea
                            id="text"
                            placeholder="Enter the testimonial..."
                            value={newTestimonial.text || ""}
                            onChange={(e) => handleInputChange("text", e.target.value)}
                            rows={3}
                        />
                    </div>

                    <div className="md:col-span-2 mt-2">
                        <Button type="submit" className="w-full gradient-solar">Add Testimonial</Button>
                    </div>
                </form>
            </div>

            {/* Testimonials List */}
            <div className="space-y-4">
                <h3 className="font-display font-bold text-lg">Existing Testimonials</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="overflow-hidden relative group">
                            <Button
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 h-8 w-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleDeleteTestimonial(testimonial.id)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                            <CardContent className="p-4 pt-6">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">"{testimonial.text}"</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-semibold text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    {testimonials.length === 0 && (
                        <p className="text-muted-foreground text-sm col-span-2 text-center py-8">
                            No testimonials found. Add one above to get started.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsManager;
