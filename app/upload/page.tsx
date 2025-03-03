"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Upload, X, FileText, Lock, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [unlockDate, setUnlockDate] = useState<Date | undefined>(undefined);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload",
        variant: "destructive",
      });
      return;
    }

    if (!unlockDate) {
      toast({
        title: "Unlock date required",
        description: "Please select a date when the files should be unlocked",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        toast({
          title: "Upload complete",
          description: `${files.length} files have been encrypted and uploaded successfully`,
        });
        setFiles([]);
        setUploadProgress(0);
      }
    }, 300);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Upload Files</h1>
        <p className="text-muted-foreground mt-1">
          Securely upload and encrypt your files with time-lock protection
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>File Upload</CardTitle>
            <CardDescription>
              Drag and drop files or browse to upload
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="border-2 border-dashed rounded-lg p-8 text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">
                Drag and drop files here or click to browse
              </p>
              <Input
                type="file"
                multiple
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <Button asChild className="mt-2">
                <label htmlFor="file-upload">Select Files</label>
              </Button>
            </div>

            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Selected Files ({files.length})</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-md"
                    >
                      <div className="flex items-center overflow-hidden">
                        <FileText className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {uploading && (
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Encrypting and uploading...</span>
                  <span className="text-sm">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time-Lock Settings</CardTitle>
            <CardDescription>
              Set when your files should be accessible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="unlock-date">Unlock Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !unlockDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {unlockDate ? format(unlockDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={unlockDate}
                      onSelect={setUnlockDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex items-center text-sm mb-4">
                  <Lock className="h-4 w-4 mr-2 text-primary" />
                  <span>Files will be encrypted with AES-256</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>Time-lock will prevent access until the specified date</span>
                </div>
              </div>

              <Button
                className="w-full mt-6"
                onClick={handleUpload}
                disabled={uploading || files.length === 0 || !unlockDate}
              >
                {uploading ? "Uploading..." : "Encrypt & Upload"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}