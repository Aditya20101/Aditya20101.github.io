import React, { ReactNode } from 'react';
import { BiServer, AiFillDatabase, FaReact, FiCpu } from 'react-icons/all';

export const Skills = () => {
  return (
    <section id={`skills`} className={`p-8 md:p-16`}>
      <h4 className={`text-4xl font-bold text-center md:text-left`}>
        Technologies I have worked with{' '}
      </h4>
      <div
        className={`flex flex-row flex-wrap gap-8 items-center justify-around mt-16`}
      >
        <SkillCard>
          <div className={`p-8`}>
            <AiFillDatabase size={48} className={`text-zinc-900`} />
            <p className={`font-semibold mt-8`}>Data Science, ML and DL</p>
            <p className={`mt-4  font-light text-sm `}>
            Numpy, Pandas, Scipy, Matplotlib, Sklearn, Librosa, openCV, Keras, Tensorflow
            </p>
          </div>
        </SkillCard>

        <SkillCard>
          <div className={`p-8`}>
            <FaReact size={48} className={`text-zinc-900`} />
            <p className={`font-semibold mt-8`}>Frontend Development</p>
            <p className={`mt-4  font-light text-sm `}>
            JavaScript, HTML, CSS, TailwindCSS, ReactJS, NodeJS
            </p>
          </div>
        </SkillCard>

        <SkillCard>
          <div className={`p-8`}>
            <FiCpu size={48} className={`text-zinc-900`} />
            <p className={`font-semibold mt-8`}>Electronics and Communication</p>
            <p className={`mt-4  font-light text-sm `}>
            Matlab, Verilog, CST, HFSS, Cadence Virtuoso, Hspice
            </p>
          </div>
        </SkillCard>

        <SkillCard>
          <div className={`p-8`}>
            <BiServer size={48} className={`text-zinc-900`} />
            <p className={`font-semibold mt-8`}>Languages</p>
            <p className={`mt-4  font-light text-sm `}>
            Python, C/C++, JavaScript, SQL, Matlab, Verilog
            </p>
          </div>
        </SkillCard>
      </div>
    </section>
  );
};

const SkillCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`
          card1 block relative bg-zinc-900 rounded-3xl z-0 text-white overflow-hidden w-64 hover:text-zinc-900 transition-colors duration-700
          before:-z-10
          before:absolute
          before:-top-10
          before:-left-4
          before:bg-amber-500
          before:h-32
          before:w-32
          before:rounded-full
          before:scale-1
          before:origin-center
          before:transition-transform
          before:duration-1000
          before:hover:scale-[24]
          before:ease-in-out
          `}
    >
      <div className="w-16 h-16 rounded-full -top-16 -left-16 -z-10 bg-yellow-600 absolute"></div>
      {/* Actual Content */}
      {children}
    </div>
  );
};
