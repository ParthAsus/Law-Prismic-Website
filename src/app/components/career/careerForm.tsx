"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { careerFormSchema } from "@/lib/schema";
import { careerFormDataSend } from "@/lib/email";
import { showToast } from "@/lib/toasts";

interface CareerFormProps {
  jobTitle: string;
  handleModalClose: () => void;
}

export default function CareerForm({ jobTitle, handleModalClose }: CareerFormProps) {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof careerFormSchema>>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      email: "",
      resume: "", 
    },
  });

  // Convert file to Base64
  const fileToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1]; 
        resolve(base64String);
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file); 
    });
  };

  async function onSubmit(values: z.infer<typeof careerFormSchema>) {
    try {
      await careerFormDataSend(values, jobTitle);
      showToast();
      handleModalClose();
    } catch (err) {
      setError("Failed to submit the application. Please try again.");
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Job Application</CardTitle>
        <CardDescription className="text-xl">
          Position: {jobTitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume</FormLabel>
                  <FormControl>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFileName(file.name);
                          try {
                            const base64 = await fileToBase64(file);
                            form.setValue("resume", base64); // Set Base64 in form state
                          } catch (err) {
                            console.error("Failed to convert file:", err);
                            setError("Failed to process the file. Please try again.");
                          }
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload your resume as a PDF or Word file.
                  </FormDescription>
                  {fileName && (
                    <p className="text-sm text-green-600">
                      File selected: {fileName}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit Application
            </Button>

            {error && <p className="text-sm text-red-600">{error}</p>}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <p className="text-sm text-muted-foreground flex items-center">
          <AlertCircle className="w-4 h-4 mr-2" />
          Please ensure all fields are filled out correctly before submitting.
        </p>
      </CardFooter>
    </Card>
  );
}
