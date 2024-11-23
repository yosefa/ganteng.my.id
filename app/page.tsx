import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield, 
  Terminal, 
  Briefcase, 
  MessageSquareMore, 
  Layout,
  ExternalLink 
} from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Header Section */}
        <header className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Yosefa Ferdianto
          </h1>
          <p className="text-2xl text-gray-700 font-light">
            Full Stack Developer | Software Engineer
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink href="https://github.com/yosefa" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/yosefaferdianto" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:yosefa@ganteng.my.id" icon={<Mail />} label="Email" />
          </div>
        </header>

        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-start gap-6">
            <MessageSquareMore className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-blue-600">Hello 👋</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m Yosefa, a passionate full-stack developer with a love for learning and continuous growth. 
                Over the years, I&apos;ve tackled a variety of challenging projects that have shaped me into the 
                professional I am today. My philosophy is simple: technology should solve problems, not create them. 
                That&apos;s why I focus on crafting solutions that make life and work easier.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">Let&apos;s collaborate!</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I&apos;m always excited to explore new projects and collaborate on fresh ideas! Whether you 
                  need a hand with tech solutions or just want to bounce around some thoughts, don&apos;t 
                  hesitate to reach out.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-8">
            <Terminal className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl font-semibold text-blue-600">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Code2 />}
              title="Frontend Development"
              skills={['HTML', 'CSS', 'Bootstrap', 'jQuery', 'React']}
            />
            <SkillCard 
              icon={<Server />}
              title="Backend Development"
              skills={['PHP', 'Node.js', 'Python', 'CodeIgniter', 'Express']}
            />
            <SkillCard 
              icon={<Database />}
              title="Database Management"
              skills={['MySQL', 'MariaDB', 'SQLite', 'SQL Server']}
            />
            <SkillCard 
              icon={<Smartphone />}
              title="Mobile Development"
              skills={['React Native', 'Java', 'Kotlin']}
            />
            <SkillCard 
              icon={<Cloud />}
              title="Cloud & DevOps"
              skills={['Hosting', 'VPS', 'Ubuntu', 'RedHat', 'Git', 'Docker']}
            />
            <SkillCard 
              icon={<Shield />}
              title="Security & CMS"
              skills={['CyberSecurity', 'SSL', 'Nginx', 'WordPress']}
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl font-semibold text-blue-600">Featured Projects</h2>
          </div>
          
          <div className="space-y-12">
            <ProjectCard
              title="Enterprise Resource Planning System"
              description="A comprehensive web-based ERP system designed to revolutionize how businesses operate. This all-in-one platform seamlessly integrates essential functions like accounting, inventory, sales, HR, and logistics."
              tags={['PHP', 'CodeIgniter', 'Node.js', 'Express', 'MySQL', 'SQLite', 'jQuery', 'Bootstrap', 'Microsoft Graph API', 'Mekari Talenta API']}
            />
            <ProjectCard
              title="AI Server Infrastructure"
              description="An AI Server Project designed to provide a powerful and scalable platform for running and managing AI models efficiently. This solution leverages advanced containerization technology."
              tags={['Claude', 'Llama AI', 'Open WebUI', 'Docker', 'Python']}
            />
            <ProjectCard
              title="Smart Estimation Tools"
              description="A powerful web-based application crafted to simplify the project estimation process. Tailored for estimators, it effortlessly gathers data and transforms it into professional proposals."
              tags={['PhpSpreadsheet', 'Cron', 'MySQL']}
            />
            <ProjectCard
              title="Advanced CCTV Monitoring"
              description="A cutting-edge solution for real-time video surveillance and recording, designed to elevate security and operational oversight. Complete with live access and secure storage."
              tags={['Motion', 'Debian', 'Rclone', 'IP Camera', 'Hikvision']}
            />
            <ProjectCard
              title="Corporate Web Management"
              description="Overseeing the hosting and domain management for the company website to ensure a seamless online presence. This involves maintaining uninterrupted website accessibility, keeping the domain registration up-to-date, and proactively managing any hosting requirements to guarantee optimal performance and reliability."
              tags={['WordPress', 'Hosting', 'Domain']}
            />
            <ProjectCard
              title="Employee Loan Portal"
              description="A Loan Applications system designed to simplify the loan request process for employees. Built with Microsoft Forms and Microsoft Power Automate, this automated solution streamlines every step—from application and approval to tracking loan requests—making the process efficient, transparent, and hassle-free for both employees and administrators."
              tags={['Microsoft Power Apps', 'Microsoft Power Automate', 'Microsoft Forms']}
            />
          </div>
        </div>

        <footer className="text-center pt-2 pb-4">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with <span className="text-red-500 animate-pulse">♥</span> in Jakarta
          </p>
        </footer>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 group relative"
    aria-label={label}
  >
    <div className="w-6 h-6">
      {icon}
    </div>
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
      {label}
    </span>
  </a>
);

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-blue-600 w-6 h-6">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-blue-600">{title}</h3>
    </div>
    <p className="text-gray-700 leading-relaxed">{skills.join(' • ')}</p>
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags }) => (
  <div className="group border-b border-gray-100 pb-8 transform hover:scale-[1.01] transition-all duration-300">
    <h3 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-3">
      <Layout className="w-6 h-6" />
      {title}
      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </h3>
    <p className="text-gray-700 text-lg leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span 
          key={index} 
          className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Home;