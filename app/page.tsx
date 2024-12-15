"use client";

import { useState } from "react";

export default function Home() {
  const [showNextSection, setShowNextSection] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = () => {
    setShowNextSection(true);
  };

  const handleCardClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!showNextSection ? (
        <main className="flex flex-col gap-6 row-start-2 items-center text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-black">
            Press Enter to Continue
          </h1>
          <button
            onClick={handleButtonClick}
            className="px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-700 transition-all"
          >
            Enter
          </button>
        </main>
      ) : (
        <main className="flex flex-col gap-8 row-start-2 items-center text-center">
          <p className="text-black text-lg sm:text-xl">
            Choose where you want to go:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <button
              onClick={() => handleCardClick("aboutMe")}
              className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold text-black">About Me</h2>
              <p className="text-gray-600 mt-2">
                Learn more about who I am and my journey.
              </p>
            </button>
            <button
              onClick={() => handleCardClick("skills")}
              className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold text-black">Skills</h2>
              <p className="text-gray-600 mt-2">
                Explore my technical expertise and soft skills.
              </p>
            </button>
            <button
              onClick={() => handleCardClick("projects")}
              className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold text-black">Projects</h2>
              <p className="text-gray-600 mt-2">
                Check out the exciting projects I&apos;ve worked on.
              </p>
            </button>
            <button
              onClick={() => handleCardClick("socials")}
              className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold text-black">Socials</h2>
              <p className="text-gray-600 mt-2">
                Connect with me on my social platforms.
              </p>
            </button>
          </div>

          {activeSection === "aboutMe" && (
            <section className="my-20">
            <h2
              className="text-3xl font-semibold text-white mb-5"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              About Me
            </h2>
            <p
              className="text-lg text-white mt-4"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              My name is Abdullah Bin Altaf. As a final year Computer Science student, I am passionate about
              harnessing technology to tackle real-world challenges. With extensive experience in integrating AI into web applications, I
              excel in frontend web development. I am dedicated to creating innovative solutions that drive positive change.
            </p>
            <p
              className="text-lg text-white mt-4"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              I actively participate in virtual hackathons and collaborative tech events, where I work on solving challenges and building projects with like-minded individuals. My hands-on experience with various projects has equipped me
              with the skills to build user-friendly and efficient web applications. I also actively share my knowledge and insights through
              articles on Hashnode and Medium, aiming to inspire and educate fellow tech enthusiasts.
            </p>
          </section>
          
          )}
          {activeSection === "skills" && (
            <section className="my-20">
              <h2 className="text-3xl font-semibold text-white mb-5">Skills</h2>

              <div className="flex flex-wrap gap-4">
                <button className="nes-badge">
                  <span className="nes-badge is-dark">HTML</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-primary">CSS</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-success">JavaScript</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-warning">Next.js</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-error">React.js</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-dark">Tailwind CSS</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-primary">Bootstrap</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-success">Material UI</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-warning">Python</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-error">LangChain</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-dark">LangGraph</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-primary">Firebase</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-success">Three.js</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-warning">NES.css</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-error">RAG</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-dark">Clerk</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-primary">Stripe</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-success">Git</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-warning">Linux</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-error">Streamlit</span>
                </button>
                <button className="nes-badge">
                  <span className="nes-badge is-dark">Scikit-Learn</span>
                </button>
              </div>
            </section>
          )}
          {activeSection === "projects" && (
            <section className="my-20">
            <h2 className="text-3xl font-semibold text-white mb-5"style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>Projects</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-black">PrintHub</h3>
                <p className="text-gray-600 mt-2">PrintHub connects users with local printing presses for easy booking, featuring search, product listings, and user reviews.</p>
                <a
                  href="https://github.com/abdullah-k18/PrintHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon github is-medium"></i>
                  </button>
                </a>
              </div>
          
              <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-black">Sum-Meet-Script</h3>
                <p className="text-gray-600 mt-2">
                Sum-Meet-Script generates meeting transcripts, speaker identification, and summaries from uploaded audio, powered by AssemblyAI and built with Next.js and Tailwind CSS.</p>
                <a
                  href="https://github.com/abdullah-k18/Sum-Meet-Script"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon github is-medium"></i>
                  </button>
                </a>
              </div>
          
              <div className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-black">Obital View</h3>
                <p className="text-gray-600 mt-2">Created an app to visualize the solar system and celestial bodies using Three.js, HTML, CSS, and JavaScript for the NASA Space Apps Challenge.</p>
                <a
                  href="https://github.com/abdullah-k18/Orrery-Web-App-that-Displays-Near-Earth-Objects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon github is-medium"></i>
                  </button>
                </a>
              </div>
            </div>
          </section>
          
          )}
          {activeSection === "socials" && (
            <section className="my-20">
              <h2 className="text-3xl font-semibold text-white mb-5">
                Socials
              </h2>
              <div className="flex justify-between space-x-4">
                <a
                  href="https://www.linkedin.com/in/abdullah-k18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon linkedin is-medium"></i>
                  </button>
                </a>
                <a
                  href="https://github.com/abdullah-k18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon github is-medium"></i>
                  </button>
                </a>
                <a
                  href="mailto:abdullahkoraal@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon gmail is-medium"></i>
                  </button>
                </a>
                <a
                  href="https://medium.com/@abdullahk18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon medium is-medium"></i>
                  </button>
                </a>
                <a
                  href="https://www.youtube.com/@abdulla_k18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <i className="nes-icon youtube is-medium"></i>
                  </button>
                </a>
              </div>
            </section>
          )}
        </main>
      )}
    </div>
  );
}
