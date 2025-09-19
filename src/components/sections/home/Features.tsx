'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Calculator,
  Clock,
  CreditCard,
  BarChart3,
  Shield,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Professional Invoicing',
      description:
        'Create stunning, branded invoices in seconds with customizable templates and automated numbering.',
      badge: 'Invoicing',
    },
    {
      icon: Calculator,
      title: 'Smart Accounting',
      description:
        'Track expenses, manage cash flow, and generate financial reports with intelligent categorization.',
      badge: 'Accounting',
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description:
        'Built-in time tracker converts billable hours directly into invoices with detailed project breakdowns.',
      badge: 'Productivity',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description:
        'Accept payments via credit cards, bank transfers, and digital wallets with 2.9% processing fees.',
      badge: 'Payments',
    },
    {
      icon: BarChart3,
      title: 'Financial Insights',
      description:
        'Real-time dashboards show revenue trends, outstanding payments, and profit margins at a glance.',
      badge: 'Analytics',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description:
        'Automatic tax calculations, VAT handling, and 1099 generation to keep you compliant year-round.',
      badge: 'Compliance',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoicing',
      description:
        'Send invoices, track payments, and manage clients on-the-go with our native mobile apps.',
      badge: 'Mobile',
    },
    {
      icon: Users,
      title: 'Client Portal',
      description:
        'Branded client portal allows customers to view invoices, make payments, and download receipts.',
      badge: 'Client Management',
    },
    {
      icon: Zap,
      title: 'Automation Rules',
      description:
        'Set up recurring invoices, payment reminders, and late fee calculations to run your business automatically.',
      badge: 'Automation',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Needs to Thrive
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From invoice creation to financial reporting, InvoiceFlow provides all the tools small
            businesses need to manage their finances professionally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to streamline your invoicing and accounting?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Open Account
            </button>
            <button
              onClick={handleViewPricing}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Investment Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
