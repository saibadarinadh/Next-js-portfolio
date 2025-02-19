import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';

export default function PreviousWork() {
  const data = [
    {
      title: 'MERN Intern',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            🏡 HomzSpot: Redefining Real Estate Discovery 🚀
            <br></br>Discover a new era in real estate with HomzSpot – not just a listing site, but your all-in-one solution. We prioritize security with robust authentication, ensuring your peace of mind.
            <br></br>👤 User-Centric Design
            Seamless registration, secure login, and personalized profiles set the stage for your HomzSpot journey. Your needs and preferences matter.
            <br></br>🏠 Effortless Listings with CRUD Operations
            Showcase properties effortlessly with comprehensive details, stunning images, and robust CRUD operations for easy management – create, read, update, and delete listings with a breeze.
            <br></br>💬 Connect with Ease
            Our messaging system fosters buyer-seller communication. Bookmark favorite properties for a streamlined experience.
            <br></br>📱 Responsive & Mobile-Friendly
            HomzSpot adapts to your lifestyle with a responsive, mobile-friendly design. Your property search is at your fingertips, anytime, anywhere.
            <Link href={'https://clippie.ai'} className="text-gray-300 no-underline">
              here
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/previous-work/home.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/previous-work/crud.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: 'Head of Strategies and Simulation –10X (StartUp)',
      content: (
        <div>
          <p className="mb-4 flex flex-col text-xs font-normal text-neutral-200 md:text-sm">

            I represented 10X in negotiations with Foxconn, securing a manufacturing partnership for mobile devices, and played a key role in designing the 10X Smart Speaker, contributing to its architecture, product development, and the creation of the 10X Voice Assistant. Additionally, I led a 7-member Agile team to integrate AI-powered features, increasing user engagement by 30%, and worked on AI-driven smartphone software, ensuring inclusivity and innovation. I also managed the company website and actively represented 10X in business deals, driving strategic growth and technological advancements.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/previous-work/10X.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
            />
          </div>
        </div>
      ),
    },

  ];
  return (
    <div className="w-full bg-black" id="prev-work">
      <Timeline data={data} />
    </div>
  );
}
