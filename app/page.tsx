"use client";

import React from "react";
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
    ExternalLink,
    ArrowRight,
    UserCircle // Added for profile icon
} from "lucide-react";
import Link from "next/link";
import portfolioData from './portfolio-data.json';

// Map of icon names to components
const iconMap = {
    Github,
    Linkedin,
    Mail,
    Code2,
    Server,
    Database,
    Smartphone,
    Cloud,
    Shield,
    UserCircle // Added profile icon to the map
};

const Page = () => {
    const { personalInfo, introduction, skills, projects, footer } = portfolioData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-16 space-y-12">
                {/* Header Section */}
                <header className="text-center space-y-6 animate-fade-in">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                        {personalInfo.name}
                    </h1>
                    <p className="text-2xl text-gray-700 font-light">{personalInfo.title}</p>
                    <div className="flex justify-center gap-6">
                        {personalInfo.socialLinks.map((link, index) => (
                            <SocialLink
                                key={index}
                                href={link.href}
                                icon={React.createElement(iconMap[link.icon as keyof typeof iconMap])}
                                label={link.platform}
                            />
                        ))}

                        {/* Added profile icon here */}
                        <SocialLink
                            href="https://yosefa.my.id"
                            icon={<UserCircle />}
                            label="Profile"
                        />
                    </div>
                </header>

                {/* Introduction Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-start gap-6">
                        <MessageSquareMore className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-blue-600">{introduction.greeting}</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">{introduction.mainText}</p>
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                    {introduction.callToAction.title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {introduction.callToAction.text}
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
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                icon={React.createElement(iconMap[skill.icon as keyof typeof iconMap])}
                                title={skill.title}
                                skills={skill.skills}
                            />
                        ))}
                    </div>
                </div>

                {/* Projects Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                        <Briefcase className="w-10 h-10 text-blue-600" />
                        <div className="text-3xl font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2">
                            Featured Projects
                        </div>
                    </div>

                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.shortDescription}
                                tags={project.tags}
                                id={project.id}
                            />
                        ))}
                        
                        {/* View More Projects Link */}
                        <Link 
                            href="/projects"
                            className="group flex items-center justify-center gap-3 py-6 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            View More Projects
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <footer className="text-center pt-2 pb-4">
                    <p className="text-gray-600 flex items-center justify-center gap-2">
                        {footer.text.split('♥')[0]}
                        <span className="text-red-500 animate-pulse">♥</span>
                        {footer.text.split('♥')[1]}
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
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className="w-6 h-6">{icon}</div>
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
            {label}
        </span>
    </a>
);

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-4">
            <div className="text-blue-600 w-6 h-6">{icon}</div>
            <h3 className="font-semibold text-lg text-blue-600">{title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{skills.join(" • ")}</p>
    </div>
);

const ProjectCard = ({ title, description, tags, id }: { title: string; description: string; tags: string[]; id?: string }) => (
    <Link 
        href={`/projects/${id}`} 
        className="block group border-b border-gray-100 pb-8 transform hover:scale-[1.01] transition-all duration-300"
    >
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
    </Link>
);

export default Page;
