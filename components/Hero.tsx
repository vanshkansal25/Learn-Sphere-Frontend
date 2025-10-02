"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {

  return (
    <section className="pb-20 px-4 pt-40">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[100px] pb-6 font-extrabold tracking-tighter pr-2">
          Learn <span className="text-violet-700">Smarter</span>,
          <br />
          Grow Faster & <span className="text-violet-700">Succeed</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover a seamless learning experience with carefully curated courses hosted on a single platform. Learn new skills, deepen knowledge, and accelerate your career anytime, anywhere with easy access to quality content.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 cursor-pointer bg-violet-700 text-white 
             border-1 border-violet-700 
             hover:bg-white hover:text-violet-700 
             transition">
              Explore Courses
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button size="lg" variant="outline" className="px-8 cursor-pointer border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white transition">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
