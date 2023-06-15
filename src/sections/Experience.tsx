import { Experience, myExperiences } from '../data/Experiences';
import { useState } from 'react';

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  const [selectedTab, setSelectedTab] = useState<'work' | 'about'>('work');
  const selectedTabModifier = 'bg-amber-500 text-zinc-900';
  const idleTabModifier = 'border border-amber-500 text-white';

  return (
    <div
      className={`w-full md:w-70 flex flex-col gap-8 justify-start bg-zinc-900 p-8 rounded-3xl transition-all`}
      
    >
      {/* Title and Duration section */}
      <div className={`flex flex-col gap-8`}>
        <div>
          <p className={`text-xl font-bold text-amber-500`}>{experience.title}</p>
          <p className={`opacity-50 mt-2`}>{experience.organisation}</p>
          <p className={`opacity-50 mt-2`}>{experience.duration}</p>
       
        {<a href='https://doi.org/10.3390/drones7030174' className={``}>
         <button className='mt-2 rounded-full border border-amber-500 px-4 py-2 text-amber-500 text-sm hover:bg-amber-900'>Link</button>
        </a>}
    
        
        </div>
      </div>

      {/* Work and About section */}
      <div className={``}><div className={`text-xl font-bold `}>About</div>
        <div className={`flex gap-4`}>
          {/* <button
            className={`rounded-full  ${
              selectedTab == 'work' ? selectedTabModifier : idleTabModifier
            } px-4 py-2 `}
            onClick={(e) => setSelectedTab('work')}
          >
            About
          </button> */}
          {experience.about && (
            <button
              className={`rounded-full  ${
                selectedTab == 'about' ? selectedTabModifier : idleTabModifier
              } px-4 py-2 `}
              onClick={(_) => setSelectedTab('about')}
            >
             
            </button>
          )}
        </div>
        {selectedTab == 'work' ? (
          <ul className={`mt-4 list-disc text-sm opacity-75`}>
            {experience.desc.map((str) => (
              <li>{str}</li>
            ))}
          </ul>
        ) : (
         
          <p className={`mt-4 text-sm  opacity-75`}>
            {experience.about}
          </p>
        )}
      </div>
      <img
                src={experience.image}
                // className={`w-3/5 md:w-1/2 h-full object-cover transition duration-500 rounded-[48px]
                className={`ml-60 w-3/5 h-full transition duration-500 rounded-[48px]
                hidden sm:block
                md:brightness-50 
                md:hover:brightness-100 
                md:hover:scale-105 
                md:grayscale 
                md:hover:grayscale-0 
                md:hover:shadow-2xl
               `}
              />
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section
      id={`experiences`}
      className={`flex flex-col gap-16 p-8`}
    >
      <p className={`text-4xl font-bold`}>Publications</p>
      <div className={`flex flex-wrap gap-8 justify-evenly`}>
        {myExperiences.map((exp) => (
          <ExperienceCard experience={exp} />
        ))}
      </div>

    </section>
  );
};
