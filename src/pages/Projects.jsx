import React from 'react';
import { projects } from '../constants';
import arrow from '../assets/icons/arrow.svg';
import CTA from '../components/cta';

const Projects = () => {
    return (
        <section className="c-space min-h-screen flex flex-col justify-between pt-24 mx-8">
            <div>
                <h1 className="head-text">
                    My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
                </h1>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        Over the years, I’ve channeled my passion for computer science into building impactful projects, showcasing creativity, problem-solving, and technical skills. Check out my work below!
                    </p>
                </div>
                <hr className="border-slate-200 mt-6 mb-10" />
                <div className="flex flex-wrap gap-16">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="lg:w-[600px] w-full p-5 shadow-md rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="mt-5">
                                <h4 className="font-semibold text-2xl font-poppins">{project.name}</h4>
                                <p className="mt-2 text-sm text-slate-500">{project.description}</p>
                            </div>
                            <div className="mt-5 border border-gray-300 rounded-lg p-2">
                                <img
                                    src={project.iconUrl}
                                    alt={`${project.name} Screenshot`}
                                    className="w-4/5 mx-auto h-auto rounded-lg object-cover"
                                />
                            </div>
                            <div className="mt-5 flex flex-col gap-2 font-poppins">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                                >
                                    GitHub Link
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className="w-4 h-4 object-contain"
                                    />
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                                    >
                                        Live Link
                                        <img
                                            src={arrow}
                                            alt="arrow"
                                            className="w-4 h-4 object-contain"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center py-6">
                <CTA />
            </div>
        </section>
    );
};

export default Projects;
