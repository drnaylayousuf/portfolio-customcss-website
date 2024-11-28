import Hamburger from "../components/hamburger";
import "./skills.css"; // Ensure this file contains your custom CSS
import Image from "next/image";

export default function Skills() {
    return (
        <div className="skills-background">
            
            {/* Hamburger Menu (fixed to the top-right corner) */}
            <div className="hamburger-menu">
                <Hamburger />
            </div>

            <div className="skills-content">
                <div className="skills-card">
                    {/* Left Side: Heading */}
                    <div className="skills-heading">
                        <h1 className="skills-title">
                            My Skills
                        </h1>
                    </div>
                    {/* Right Side: Paragraph */}
                    <div className="skills-description">
                        <p className="skills-paragraph">
                            As a web developer, I have honed a diverse set of skills that enable me to create dynamic and responsive web applications.
                            My expertise spans front-end development, ensuring a seamless user experience and robust functionality.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="skills-cards">
                {/* Card 1 - HTML */}
                <div className="skill-card">
                    <Image src="/html.png" alt="HTML" className="skill-icon" width={90} height={90} />
                    <p className="skill-title">HTML</p>
                </div>
                
                {/* Card 2 - CSS */}
                <div className="skill-card">
                    <Image src="/css.png" alt="CSS" className="skill-icon" width={90} height={90} />
                    <p className="skill-title">CSS</p>
                </div>

                {/* Card 3 - JavaScript */}
                <div className="skill-card">
                    <Image src="/js.png" alt="JavaScript" className="skill-icon" width={90} height={90} />
                    <p className="skill-title">JavaScript</p>
                </div>

                {/* Card 4 - TypeScript */}
                <div className="skill-card">
                    <Image src="/typescript.png" alt="TypeScript" className="skill-icon" width={90} height={90} />
                    <p className="skill-title">TypeScript</p>
                </div>

                {/* Card 5 - Tailwind CSS */}
                <div className="skill-card">
                    <Image src="/tailwind.png" alt="Tailwind CSS" className="skill-icon" width={90} height={90} />
                    <p className="skill-title">Tailwind CSS</p>
                </div>

                {/* Card 6 - Shadcn/UI */}
                <div className="skill-card">
                    <Image src="/nextjs-icon.png" alt="Shadcn/UI" className="skill-icon" width={90} height={90} />
                    <p className="skill-title">Shadcn/UI</p>
                </div>
            </div>
        </div>
    );
}
