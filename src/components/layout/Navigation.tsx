'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    // For single page, scroll to contact section or open modal
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  // ACTION_PLACEHOLDER_END

  // Required smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const navigation = [
    { name: 'Hero', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={e => handleNavClick(e, '#hero')}
              className="flex items-center space-x-2"
            >
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">I</span>
              </div>
              <span className="font-bold text-xl text-foreground">InvoiceFlow</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleCTA}>
              Contact Sales
            </Button>
            <Button size="sm" className="group" onClick={handleCTA}>
              Open Account
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-muted">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => {
                  handleNavClick(e, item.href);
                  setIsOpen(false);
                }}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-accent rounded-md"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start" onClick={handleCTA}>
                Contact Sales
              </Button>
              <Button className="justify-start group" onClick={handleCTA}>
                Open Account
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
