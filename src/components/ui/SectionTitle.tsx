import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';
import { fadeIn, slideUp } from '@/utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle = ({ title, subtitle, align = 'center', className = '' }: SectionTitleProps) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionDiv = motion.div as any;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionH2 = motion.h2 as any;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const MotionP = motion.p as any;

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className={cn(
        'mb-12 flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <MotionH2
        variants={slideUp}
        className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
      >
        <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          {title}
        </span>
      </MotionH2>
      {subtitle && (
        <MotionP
          variants={slideUp}
          className="mt-4 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          {subtitle}
        </MotionP>
      )}
    </MotionDiv>
  );
};
export default SectionTitle;
