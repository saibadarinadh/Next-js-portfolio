'use client';

import { Linkedin, Github, Mail, Phone, DownloadCloud } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="mt-16 h-full bg-black p-8 text-gray-100">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 border p-6 text-center">
          <h1 className="mb-2 text-3xl font-bold">NOAH GOMES</h1>
          <p className="text-xl">SOFTWARE ENGINEER</p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <aside>
            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">DETAILS</h2>
              <div className="mb-2 flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+447447772613</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>noahgomes02@yahoo.com</span>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">LINKS</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <a href="#" className="hover:text-blue-400">
                    Portfolio (this)
                  </a>
                </li>
                <li className="flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  <a href="#" className="hover:text-blue-400">
                    GitHub
                  </a>
                </li>
                <li className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  <a href="#" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="#" className="hover:text-blue-400">
                    Current Project
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">SKILLS/TRAITS</h2>
              <ul className="list-inside list-disc space-y-1">
                <li>JavaScript, TypeScript, Python, React.js, React Native, Next.js</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>AWS</li>
                <li>Cloudflare</li>
                <li>Vercel (platform)</li>
                <li>Linux/Unix</li>
                <li>Version Control: Managing work alongside a team with the use of GitHub</li>
                <li>
                  Communication: Ability to work well with teams and communicate with clients effectively and clearly
                </li>
                <li>Able to work without the need of a supervisor at all times</li>
                <li>Able to meet deadlines appropriately and work well under pressure to do so</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">HOBBIES</h2>
              <ul className="list-inside list-disc space-y-1">
                <li>Playing guitar</li>
                <li>Playing drums</li>
                <li>Playing football</li>
                <li>Travelling</li>
              </ul>
            </section>
          </aside>

          <main className="md:col-span-2">
            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">PROFILE</h2>
              <p>
                Software Engineer. I like building projects that are useful and will be used by a lot of people. I use
                modern frameworks and am comfortable with challenges. I learned self-taught then went to uni (I do not
                think uni is necessary for this field) but grew my knowledge from building things that are challenging
                to me.
              </p>
            </section>

            <section>
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">PREVIOUS WORK</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold">Software engineering intern, American Express</h3>
                <p className="mb-2 text-sm text-gray-400">Jun 2024 — Aug 2024</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Mainly working with Kotlin, Spring boot</li>
                  <li>Learned about enterprise software architecture, CI/CD pipelines</li>
                  <li>Worked on internal tools</li>
                  <li>
                    Wrote API route with full logic that will be used in prod after another internal service is ready
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold">Software Engineer, Crayo AI Inc.</h3>
                <p className="mb-2 text-sm text-gray-400">Feb 2024 — Jun 2024</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Non-funded startup with over 2 Million users. Just me and another dev.</li>
                  <li>Contributed to redesign of whole website (Next.js, Tailwind, TS)</li>
                  <li>Worked on parts of server side code (Python, FastAPI)</li>
                  <li>Wrote backend logic for features from scratch then implemented frontend</li>
                  <li>Updated the video editor and added features such as drag, rotate etc.</li>
                  <li>Continuously added new features from scratch from frontend to backend.</li>
                  <li>Continuous bug fixing</li>
                  <li>
                    Overall contributed to the project as a second dev with the language/frameworks: Next.js 13,
                    TypeScript, Tailwind, Python.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold">Founder + Software Engineer, Clippie AI Ltd.</h3>
                <p className="mb-2 text-sm text-gray-400">Jan 2024 — Present</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>AI video generation SaaS still in development - launch soon.</li>
                  <li>Frontend written with Next.js, TypeScript, TailwindCSS</li>
                  <li>API written with express.js, TypeScript</li>
                  <li>Custom video rendering engine written in Python.</li>
                  <li>Designed and wrote entire website myself</li>
                  <li>Wrote scalable real time API to handle lots of users.</li>
                  <li>
                    Overall stack: TS, Python, Next.js, Express.js, TailwindCSS, ffmpeg-wasm, PostgreSQL, Redis, smaller
                    frameworks/libraries.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Founder + Software Engineer, Liquid Tools</h3>
                <p className="mb-2 text-sm text-gray-400">Mar 2022 — Jan 2024</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Wrote all the code from initial concept to distribution and remained as such till end of company.
                  </li>
                  <li>
                    Created a Discord bot with the use of Next.js + Tailwind CSS and Python for backend and info etc.
                  </li>
                  <li>Created a dashboard on subdomain to allow customers to view and change info etc.</li>
                  <li>
                    Implemented well written, reusable code and important features such as auto updates, auth flow, data
                    storage, data transfer and more.
                  </li>
                  <li>Over 2k Users</li>
                  <li>
                    Frameworks/Langs used - Python (for the app), TypeScript, Next.js with TailwindCSS (for website and
                    dashboard)
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href={'/Noah Gomes - Resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
          className="inline-flex items-center rounded-md bg-[#1E1E1E] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#272727]"
        >
          <span>Download Resume</span>
          <DownloadCloud className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
