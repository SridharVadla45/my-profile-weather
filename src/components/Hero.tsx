import React from "react";
import profile from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 px-6 lg:px-20 pt-24">
        <div className="text-center lg:text-left max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Sridhar Vadla
          </h1>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Software Engineer with 2 years’ experience in Java and Node.js,
            currently pursuing an MSc in Computing &amp; Data Analytics at Saint
            Mary’s University. I deliver reliable, user-centric features
            end-to-end, write clean, testable code, and collaborate across teams
            to ship on time. Quick to learn new tools and frameworks; eager to
            apply solid engineering fundamentals to drive product impact.
          </p>

          <div>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-transform duration-200">
              <a href="/mytown">Visit MyTown</a>
            </button>
          </div>
        </div>

        <div className="mb-4 lg:mb-0">
          <img
            src={profile}
            alt="Profile of Sridhar Vadla"
            className="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full object-cover border-4 border-blue-300 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="w-full mt-12 px-6 lg:px-20 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:text-left">
            Skills & Interests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:-translate-y-0.5 transition p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-700"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 18l-6-6 6-6M15 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Development
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Building robust web apps end-to-end with clean, testable code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">React</span>
                <span className="badge">Node.js</span>
                <span className="badge">TypeScript</span>
              </div>
            </div>

            <div className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:-translate-y-0.5 transition p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                  <svg
                    className="h-6 w-6 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 19l7-7-5-5-7 7-2 5 5-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-slate-900">Design</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Crafting intuitive UIs with accessible, user-centric flows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Figma</span>
                <span className="badge">Wireframes</span>
                <span className="badge">UX Writing</span>
              </div>
            </div>

            <div className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:-translate-y-0.5 transition p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-700"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 5l5 5-8 8H6v-5l8-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="8" cy="16" r="1.5" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Cricket
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Team player focused on strategy, timing, and consistency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Batting</span>
                <span className="badge">Fielding</span>
                <span className="badge">Teamwork</span>
              </div>
            </div>

            <div className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:-translate-y-0.5 transition p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <svg
                    className="h-6 w-6 text-indigo-700"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 4H5v16h2M19 4h-2v16h2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-slate-900">Coding</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Problem-solving with algorithms, patterns, and testing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">DSA</span>
                <span className="badge">Testing</span>
                <span className="badge">Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
