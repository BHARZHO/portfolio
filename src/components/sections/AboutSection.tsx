import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import profileImg from '@/assets/images/profile.jpg';

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle title="About Me" subtitle="My journey, philosophy, and background." />
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Bio Article Text Column */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary">
            <p className="text-lg leading-relaxed font-medium text-text-primary">
              I am a Software Engineer and aspiring full-stack .NET developer with a passion for building software that solves real-world problems.
            </p>
            <p className="text-base leading-relaxed">
              With a strong academic foundation in Mathematics from Lagos State University and Computer Science from the University of the People (USA), I combine analytical problem-solving with software engineering principles to transform ideas into scalable, user-focused applications using C#, ASP.NET Core MVC, React, TypeScript, and modern web technologies.
            </p>
            <p className="text-base leading-relaxed">
              Beyond writing code, I believe great software should be maintainable, accessible, and built to create lasting value. I am particularly interested in software architecture, clean code principles, and designing systems that remain useful and trustworthy over time. This philosophy drives projects like my modern blog platform, where the focus extends beyond publishing content to ensuring information stays accurate, relevant, and well-maintained.
            </p>
            <p className="text-base leading-relaxed">
              Leadership has also shaped my journey. As the President of the Ahmadiyyah Muslim Students' Association (AMSA) at Lagos State University, I have developed strong communication, teamwork, and organizational skills while serving my community. These experiences have taught me that successful technology is built not only with technical expertise but also with collaboration, discipline, and a commitment to helping others.
            </p>
            <p className="text-base leading-relaxed">
              I am continuously learning, building, and improving my craft. Whether developing web applications, exploring software architecture, or contributing to meaningful projects, my goal is to create technology that makes a positive impact and leaves a lasting legacy.
            </p>
          </div>
          
          {/* Avatar Profile Picture Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm rounded-2xl bg-bg-secondary border border-border-custom shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img
                src={profileImg}
                alt="Abdulsalam Abdulbasit Profile"
                className="w-full h-auto max-h-[460px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  Spotlight Studio Session — Brand: Bharzho
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutSection;
