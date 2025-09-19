'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Receipt, Calculator, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Solo',
      description: 'Perfect for freelancers and independent contractors',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Payment tracking',
        'Client management',
        'Basic expense tracking',
      ],
      cta: 'Start Invoicing Free',
      popular: false,
      icon: Receipt,
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses and small teams',
      price: '$19',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited invoices & estimates',
        'Professional templates',
        'Automated payment reminders',
        'Advanced expense management',
        'Financial reporting dashboard',
        'Multi-currency support',
        'Bank account integration',
        'Tax calculation tools',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      icon: Calculator,
    },
    {
      name: 'Enterprise',
      description: 'For established businesses with complex needs',
      price: '$49',
      period: '/month',
      badge: 'Advanced Features',
      features: [
        'Everything in Business plan',
        'Advanced financial analytics',
        'Custom invoice branding',
        'API access & integrations',
        'Priority customer support',
        'Advanced user permissions',
        'Automated bookkeeping',
        'Dedicated account manager',
      ],
      cta: 'Upgrade to Enterprise',
      popular: false,
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              InvoiceFlow Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Scale your invoicing and accounting as your business grows. No setup fees, no long-term
            contracts, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs bg-accent/20 text-accent">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const handleClick =
              index === 0
                ? handleStarterPlan
                : index === 1
                  ? handleProfessionalPlan
                  : handleEnterprisePlan;

            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                  plan.popular
                    ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                    : 'border-border/50 hover:border-primary/20'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="size-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                )}

                <CardHeader className="relative text-center pb-8">
                  <div className="mx-auto mb-4 size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="size-6 text-primary" />
                  </div>

                  {plan.badge && !plan.popular && (
                    <Badge
                      variant="outline"
                      className="mb-4 mx-auto w-fit border-accent/30 text-accent"
                    >
                      {plan.badge}
                    </Badge>
                  )}

                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={handleClick}
                    className={cn(
                      'w-full text-base py-6',
                      plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === 'Business' && (
                    <p className="text-center text-sm text-muted-foreground">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need custom invoicing solutions?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored invoicing and accounting solutions for businesses with unique
            requirements. Let's discuss how InvoiceFlow can streamline your financial operations.
          </p>
          <Button
            onClick={handleScheduleDemo}
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5"
          >
            Schedule a Demo Call
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary"></div>
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary"></div>
              <span>99.9% uptime guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary"></div>
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
