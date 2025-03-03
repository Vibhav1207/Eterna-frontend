"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, FileText, FileLock2, Clock, Download, 
  Filter, SortDesc, Grid, List, FileImage, FileSpreadsheet, 
  FileArchive, FileAudio, FileVideo, MoreVertical 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Mock file data
const mockFiles = [
  {
    id: 1,
    name: "Financial_Report_2025.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadDate: "2025-05-10",
    unlockDate: "2025-06-15",
    status: "locked",
    icon: FileText,
  },
  {
    id: 2,
    name: "Project_Proposal.docx",
    type: "docx",
    size: "1.8 MB",
    uploadDate: "2025-05-12",
    unlockDate: "2025-06-18",
    status: "locked",
    icon: FileText,
  },
  {
    id: 3,
    name: "Quarterly_Report.xlsx",
    type: "xlsx",
    size: "3.2 MB",
    uploadDate: "2025-05-15",
    unlockDate: "2025-05-20",
    status: "unlocked",
    icon: FileSpreadsheet,
  },
  {
    id: 4,
    name: "Product_Photos.zip",
    type: "zip",
    size: "15.7 MB",
    uploadDate: "2025-05-18",
    unlockDate: "2025-07-01",
    status: "locked",
    icon: FileArchive,
  },
  {
    id: 5,
    name: "Meeting_Recording.mp3",
    type: "mp3",
    size: "8.5 MB",
    uploadDate: "2025-05-20",
    unlockDate: "2025-05-25",
    status: "unlocked",
    icon: FileAudio,
  },
  {
    id: 6,
    name: "Presentation_Slides.pptx",
    type: "pptx",
    size: "5.1 MB",
    uploadDate: "2025-05-22",
    unlockDate: "2025-06-10",
    status: "locked",
    icon: FileText,
  },
  {
    id: 7,
    name: "Product_Demo.mp4",
    type: "mp4",
    size: "45.3 MB",
    uploadDate: "2025-05-25",
    unlockDate: "2025-05-30",
    status: "unlocked",
    icon: FileVideo,
  },
  {
    id: 8,
    name: "Logo_Design.png",
    type: "png",
    size: "1.2 MB",
    uploadDate: "2025-05-28",
    unlockDate: "2025-06-05",
    status: "locked",
    icon: FileImage,
  },
];

export default function FilesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter files based on search query and active tab
  const filteredFiles = mockFiles.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "locked" && file.status === "locked") || 
      (activeTab === "unlocked" && file.status === "unlocked");
    
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status: string) => {
    if (status === "locked") {
      return (
        <Badge variant="outline" className="flex items-center gap-1 text-muted-foreground">
          <FileLock2 className="h-3 w-3" />
          <span>Locked</span>
        </Badge>
      );
    } else {
      return (
        <Badge variant="outline" className="flex items-center gap-1 bg-primary/10 text-primary border-primary/20">
          <Download className="h-3 w-3" />
          <span>Available</span>
        </Badge>
      );
    }
  };

  const getFileIcon = (file: typeof mockFiles[0]) => {
    const Icon = file.icon;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Files</h1>
          <p className="text-muted-foreground mt-1">
            Manage your encrypted files and time-locked documents
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <SortDesc className="h-4 w-4" />
          <span>Sort</span>
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="locked">Time-Locked</TabsTrigger>
          <TabsTrigger value="unlocked">Available</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>All Files</CardTitle>
              <CardDescription>
                {filteredFiles.length} files in your vault
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "list" ? (
                <div className="space-y-2">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center overflow-hidden">
                        <div className="p-2 rounded-md bg-muted mr-3">
                          {getFileIcon(file)}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <span>{file.size}</span>
                            <span className="mx-2">•</span>
                            <span>Uploaded on {file.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(file.status)}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{file.status === "locked" ? `Unlocks on ${file.unlockDate}` : "Available now"}</span>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {file.status === "unlocked" && (
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-md bg-muted">
                          {getFileIcon(file)}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {file.status === "unlocked" && (
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="text-sm font-medium truncate mb-1">{file.name}</p>
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <span>{file.size}</span>
                        <span className="mx-2">•</span>
                        <span>{file.uploadDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(file.status)}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{file.status === "locked" ? file.unlockDate : "Now"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredFiles.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No files found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery ? "Try a different search term" : "Upload some files to get started"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locked" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Time-Locked Files</CardTitle>
              <CardDescription>
                Files that will be available at a future date
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "list" ? (
                <div className="space-y-2">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center overflow-hidden">
                        <div className="p-2 rounded-md bg-muted mr-3">
                          {getFileIcon(file)}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <span>{file.size}</span>
                            <span className="mx-2">•</span>
                            <span>Uploaded on {file.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(file.status)}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{file.status === "locked" ? `Unlocks on ${file.unlockDate}` : "Available now"}</span>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {file.status === "unlocked" && (
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-md bg-muted">
                          {getFileIcon(file)}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {file.status === "unlocked" && (
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="text-sm font-medium truncate mb-1">{file.name}</p>
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <span>{file.size}</span>
                        <span className="mx-2">•</span>
                        <span>{file.uploadDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(file.status)}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{file.status === "locked" ? file.unlockDate : "Now"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredFiles.length === 0 && (
                <div className="text-center py-12">
                  <FileLock2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No time-locked files</h3>
                  <p className="text-muted-foreground">
                    Upload files with a time-lock to see them here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unlocked" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Available Files</CardTitle>
              <CardDescription>
                Files that are ready for download
              </CardDescription>
            </CardHeader>
            <CardContent>
              {viewMode === "list" ? (
                <div className="space-y-2">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center overflow-hidden">
                        <div className="p-2 rounded-md bg-muted mr-3">
                          {getFileIcon(file)}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <span>{file.size}</span>
                            <span className="mx-2">•</span>
                            <span>Uploaded on {file.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(file.status)}
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>Download</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-md bg-muted">
                          {getFileIcon(file)}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Clock className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="text-sm font-medium truncate mb-1">{file.name}</p>
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <span>{file.size}</span>
                        <span className="mx-2">•</span>
                        <span>{file.uploadDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(file.status)}
                        {file.status === "unlocked" && (
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            <span>Download</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredFiles.length === 0 && (
                <div className="text-center py-12">
                  <Download className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No available files</h3>
                  <p className="text-muted-foreground">
                    Your unlocked files will appear here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}