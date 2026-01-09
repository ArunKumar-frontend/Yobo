import { EvervaultCard } from '@/components/ui/evervault-card';
import { Plus } from 'lucide-react';
import React from 'react';

const Services = () => {


  return (
    <div className="w-full bg-white py-6 overflow-hidden">
   
   <div className='flex justify-center items-center gap-5 p-10 '>
     <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
    <EvervaultCard text={"Services"}/>
 
      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p>
    </div>
 <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
    <EvervaultCard text={"Services"}/>
 
      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p>
    </div>
 <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
    <EvervaultCard text={"Services"}/>
 
      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p>
    </div>
   </div>
    

   
    </div>
  );
};

export default Services;