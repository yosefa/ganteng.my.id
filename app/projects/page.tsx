"use client";
import React from "react";
import Link from 'next/link';
import { Layout, ExternalLink, Briefcase, ArrowLeft, Search, Filter } from "lucide-react";
import { useState } from "react";

import portfolioData from '../portfolio-data.json';

// Dalam komponen ProjectCard, tambahkan prop onClick
interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    tags: string[];
}

const ProjectsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const { projects } = portfolioData;

    const allProjects = projects;

    // Get all unique tags
    const allTags = [...new Set(allProjects.flatMap((project) => project.tags))].sort();

    // Filter projects based on search term and selected tags
    const filteredProjects = allProjects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag));
        return matchesSearch && matchesTags;
    });

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-16 space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                <header className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-4">
                        <Briefcase className="w-10 h-10 text-blue-600" />
                        <h1 className="text-4xl font-bold text-blue-600">My Projects</h1>
                    </div>
                    <p className="text-xl text-gray-700">A collection of my professional work and personal projects</p>
                </header>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Tags Filter */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Filter className="w-5 h-5" />
                            <span className="font-medium">Filter by technology:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                        selectedTags.includes(tag)
                                            ? "bg-blue-600 text-white"
                                            : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            id={project.id}
                            title={project.title}
                            description={project.shortDescription}
                            tags={project.tags}
                        />
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 text-gray-500">No projects found matching your criteria</div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, tags }) => (
    <Link
        href={`/projects/${id}`}
        className="group bg-white rounded-xl shadow-md p-6 transform hover:scale-[1.01] transition-all duration-300 cursor-pointer"
    >
        <h3 className="text-2xl font-semibold text-blue-600 mb-3 flex items-center gap-3">
            <Layout className="w-6 h-6" />
            {title}
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                    {tag}
                </span>
            ))}
        </div>
    </Link>
);

export default ProjectsPage;
