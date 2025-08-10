import React from "react";
import Link from "next/link";
import { ArrowLeft, Layout } from "lucide-react";
import { notFound } from "next/navigation";

import portfolioData from '../../portfolio-data.json';

const { projects } = portfolioData;

export async function generateStaticParams() {
  return projects.map((project) => ({
      slug: project.id
  }));
}

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
            <div className="container mx-auto px-4">
                <div>
                    {/* Back Navigation */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Projects
                    </Link>

                    {/* Project Header */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <Layout className="w-8 h-8 text-blue-600" />
                            <h1 className="text-4xl font-bold text-blue-600">{project.title}</h1>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Project Description */}
                        <div className="prose prose-blue max-w-none">
                            <p className="text-justify text-xl text-gray-700 mb-6">{project.shortDescription}</p>
                            <div className="text-justify text-gray-600 leading-relaxed">{project.fullDescription}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
