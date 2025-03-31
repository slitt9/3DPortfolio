import React from 'react';
import { skills } from '../constants';
import CTA from '../components/CTA';
import ubcLogo from '../assets/icons/ubc.png';
import { classes } from '../constants';

const About = () => {
    return (
        <section className="c-space min-h-screen flex flex-col justify-between pt-24 mx-8">
            <div>
                <h1 className="head-text">
                    Hello, I'm{' '}
                    <span className="blue-gradient_text font-semibold drop-shadow">Sahil</span>
                </h1>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        A student based in Vancouver, interested in Software Development and Artifical Intelligence and eager to create innovative solutions.
                    </p>
                </div>
                <div className="py-10 flex flex-col">
                    <h3 className="subhead-text">Education</h3>
                    <div className="mt-8 space-y-8">
                        {classes.map((course, index) => (
                            <div key={index} className="flex items-start gap-5">
                                <img
                                    src={ubcLogo}
                                    alt="UBC Logo"
                                    className="w-14 h-14 object-contain"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-600">
                                        {course.name}
                                    </h4>
                                    <p className="text-slate-500 mt-1">{course.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {course.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-10 flex flex-col">
                    <h3 className="subhead-text"> My Skills</h3>
                    <div className="mt-16 flex flex-wrap gap-12">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="block-container w-20 h-20 relative group"
                            >
                                <div className="btn-back rounded-xl" />
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                                <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-6">
                <CTA />
            </div>
        </section>
    );
};

export default About;
