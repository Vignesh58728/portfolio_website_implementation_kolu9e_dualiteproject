import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-full opacity-20 blur-2xl"></div>
              <img 
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/c326/c57d/3360aeac03692f1e912e8b412ab1b96e?Expires=1765152000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HF-sxVm-tjVAE0-jc1LIh8S5WaiDHqByPbnI79B8IttqDKGfU~porXlOheyM7fttbT-zdUn2x9J5B26L0R3kbXYh2Staf4RGnVYEJYxGCuMTzpWu5Iz8U0ru1-qF3bWXZUShCo5TdEQWHvOqIsPH6QVilcxMsar8y2E~M0T2qVQKJtbbVsOS1~2dEn8chN57o6s8Gd49SJ21YYYrAz-lUo9MTuJNK0NbYLqtiy2-3bvCpmrArVe-KF-HihO6qUHrH1YarigrcwomkRLV-llr-0D4p-Ln6k5HGBavlipo9X4nETtfibToz3OSymENWrfgTTiYmdDl9~PEqnpsZgOp6w__" 
                alt="About Me" 
                className="w-full h-full object-cover rounded-full border-8 border-white shadow-xl"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="font-playfair font-bold text-5xl text-[#25282B]">About me</h2>
            <div className="font-poppins text-base md:text-lg text-[#828282] leading-relaxed space-y-4 text-justify">
              <p>
                Motivated and results-driven student pursuing a B.Tech in Artificial Intelligence and Data Science, with strong technical skills and hands-on project experience. I have actively participated in 35+ inter-college events and earned multiple certifications, including 5 NPTEL certifications, demonstrating my commitment to continuous learning.
              </p>
              <p>
                Proficient in Python, Java, and front-end technologies, with additional expertise in UI/UX design and various industry-standard design and development tools. I have successfully completed 10+ freelance projects, delivering high-quality solutions for clients. I am also experienced in supporting and developing college-level student projects, showcasing both teamwork and independent problem-solving skills.
              </p>
              <p>
                I aim to apply my technical knowledge, creativity, and practical experience to contribute effectively to real-world software and AI-driven solutions.
              </p>
            </div>
            
            <div className="pt-4 flex justify-center md:justify-start">
              <Link to="resume" smooth={true} duration={500}>
                <Button className="bg-secondary text-[#25282B] rounded-lg font-roboto font-medium hover:bg-secondary/90 cursor-pointer">
                  Resume
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
