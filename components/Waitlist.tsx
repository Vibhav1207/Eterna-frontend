'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast";


const benefits = [
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: "Early Access",
    description: "Be among the first to experience EternaVaultX.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Exclusive Features",
    description: "Get access to beta features before the public release.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Priority Support",
    description: "Receive dedicated support during the early access period.",
  },
];

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const webhookUrl = 'https://discord.com/api/webhooks/1344315332575232102/fE2Kdtai_6ccSJRZ5zPnhKFeFXa7QPqaCRLT2jdhTX7suM93pGa6d9hXbYvTehM5GhLz';

    const payload = {
      content: `New waitlist signup: \`\`\`${email}\`\`\``,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
     

      if (response.ok) {
        
        toast({ description: 'Successfully joined the waitlist!' });
      } else {
       
        toast({ variant:'destructive',description: 'Failed to join the waitlist. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Exclusive Waitlist</h2>
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <p className="text-center mb-6">
            Be part of the future of secure, time-locked storage. Sign up for our waitlist and get:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-2">{benefit.icon}</div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="lg">
              Join Waitlist
            </Button>
          </form>
          <p className="text-sm text-center mt-4 text-muted-foreground">
            We respect your privacy. Your email will only be used for EternaVaultX updates.
          </p>
        </div>
      </div>
    </section>
  );
}