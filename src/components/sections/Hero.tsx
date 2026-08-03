import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { staggerContainer, slideUp, fadeIn } from '@/utils/animations';
import { FileText, ArrowRight } from 'lucide-react';
import resumeFile from '@/assets/resume/Resume - Abdul-salam Abdul-basit.pdf';

export const Hero = () => {
  const navigate = useNavigate();

  const handleScrollToWork = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/projects');
    }
  };

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionDiv = motion.div as any;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionH1 = motion.h1 as any;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionP = motion.p as any;

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden pt-12">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[30%] w-[80%] h-[80%] rounded-full bg-brand-primary/10 blur-[120px] dark:bg-brand-primary/5" />
        <div className="absolute -bottom-[40%] -right-[30%] w-[80%] h-[80%] rounded-full bg-brand-secondary/10 blur-[120px] dark:bg-brand-secondary/5" />
      </div>

      <Container className="relative z-10 text-center">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center justify-center"
        >
          {/* Subheader / Welcome */}
          <MotionDiv variants={slideUp}>
            <span className="inline-flex items-center rounded-full bg-brand-primary-light/50 px-3 py-1 text-xs font-semibold text-brand-primary border border-brand-primary/15 dark:bg-brand-primary-light/10 select-none">
              Welcome to my portfolio
            </span>
          </MotionDiv>

          {/* Name & Title */}
          <MotionH1
            variants={slideUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-brand-primary via-indigo-550 to-brand-secondary bg-clip-text text-transparent">
              AbdulSalam AbdulBasit Olamilekan
            </span>
          </MotionH1>

          <MotionDiv variants={slideUp}>
            <h2 className="mt-4 text-xl font-semibold text-text-secondary sm:text-2xl">
              Junior Full Stack Engineer
            </h2>
          </MotionDiv>

          {/* Introduction paragraph */}
          <MotionP
            variants={slideUp}
            className="mt-6 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            I build scalable, maintainable full-stack applications with C#, ASP.NET Core, React, and modern web technologies—creating software that solves real-world problems and delivers lasting value.
          </MotionP>

          {/* Call to Action CTA buttons */}
          <MotionDiv variants={slideUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              onClick={handleScrollToWork}
            >
              View My Work
            </Button>
            <a href={resumeFile} download="Resume - Abdul-salam Abdul-basit.pdf" className="inline-flex">
              <Button
                variant="outline"
                leftIcon={<FileText className="h-4 w-4" />}
              >
                Download Resume
              </Button>
            </a>
          </MotionDiv>

          {/* Social Links wrapper */}
          <MotionDiv variants={fadeIn} className="mt-12">
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted select-none">
                Connect with me
              </span>
              <div className="p-2.5 rounded-full border border-border-custom bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
                <SocialLinks />
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
};
export default Hero;
