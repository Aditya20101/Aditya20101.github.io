import { MyLink } from '../sections/MyLink';
import React from 'react';

interface HandlesProps {
  className?: string;
}
export const SocialHandles = ({ className }: HandlesProps) => {
  return (
    <ul className={` ${className ? className : ''} flex flex-row gap-4 `}>

      <MyLink
        type={'instagram'}
        href={'https://www.instagram.com/aditya_21___/'}
        size={32}
      />
     
      <MyLink
        type={'linkedin'}
        href={'https://www.linkedin.com/in/aditya-s-b7251a201/'} size={32}
      />
      <MyLink type={'github'} href={'https://github.com/Aditya20101/'}  size={32}/>
      
    </ul>
  );
};