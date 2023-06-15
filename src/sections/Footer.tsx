import React from 'react';
import { SocialHandles } from '../components/SocialHandles';

export {};

export const Footer = () => {
  return <section id='footer' className={'p-16 flex flex-col md:flex-row md:p-32 opacity-75 justify-between'}>

    <div className={''}>
      <p className={'text-4xl '}>Designed and Developed By:</p>
      {/* <p className={'text-2xl font-extralight mt-4'}>Aditya Saxena</p>
      <p className={'font-light'}>adityas20101@iiitnr.edu.in</p>
      <p className={'font-light'}>+91-7024445718</p> */}
      <p className={'text-2xl mt-4'}>Aditya Saxena</p>
      <p className={''}>adityas20101@iiitnr.edu.in</p>
      <p className={''}>+91-7024445718</p>
      <SocialHandles className={'mt-12'}/>
    </div>

    {/* <img className={'w-96 hidden md:block'} src={'assets/programmer_footer.svg'}/> */}
    <img className={'w-96 hidden md:block'} src={'assets/programmer_footer.svg'}/>

  </section>;
};
