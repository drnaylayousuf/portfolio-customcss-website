"use client";
import Link from "next/link";
import "./projects.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 100); // Delay to allow the component to mount before starting the animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="projects-container">
            {/* First background image section */}
            <div className="projects-header">
              <h1 className={`projects-title ${fadeIn ? 'fade-in-delay-1' : 'opacity-0'}`}>
                MY PROJECTS
              </h1>

                {/* About my projects text with delayed fade-in */}
                <p className={`projects-description ${fadeIn ? 'fade-in-delay-2' : 'opacity-0'}`}>
                    Here are some of the projects I have worked on. Each project showcases a unique set of skills and technologies used to solve real-world problems.
                </p>
            </div>

            {/* Second background image section with flex container */}
            <div className="projects-cards-container">
                <div className="projects-cards-wrapper">
                    {/* First Card */}
                    <div className="project-card">
                        <Link href="https://icecream-station-website.vercel.app/">
                            <div className="card-image-wrapper">
                                <Image
                                    src="/laptop1.jpg"
                                    alt="Ice Cream Station Website"
                                    className="project-card-image"
                                    height={350}
                                    width={450}
                                />
                                <Image
                                    src="/1.jpg"
                                    alt="Second Image"
                                    className="project-overlay-image"
                                    width={90}
                                    height={90}
                                />
                                <div className="card-overlay">
                                    <p className="card-title">Ice Cream Station</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Second Card */}
                    <div className="project-card">
                        <Link href="https://assignment-of-signin-and-login.web.app/login.html">
                            <div className="card-image-wrapper">
                                <Image
                                    src="/laptop1.jpg"
                                    alt="Login Signin Form"
                                    className="project-card-image"
                                    height={350}
                                    width={450}
                                />
                                <Image
                                    src="/2.jpg"
                                    alt="Signin Form"
                                    className="project-overlay-image"
                                    width={140}
                                    height={140}
                                />
                                <div className="card-overlay">
                                    <p className="card-title">Login Signin Form UI/UX</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Third Card */}
                    <div className="project-card">
                        <Link href="https://my-website-2-sage.vercel.app/">
                            <div className="card-image-wrapper">
                                <Image
                                    src="/laptop1.jpg"
                                    alt="Jewelry Website"
                                    className="project-card-image"
                                    height={350}
                                    width={450}
                                />
                                <Image
                                    src="/3.jpg"
                                    alt="Jewelry Website"
                                    className="project-overlay-image"
                                    width={140}
                                    height={140}
                                />
                                <div className="card-overlay">
                                    <p className="card-title">My Jewelry Website</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Fourth Card */}
                    <div className="project-card">
                        <Link href="">
                            <div className="card-image-wrapper">
                                <Image
                                    src="/laptop1.jpg"
                                    alt="Furniture Website"
                                    className="project-card-image"
                                    height={350}
                                    width={450}
                                />
                                <Image
                                    src="/"
                                    alt=""
                                    className="project-overlay-image"
                                    width={140}
                                    height={140}
                                />
                                <div className="card-overlay">
                                    <p className="card-title"></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
