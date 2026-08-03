import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '@/data/certifications';

export const CertificationSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle title="Certifications" subtitle="Professional achievements, courses, and credentials." />
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert.id} className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                {/* Responsive Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-primary mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-brand-primary-light/50 text-brand-primary dark:bg-brand-primary-light/10 border border-brand-primary/10">
                    <Award className="h-5 w-5" />
                  </div>
                </div>

                {/* Issuer Details */}
                <div className="mt-4 space-y-1 text-xs text-text-secondary font-medium">
                  <p>Issued: {cert.issueDate}</p>
                  {cert.expiryDate && <p>Expires: {cert.expiryDate}</p>}
                  {cert.credentialId && (
                    <p className="text-text-muted mt-1 bg-bg-primary px-2.5 py-1 rounded border border-border-custom/50 inline-block font-mono">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>

              {/* Verify Link Trigger */}
              {cert.credentialUrl && (
                <div className="mt-6 pt-4 border-t border-border-custom/40">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-primary-hover transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Verify Credential
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default CertificationSection;
