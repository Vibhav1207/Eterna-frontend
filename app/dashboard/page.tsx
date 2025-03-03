import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Clock, Lock, AlertCircle, FileText, Activity } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Mock data for demonstration
  const storageUsed = 2.7; // GB
  const storageLimit = 10; // GB
  const storagePercentage = (storageUsed / storageLimit) * 100;
  
  const upcomingUnlocks = [
    { id: 1, name: "Financial_Report_2025.pdf", unlockDate: "2025-06-15", countdown: "2 days" },
    { id: 2, name: "Project_Proposal.docx", unlockDate: "2025-06-18", countdown: "5 days" },
    { id: 3, name: "Contract_Agreement.pdf", unlockDate: "2025-07-01", countdown: "2 weeks" },
  ];
  
  const recentActivity = [
    { id: 1, action: "Uploaded", file: "Quarterly_Report.xlsx", date: "2 hours ago" },
    { id: 2, action: "Set time-lock", file: "Business_Plan.pdf", date: "Yesterday" },
    { id: 3, action: "Unlocked", file: "Meeting_Notes.docx", date: "3 days ago" },
    { id: 4, action: "Downloaded", file: "Tax_Documents.pdf", date: "1 week ago" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your secure storage and time-locked files
          </p>
        </div>
        <Button className="mt-4 md:mt-0" size="lg">
          <Upload className="mr-2 h-4 w-4" /> Upload Files
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{storageUsed} GB <span className="text-muted-foreground text-sm font-normal">/ {storageLimit} GB</span></div>
            <Progress value={storagePercentage} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Unlocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">Next unlock in 2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Free</div>
            <Button variant="link" className="px-0 h-auto text-xs mt-1">
              Upgrade to Premium
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Upload</CardTitle>
            <CardDescription>
              Securely upload and encrypt your files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">
                Drag and drop files here or click to browse
              </p>
              <Button className="mt-2">Select Files</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Unlocks</CardTitle>
              <CardDescription>
                Files scheduled to be unlocked soon
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingUnlocks.map((file) => (
                <div key={file.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">Unlocks on {file.unlockDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    {file.countdown}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activity">
        <TabsList className="mb-4">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest actions and file operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="text-sm font-medium">
                          <span className="text-primary">{activity.action}</span> {activity.file}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>
                Important notifications about your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center p-4 border rounded-lg bg-muted/50">
                <AlertCircle className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="text-sm font-medium">Storage almost full</p>
                  <p className="text-xs text-muted-foreground">
                    You're using 80% of your storage. Consider upgrading your plan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}