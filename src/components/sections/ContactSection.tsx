import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { FormGroup } from '@/components/ui/FormGroup';
import { contactInfo } from '@/data/socials';
import { submitContactForm } from '@/services';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';

export const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitContactForm({ email, message });
    setIsSubmitted(true);
    setEmail('');
    setMessage('');
    // Reset submission state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle title="Get In Touch" subtitle="Feel free to reach out for collaborations, inquiries, or legacy projects." />
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          {/* Contact Details Column */}
          <Card className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Contact Information</h3>
              <p className="text-sm text-text-secondary mb-6">
                Fill out the form or reach out through direct email or standard professional channels.
              </p>
              
              <div className="space-y-4">
                {/* Email detail */}
                <div className="flex items-center space-x-3.5 text-sm text-text-secondary">
                  <div className="p-2.5 rounded-lg bg-brand-primary-light/50 text-brand-primary dark:bg-brand-primary-light/10 border border-brand-primary/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-brand-primary hover:text-brand-primary-hover font-semibold transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone detail */}
                {contactInfo.phone && (
                  <div className="flex items-center space-x-3.5 text-sm text-text-secondary">
                    <div className="p-2.5 rounded-lg bg-brand-primary-light/50 text-brand-primary dark:bg-brand-primary-light/10 border border-brand-primary/10">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Phone</p>
                      <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-brand-primary hover:text-brand-primary-hover font-semibold transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location detail */}
                <div className="flex items-center space-x-3.5 text-sm text-text-secondary">
                  <div className="p-2.5 rounded-lg bg-brand-primary-light/50 text-brand-primary dark:bg-brand-primary-light/10 border border-brand-primary/10">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Location</p>
                    <span className="text-text-primary font-medium">{contactInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Form Column */}
          <Card className="p-6 hover:shadow-md transition-shadow">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="p-3 rounded-full bg-success/10 text-success border border-success/20 animate-bounce">
                  <Check className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-text-primary">Message Sent!</h4>
                  <p className="text-xs text-text-secondary max-w-xs leading-relaxed">
                    Thank you for reaching out, AbdulSalam will review your request and get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormGroup label="Email Address" htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                  />
                </FormGroup>
                
                <FormGroup label="Message" htmlFor="message">
                  <TextArea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                    placeholder="Tell me about your project or inquiry..."
                  />
                </FormGroup>
                
                <Button type="submit" className="w-full" rightIcon={<Send className="h-3.5 w-3.5" />}>
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
};
export default ContactSection;
