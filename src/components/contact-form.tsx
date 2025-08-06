'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Calendar as CalendarIcon, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  assignmentFile: z.any().optional(),
  deadline: z.date().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = '8801627145339'; // The number from the prompt
    let text = `Hello Ramiza.\n\n`;

    if (values.deadline) {
      text += `My deadline is ${format(values.deadline, "PPP")}.\n\n`;
    }

    text += `Message: ${values.message}`;
    
    // File handling is not directly sent via WhatsApp URL.
    // This will just open whatsapp. The user has to attach the file manually.
    if (values.assignmentFile && values.assignmentFile.length > 0) {
      toast({
        title: "Please attach the file in WhatsApp",
        description: "Your message is ready, please attach your file in the WhatsApp chat.",
      });
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to be sent!",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="assignmentFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-bold">Attach Your Assignment Instruction File Here</FormLabel>
              <FormControl>
                <Input type="file" onChange={(e) => field.onChange(e.target.files)} className="text-gray-400"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white font-bold">Deadline</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0,0,0,0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-bold">Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Ask the price..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold bg-green-500 hover:bg-green-600 text-white" size="lg">
          <Send className="mr-2 h-4 w-4" />
          Send Message via WhatsApp
        </Button>
      </form>
    </Form>
  );
}

    