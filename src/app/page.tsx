
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  BrainCircuit,
  Briefcase,
  CheckCircle,
  Clock,
  Code,
  Facebook,
  FileText,
  Globe,
  GraduationCap,
  HeartHandshake,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  PenTool,
  Phone,
  Rocket,
  ShieldCheck,
  Smile,
  Star,
  Target,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  AlertTriangle,
  Lightbulb,
  Presentation,
  DraftingCompass,
  Cog,
  AppWindow,
  Computer,
  Network,
  BarChart,
  PlusCircle,
} from 'lucide-react';
import { AnimatedCounter } from '@/components/animated-counter';
import { ContactForm } from '@/components/contact-form';
import { ProblemCard } from '@/components/problem-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

const heroStats = [
  { value: 790, label: 'Projects completed', suffix: '+' },
  { value: 300, label: 'Active Clients', suffix: '+' },
  { value: 4, label: 'Years of Experience' },
  { value: 6, label: 'Countries Served', suffix: '+' },
];

const problems = [
  {
    title: 'Insufficient Time for Assignments',
    iconName: 'TrendingDown',
    color: 'hsl(var(--neon-red))',
    text: '&#x2022; International students often balance part-time jobs (20-30 hours/week) with full-time studies.<br/>&#x2022; 63% of students get only 2-3 hours per day for academic work.<br/>&#x2022; This limited time results in last-minute submissions and lower grades.',
    imageUrl: 'https://imgur.com/brxJyWi.png',
  },
  {
    title: 'Academic Stress & Mental Fatigue',
    iconName: 'BrainCircuit',
    color: 'hsl(var(--neon-red))',
    text: '&#x2022; Balancing studies, jobs, and living abroad causes high mental strain.<br/>&#x2022; 7 out of 10 international students report burnout due to assignment pressure.<br/>&#x2022; This leads to anxiety, poor focus, and a lack of motivation.',
    imageUrl: 'https://imgur.com/XfWUAwW.png',
  },
  {
    title: 'Sleepless & Exhausting Routines',
    iconName: 'Moon',
    color: 'hsl(var(--neon-red))',
    text: '&#x2022; Many students survive on less than 5 hours of sleep due to tight deadlines.<br/>&#x2022; 54% admit to pulling all-nighters before submissions.<br/>&#x2022; This results in low-quality, rushed assignments.',
    imageUrl: 'https://imgur.com/Tj4Hx5R.png',
  },
  {
    title: 'Strict Formatting & Referencing Rules',
    iconName: 'AlertTriangle',
    color: 'hsl(var(--neon-red))',
    text: '&#x2022; Universities abroad are very strict about APA, Harvard, and IEEE formats.<br/>&#x2022; 47% of students lose marks due to formatting errors alone.<br/>&#x2022; This leaves students dissatisfied despite their hard work.',
    imageUrl: 'https://imgur.com/kLKAuHw.png',
  },
  {
    title: 'Overlapping Deadlines Every Month',
    iconName: 'Clock',
    color: 'hsl(var(--neon-red))',
    text: '&#x2022; Multiple courseworks are often due within the same week.<br/>&#x2022; 72% of students submit assignments just 1–2 hours before the deadline.<br/>&#x2022; This causes stress, panic, and compromised quality.',
    imageUrl: 'https://imgur.com/FncMBnS.png',
  },
];

const majorBenefits = [
    {
      icon: Lock,
      title: 'Total Privacy & Confidentiality',
      description: 'Your identity and work stay 100% anonymous — we never reveal your assignments to universities, friends, or anyone else.',
      color: 'hsl(var(--neon-cyan))',
    },
    {
      icon: BrainCircuit,
      title: '76+ Subject-Specialist Writers',
      description: 'A powerful team of experienced writers from different academic majors to handle any type of assignment with expertise.',
      color: 'hsl(var(--neon-purple))',
    },
    {
      icon: BookOpen,
      title: 'One-Stop Academic Support Hub',
      description: 'From essays to theses — get every kind of academic work done under one roof, fast and professionally.',
      color: 'hsl(var(--neon-blue))',
    },
  ];

  const keyBenefits = [
    { icon: ShieldCheck, text: 'Free Turnitin Reports Guaranteeing 0% AI & Plagiarism Detection', color: 'hsl(var(--neon-green))' },
    { icon: Target, text: 'In-depth Research & Data-Driven Analytics for Authentic, High-Quality Content', color: 'hsl(var(--neon-red))' },
    { icon: Clock, text: 'Always On-Time — Your Deadlines Are My Priority', color: 'hsl(var(--neon-blue))' },
    { icon: HeartHandshake, text: '24/7 Friendly Support Designed Especially for Students', color: 'hsl(var(--neon-purple))' },
    { icon: Star, text: 'Top Grades Delivered at a Price Every Student Can Afford', color: 'hsl(var(--primary))' },
  ];

const impactData = [
    {
        icon: Rocket,
        title: '40% Faster Completion',
        description: 'Complete assignments in less than 24 hours, enabling students to meet tight deadlines and free up more time for other priorities.',
        color: 'hsl(var(--neon-cyan))',
    },
    {
        icon: Smile,
        title: 'Up to 30% Less Stress',
        description: 'Outsourcing assignments to professionals reduces anxiety and pressure, allowing students to focus on what truly matters.',
        color: 'hsl(var(--neon-pink))',
    },
    {
        icon: TrendingUp,
        title: '1.5x Higher Grade Improvement',
        description: 'Receive higher-quality, professionally completed assignments that result in improved academic performance.',
        color: 'hsl(var(--neon-green))',
    },
    {
        icon: Lock,
        title: '100% Secure and Anonymous',
        description: 'Every assignment is handled with full confidentiality, ensuring your academic privacy and security.',
        color: 'hsl(var(--neon-blue))',
    },
];

const services = [
  {
    title: 'Presentation Slides',
    description: 'Visually stunning presentations for academic and professional needs.',
    icon: Presentation,
    href: 'https://drive.google.com/drive/folders/1--jW9E08YAhy8jJwAftWY-eWnBJrjyWF',
  },
  {
    title: 'Report/Essay Writing',
    description: 'Expertly written reports on any subject.',
    icon: PenTool,
    href: 'https://drive.google.com/drive/folders/1-JgU7AEHgdo0xRjNCZqcu2Tb0bjR8IFl',
  },
  {
    title: 'Thesis & Research Papers',
    description: 'Comprehensive support for your thesis and research projects.',
    icon: BookOpen,
    href: 'https://drive.google.com/drive/folders/1-13R5GwFeLGlZhCNAiE3SKGJ1UU0yaBW',
  },
  {
    title: 'CSE Assignments (All Course)',
    description: 'Expert assistance with computer science and engineering coursework.',
    icon: Computer,
    href: 'https://drive.google.com/drive/folders/11s7_lpLTVX6j4hj6z_ATzJlMwqQrDn0F',
  },
  {
    title: 'Engineering Assignments (All Course)',
    description: 'Specialized help with all types of engineering assignments.',
    icon: Cog,
    href: 'https://drive.google.com/drive/folders/1-L499PhKn-JwUolD4zSa0kHa762UA_3P',
  },
  {
    title: 'MS Office',
    description: 'Proficient handling of all Microsoft Office suite applications.',
    icon: AppWindow,
    href: 'https://drive.google.com/drive/folders/1-ILsW38aCeLnTf6UL1jl1rIHZbqfkqqA',
  },
  {
    title: 'Networking Projects',
    description: 'Reliable solutions for networking assignments and projects.',
    icon: Network,
    href: 'https://drive.google.com/drive/folders/11NDnkHoB1F1DeYKv0yL07-tY820K9gP-',
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions and coding assignments.',
    icon: Code,
    href: 'https://drive.google.com/drive/folders/1-20QHR29HnoXSwRIn6nXc5KDjue89L5U',
  },
  {
    title: 'Web Design',
    description: 'Creative and functional web design services.',
    icon: Globe,
    href: 'https://drive.google.com/drive/folders/1-28JZn-zjuFbL8lzaT1vaIfLHkjZFkCq',
  },
  {
    title: 'Power Bi',
    description: 'Data visualization and business intelligence dashboards.',
    icon: BarChart,
    href: 'https://drive.google.com/drive/folders/11CHL1C_ldaNMCyzIwi6hl5zo7cyle8Mf',
  },
  {
    title: 'And Much More',
    description: "Don't see what you need? Contact me for a custom request.",
    icon: PlusCircle,
    href: '#contact',
  },
];

const testimonials = [
  { name: 'Rifat Imtiaz', university: 'University of Toronto (Canada)', quote: "I can't thank you enough! I was juggling between my part-time job and academics, and everything felt overwhelming. You helped me submit my assignments on time and boosted my grades. Forever grateful bhai..", initials: 'RI' },
  { name: 'Rumana Tabassum', university: 'National University of Singapore (Singapore)', quote: "I was struggling with my workload and my new marriage, your quick and professional service was a lifesaver. I managed to catch up on all my assignments, and my grades have never been better. Thanks again!", initials: 'RT' },
  { name: 'Mona hossain', university: 'University of Oxford (UK)', quote: "I was so stressed with tight deadlines and my work commitments. Recently I got migraine problem and could not focus at all thanks to you, I could submit my assignments on time and get great marks. Couldn't have done it without you", initials: 'MH' },
  { name: 'Ahmed Khan', university: 'Aga Khan University (Pakistan)', quote: "Assamualikum brother your service was a game-changer for me tbh. I was completely overwhelmed by assignments and work. You helped me get back on track and my grades improved significantly. I truly appreciate your help.", initials: 'AK' },
  { name: 'Faruq Islam Taj', university: 'University of Sydney (Australia)', quote: "I was about to give up with the heavy workload, you and your team saved me! My assignments were done on time, and my grades were better than I expected. Thanks a lot for everything, youre nothing but an angel bro", initials: 'FT' },
  { name: 'Mia Harris', university: 'University of British Columbia (Canada)', quote: "I was struggling to balance work and school, and your help made a huge difference. You helped me meet deadlines, and my grades improved. I’m so thankful for your support!", initials: 'MH' },
  { name: 'Rakesh Gupta', university: 'Stanford University (USA)', quote: "You took a huge burden off my shoulders! I could finally focus on my personal life and work while you took care of my assignments. It made all the difference. My grades reflect it, too also I recommend every one to take the service", initials: 'RG' },
  { name: 'Sophia Lee', university: 'University of Melbourne (Australia)', quote: "Your service was exactly what I needed. First I was doubting about the authenticity of your works, I was wrong! Balancing work and studying was exhausting. With your help, I completed all my courses with ease and got great grades. I’m so grateful", initials: 'SL' },
  { name: 'Chitrokor Rahman', university: 'University of Manchester (UK)', quote: "I never thought I’d be able to manage my assignments while working part time. Thanks to you, I not only met all deadlines but did so with great results. I couldn't ask for more!", initials: 'CR' },
  { name: 'Abrar Masum', university: 'University of Melbourne (Australia)', quote: "Thanks bhaiya i was in stress for my part time job and could not focus in my academics at all, for you i have completed all of my courses with very good grades thanks a lot!!", initials: 'AM' },
];

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M16.6 14.2l-1.5-0.7c-0.3-0.1-0.5-0.1-0.7 0.1l-0.9 1.1c-1.3-0.7-2.5-1.9-3.2-3.2l1.1-0.9c0.2-0.2 0.3-0.5 0.1-0.7l-0.7-1.5c-0.2-0.3-0.5-0.5-0.8-0.5h-1.6c-0.4,0-0.7,0.3-0.7,0.7c0,4.4,3.6,8,8,8c0.4,0,0.7-0.3,0.7-0.7v-1.6C17.1 14.7 16.9 14.4 16.6 14.2z"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8S16.4 20 12 20z"/>
    </svg>
  );

const socialLinks = [
  { name: 'whatsapp', icon: WhatsappIcon, href: 'https://wa.me/qr/YOHKYEPCSELLH1', 'aria-label': 'WhatsApp', color: 'text-green-500', glowColor: 'var(--glow-green)' },
  { name: 'facebook', icon: Facebook, href: 'https://www.facebook.com/ramiza.zahin.ohi.2025', 'aria-label': 'Facebook', color: 'text-blue-600', glowColor: 'var(--glow-blue)' },
  { name: 'email', icon: Mail, href: 'mailto:assignmentyess@gmail.com', 'aria-label': 'Gmail', color: 'text-red-600', glowColor: 'var(--glow-red)' },
];

export default function Home() {

  useEffect(() => {
    // When the component mounts (on initial page load), scroll to the top.
    window.scrollTo(0, 0);
    // And remove the hash from the URL to prevent the browser from jumping to a section.
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
      <section id="home" className="bg-white text-black pt-28 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <p className="font-calibri text-3xl md:text-4xl font-bold mb-8 italic bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                “While You Progress in Life, I’ll Progress Your Assignments”
              </p>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-foreground">
                Ramiza Ohe
              </h1>
              <p className="mt-2 text-xl md:text-2xl text-muted-foreground font-semibold italic">
                Professional Assignment Writer
              </p>
              <div className="mt-12 mb-8">
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-blue-400 to-blue-900 shadow-lg">
                    <Image
                      src="https://i.imgur.com/L1Nq3bI.jpeg"
                      alt="Ramiza Ohe"
                      width={320}
                      height={320}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 w-full max-w-3xl mb-10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <div className="text-5xl font-bold text-foreground bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                      <AnimatedCounter targetValue={stat.value} />
                      {stat.suffix}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold transition-transform transform hover:scale-105">
                    <Link href="https://wa.me/qr/YOHKYEPCSELLH1" target="_blank">
                      Hire Me
                    </Link>
                  </Button>
                  <Link href="https://wa.me/qr/YOHKYEPCSELLH1" target="_blank" aria-label="WhatsApp">
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                      <WhatsappIcon className="w-6 h-6 text-white" />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Button asChild size="lg" className="bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold transition-transform transform hover:scale-105">
                    <Link href="https://www.facebook.com/ramiza.zahin.ohi.2025" target="_blank">
                      Hire Me
                    </Link>
                  </Button>
                  <Link href="https://www.facebook.com/ramiza.zahin.ohi.2025" target="_blank" aria-label="Facebook">
                    <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="py-16 md:py-24 bg-red-50 text-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-24 h-24 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center font-calibri text-foreground">
              The Problem With Submitting Assignments No One Talks About
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 [perspective:1000px]">
              {problems.map((problem, index) => (
                <ProblemCard
                  key={index}
                  title={problem.title}
                  iconName={problem.iconName as keyof typeof import('lucide-react')}
                  iconColor={problem.color}
                  text={problem.text}
                  imageUrl={problem.imageUrl}
                  cardClassName="bg-destructive/10 border-2 border-destructive"
                />
              ))}
            </div>
          </div>
        </section>
        
        <section id="services" className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-yellow-500" style={{ fill: 'url(#fire-gradient)' }} />
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="fire-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#ff4500', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#ff8c00', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-white">
              My Services
            </h2>
            <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
              Offering a range of professional services to help you succeed academically and professionally.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Link href={service.href} key={service.title} target={service.href.startsWith('http') ? '_blank' : '_self'} className="group">
                  <Card className={cn(
                      "h-full text-center bg-gray-900 border-gray-800 text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col",
                      service.title === 'And Much More' && "border-2 fire-gradient-border"
                    )}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/20 rounded-full">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="font-headline text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-400">{service.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                        {service.href === '#contact' ? 'Contact Me' : 'View Demo'}
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="py-16 md:py-24 bg-white text-blue-900">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="group p-4 bg-green-100 rounded-full hover:bg-green-200 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(52,211,153,0.7)]">
                    <Lightbulb className="w-12 h-12 text-green-500" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-black">
                Our Solution
              </h2>
              <p className="mt-2 text-center text-muted-foreground italic inline-block pb-2">
                Revolutionary Assignment Writing Platform
                <span className="block h-1 w-24 bg-primary mx-auto mt-2"></span>
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 flex flex-col gap-6">
                {majorBenefits.map((benefit) => (
                  <Card key={benefit.title} className="group p-6 border-2 bg-blue-950 text-white border-transparent hover:border-[var(--glow-color)] hover:shadow-lg transition-all" style={{ '--glow-color': benefit.color } as React.CSSProperties}>
                      <div className="flex items-center gap-4 mb-3">
                          <benefit.icon className="w-8 h-8" style={{ color: benefit.color }}/>
                          <h3 className="text-xl font-bold font-calibri">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-300">{benefit.description}</p>
                  </Card>
                ))}
              </div>
              <div className="lg:col-span-2">
                <Card className="p-6 border-2 border-blue-500 rounded-lg shadow-lg">
                    <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold font-headline text-black inline-block relative pb-2">
                        Key Benefits
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-sky-400"></span>
                    </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                    {keyBenefits.map((benefit) => (
                        <Card key={benefit.text} className="group flex items-center p-4 border-2 border-transparent hover:border-[var(--glow-color)] hover:shadow-md transition-all" style={{'--glow-color': benefit.color} as React.CSSProperties}>
                            <benefit.icon className="w-10 h-10 mr-4 flex-shrink-0" style={{color: benefit.color}} />
                            <p className="font-semibold text-black">{benefit.text}</p>
                        </Card>
                    ))}
                    </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-4">
                    <Star className="w-12 h-12" style={{ color: 'hsl(var(--neon-blue))' }} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-headline">Service Impact</h2>
                <p className="mt-2 text-center text-gray-300 italic">Your Assignments—Handled Like Magic, Delivered Overnight</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactData.map((item, index) => (
                        <div key={index} className="group relative p-6 rounded-lg bg-gray-900 border border-gray-700 text-center transition-all duration-300 hover:bg-gray-800 hover:shadow-[0_0_5px_var(--glow-color)]"
                            style={{ '--glow-color': 'rgba(255, 165, 0, 0.3)' } as React.CSSProperties}>
                            <div className="absolute -inset-px rounded-lg bg-[var(--glow-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors">
                                        <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
                <Smile className="w-24 h-24 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-foreground">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-center text-muted-foreground italic max-w-2xl mx-auto">
              Success Stories from Students Using Our Service
            </p>
            <div className="mt-12 w-full overflow-hidden">
                <div className="flex animate-marquee-full hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                      <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-[40vw] p-2">
                        <Card className="p-6 rounded-xl shadow-lg h-[220px] w-full flex flex-col">
                            <CardContent className="p-0 flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <Avatar className="h-14 w-14 mr-4 border-2 border-primary">
                                <AvatarFallback className="bg-primary/20 text-primary font-bold text-xl">{testimonial.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-foreground/80 italic text-sm flex-grow overflow-y-auto">
                                "{testimonial.quote}"
                            </blockquote>
                            </CardContent>
                        </Card>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-12 h-12 text-primary" />
                </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-white">
              Get In Touch
            </h2>
            <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
              Ready to start? Have a question? Reach out to me, and I'll get back to you promptly.
            </p>
            <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Email</h3>
                    <a href="mailto:assignmentyess@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      assignmentyess@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-gray-800 rounded-full">
                    <WhatsappIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Phone / WhatsApp</h3>
                    <a href="tel:+8801627145339" className="text-gray-400 hover:text-primary transition-colors">
                      +8801627145339
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Location</h3>
                    <p className="text-gray-400">Bangladesh</p>
                  </div>
                </div>
                <Separator className="my-4 bg-gray-800" />
                <div>
                  <h3 className="font-bold text-lg text-white mb-4">Connect With Me by Just One Click</h3>
                   <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Link href={social.href} key={social.name} target="_blank" aria-label={social['aria-label']}>
                         <Button variant="outline" size="icon" className="group h-12 w-12 rounded-full bg-gray-800 border-gray-700 transition-all hover:bg-gray-800 hover:border-transparent hover:glow-border" style={{'--glow-color': social.glowColor} as React.CSSProperties}>
                            <social.icon className={`h-6 w-6 ${social.color} transition-colors`} />
                          </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg border-2 border-solid fire-gradient-border">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ramiza Ohe. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
