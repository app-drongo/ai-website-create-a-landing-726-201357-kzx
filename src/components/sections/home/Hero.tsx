'use client';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Receipt,
  Calculator,
  TrendingUp,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };
  // ACTION_PLACEHOLDER_END

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,69,79,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
            {/* LEFT: Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                New: AI-Powered Invoice Generation
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Streamline your business with
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  InvoiceFlow
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                The complete invoicing and accounting solution for small businesses and freelancers.
                Create professional invoices, track expenses, and manage your finances in one
                powerful platform.
              </p>

              {/* Feature list */}
              <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {[
                  'Instant invoice creation',
                  'Automated payment tracking',
                  'Real-time financial reports',
                  'Tax-ready documentation',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group px-7 text-base bg-primary hover:bg-primary/90"
                  onClick={handlePrimaryAction}
                  data-action-type="primary-cta"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-primary text-primary hover:bg-primary/10"
                  onClick={handleSecondaryAction}
                  data-action-type="secondary-cta"
                >
                  <Play className="mr-2 size-5" /> View Platform Demo
                </Button>
              </div>
            </div>

            {/* RIGHT: Visual */}
            <div className="relative">
              {/* Mockup container */}
              <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop"
                    alt="InvoiceFlow dashboard showing invoice management interface"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Tag overlay */}
                <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                  Live Dashboard
                </div>
              </div>

              {/* Floating accents */}
              <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
                <p className="text-xs text-muted-foreground">Invoices Sent</p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">2,847</span> this month
                </p>
              </div>
              <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
                <p className="text-xs text-muted-foreground">Payment Rate</p>
                <p className="text-sm">
                  <span className="font-semibold text-accent">94%</span> on time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to manage your finances
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From invoice creation to financial reporting, InvoiceFlow provides all the tools small
              businesses need to stay organized and profitable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Receipt,
                title: 'Professional Invoicing',
                description:
                  'Create stunning, branded invoices in seconds. Customize templates, add your logo, and send directly to clients with automated follow-ups.',
              },
              {
                icon: Calculator,
                title: 'Expense Tracking',
                description:
                  'Capture receipts with your phone, categorize expenses automatically, and track every business cost for accurate financial records.',
              },
              {
                icon: TrendingUp,
                title: 'Financial Reporting',
                description:
                  'Generate comprehensive profit & loss statements, cash flow reports, and tax summaries with real-time data visualization.',
              },
              {
                icon: Clock,
                title: 'Time Tracking',
                description:
                  'Log billable hours, track project time, and automatically convert time entries into professional invoices for service-based businesses.',
              },
              {
                icon: Shield,
                title: 'Secure Payments',
                description:
                  'Accept credit cards, bank transfers, and digital payments with enterprise-grade security and automatic payment reconciliation.',
              },
              {
                icon: Zap,
                title: 'Automation Tools',
                description:
                  'Set up recurring invoices, automated payment reminders, and smart categorization to save hours of manual work every week.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with no
              hidden fees or setup costs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-card p-8 rounded-2xl border">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for freelancers and solo entrepreneurs
                </p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$12</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Up to 25 invoices per month',
                  'Basic expense tracking',
                  'Email support',
                  'Mobile app access',
                  'Payment processing',
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline" onClick={handlePrimaryAction}>
                Start Free Trial
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-card p-8 rounded-2xl border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-muted-foreground mb-4">Ideal for growing small businesses</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited invoices',
                  'Advanced expense tracking',
                  'Financial reporting',
                  'Time tracking',
                  'Priority support',
                  'Custom branding',
                  'Recurring invoices',
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handlePrimaryAction}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-card p-8 rounded-2xl border">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-4">
                  For established businesses with advanced needs
                </p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$59</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Professional',
                  'Multi-user access',
                  'Advanced integrations',
                  'Custom workflows',
                  'Dedicated account manager',
                  'API access',
                  'White-label options',
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline" onClick={handlePrimaryAction}>
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All plans include a 14-day free trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
