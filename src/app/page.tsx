"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/sparkles";
import Footer from "./components/footer/page";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function Home() {
  const description =
    "Hi, I'm Sumit Dalai. A passionate Full Stack Developer specializing in building exceptional digital experiences.";

  return (
    <>
      <main className="min-h-screen  relative mt-4">
        <BackgroundBeamsWithCollision>
          <div className="h-screen flex flex-col items-center justify-center relative z-10">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Welcome to My Portfolio
              </h1>

              <TextGenerateEffect
                words={description}
                className="text-lg md:text-xl text-gray-200"
              />
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        <div className="relative w-full">
          <div className="h-[8rem] w-full overflow-hidden">
            {/* Curved mask for sparkles */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: "ellipse(100% 100% at 50% 0%)",
                WebkitClipPath: "ellipse(100% 100% at 50% 0%)",
              }}
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1000}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900"
              style={{
                clipPath: "ellipse(100% 100% at 50% 0%)",
                WebkitClipPath: "ellipse(100% 100% at 50% 0%)",
              }}
            ></div>
          </div>
        </div>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Grinding Day by Day
          </motion.h1>
        </LampContainer>
      </main>
      <Footer />
    </>
  );
}
