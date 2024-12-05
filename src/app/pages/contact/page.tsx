"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-neutral-950 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
                dalaisumit592@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Phone size={20} />
                +91 8658076692
              </a>
              <a
                href="https://github.com/sumit851"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/SumitDalai"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200">Name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200">Email</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
                        placeholder="your.email@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200">Subject</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Subject of your message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200">Message</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 h-32 resize-none"
                        placeholder="Your message..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
