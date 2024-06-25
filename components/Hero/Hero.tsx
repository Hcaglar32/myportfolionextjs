"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse gap-4 lg:flex-row  sm:flex-col-reverse md:flex-col-reverse justify-center items-center">

        {/*col-span 8 */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1
            className="text-white mb-4 text-4xl md:text-5xl lg:text-7xl
                font-semibold font-poppins"
          >
            <span
              className="text-transparent bg-clip-text
                    bg-gradient-to-r from-mycolor-200 to-mycolor-100
                    
                    "
            >
              Merhaba &apos; Ben
            </span>
            <div className="h-2"></div>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hasan Emir Caglar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend Developer",
                1000,
                "Web Geliştirici",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white opacity-75 text-base mb-6 lg:text-lg">
            Merhaba, ben Hasan Emir Çağlar. 1 yıllık Jr. Frontend Developer
            deneyimimle kurumsal web siteleri ve uygulamalar geliştirdim. UI/UX
            tasarımlarını koda dönüştürdüm. Hedefim, kendimi geliştirerek
            sektörde ilerlemek ve yeni iş fırsatları bulmak
          </p>

          <div>
            <a
              href="mailto:hasan.49.5012@gmail.com"
              className="px-6 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-br transition-all from-mycolor-200 to-mycolor-100 text-dark text-center mr-4 hover:from-mycolor-300 hover:to-mycolor-300 hover:text-white"
            >
              Bana Ulaş
            </a>

            <a
              href="/hasan-emir-caglar-cv_last.pdf"
              download="hasan-emir-caglar-cv.pdf"
              className="px-1 inline-block 
                  py-1 w-full md:w-fit rounded-full
                  bg-gradient-to-br
                  from-mycolor-200 to-mycolor-100
                  text-mycolor-700 text-center mt-3 hover:from-mycolor-300 transition-all hover:to-mycolor-300 hover:text-white"
            >
              <span
                className="block  rounded-full
                      px-5 py-2"
              >
                Öz geçmişimi İndir
              </span>
            </a>
          </div>
        </motion.div>

        {/*col-span 4 */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 md:mt-0"
        >
          <div
            className="relative rounded-full bg-gradient-to-bl
                from-mycolor-100 to-mycolor-500 
                w-[250px] h-[250px]
                lg:w-[400px] lg:h-[400px]
                "
          >
            <Image
              alt="Junior Frontend Developer"
              src="/ben.JPG"
              width={370}
              height={370}
              className="absolute object-cover transform 
                    -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 rounded-full
                    w-[220px] h-[220px]  lg:w-[370px] lg:h-[370px]
                    "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
