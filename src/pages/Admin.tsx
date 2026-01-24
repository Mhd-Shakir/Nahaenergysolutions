import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Lock,
  LogOut,
  Users,
  Phone,
  Zap,
  Calendar,
  ArrowLeft,
  RefreshCw,
  MessageSquare,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import LeadsTable, { Lead } from "@/components/admin/LeadsTable";
import ProjectsManager from "@/components/admin/ProjectsManager";

const ADMIN_PIN = "1234";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const auth = sessionStorage.getItem("nahasolar_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchLeads();
    }
  }, []);

  const fetchLeads = () => {
    setIsLoading(true);
    const storedLeads = JSON.parse(
      localStorage.getItem("nahasolar_leads") || "[]"
    );
    setLeads(storedLeads);
    setIsLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("nahasolar_admin_auth", "true");
      fetchLeads();
      toast({
        title: "Welcome Admin!",
        description: "You are now logged in to the dashboard.",
      });
    } else {
      toast({
        title: "Invalid PIN",
        description: "Please enter the correct admin PIN.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("nahasolar_admin_auth");
    setPin("");
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  const updateLeadStatus = (id: string, newStatus: string) => {
    const updatedLeads = leads.map((lead) =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem("nahasolar_leads", JSON.stringify(updatedLeads));
    toast({
      title: "Status Updated",
      description: `Lead status changed to ${newStatus}`,
    });
  };

  const deleteLead = (id: string) => {
    const updatedLeads = leads.filter((lead) => lead.id !== id);
    setLeads(updatedLeads);
    localStorage.setItem("nahasolar_leads", JSON.stringify(updatedLeads));
    toast({
      title: "Lead Deleted",
      description: "The lead has been removed.",
    });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 gradient-solar rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold">Admin Panel</h1>
              <p className="text-muted-foreground mt-2">
                Enter your PIN to access the dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pin" className="text-sm font-medium">
                  Admin PIN
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="pin"
                    type="password"
                    placeholder="Enter 4-digit PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="pl-10 h-12 text-center tracking-widest text-lg"
                    maxLength={4}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gradient-solar border-0 font-semibold h-12"
              >
                Access Dashboard
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Link>
            </div>

            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                Demo PIN: <span className="font-mono font-bold">1234</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="gradient-solar p-2 rounded-lg">
              <Sun className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg">Nahasolar Admin</h1>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchLeads}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2 text-destructive hover:text-destructive"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-solar rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold">{leads.length}</p>
                <p className="text-sm text-muted-foreground">Total Leads</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold">
                  {leads.filter((l) => l.status === "New").length}
                </p>
                <p className="text-sm text-muted-foreground">New Leads</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold">
                  {leads.filter((l) => l.status === "Contacted").length}
                </p>
                <p className="text-sm text-muted-foreground">Contacted</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold">
                  {leads.filter((l) => l.status === "Qualified").length}
                </p>
                <p className="text-sm text-muted-foreground">Qualified</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue="leads" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="leads" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact Forms
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-2">
                <Building2 className="w-4 h-4" />
                Projects Management
              </TabsTrigger>
            </TabsList>

            <TabsContent value="leads" className="space-y-4">
              <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="font-display font-bold text-xl">Contact Form Submissions</h2>
                  <p className="text-sm text-muted-foreground">
                    View and manage all customer inquiries and quote requests
                  </p>
                </div>
                <div className="p-6">
                  <LeadsTable
                    leads={leads}
                    onUpdateStatus={updateLeadStatus}
                    onDeleteLead={deleteLead}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="font-display font-bold text-xl">Projects Manager</h2>
                  <p className="text-sm text-muted-foreground">
                    Add, edit, or remove solar projects displayed on the website
                  </p>
                </div>
                <div className="p-6">
                  <ProjectsManager />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default Admin;
