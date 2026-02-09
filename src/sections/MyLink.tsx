import { ReactNode } from 'react';
import {
  FaGit,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

interface Props {
  className?: string;
  type:
    | 'github'
    | 'linkedin'
    | 'none';
  href: string;
  children?: string;

  size ?: number
}

export const MyLink = ({ className, type, href, children, size }: Props) => {
  const Anchor = ({ children }: { children: ReactNode }) => {
    return (
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className={`${className} flex gap-2 items-center transition-all hover:text-amber-500 hover:-translate-y-0.5`}
      >
        {children}
      </a>
    );
  };

  switch (type) {
    case 'linkedin':
      return (
        <Anchor>
          {' '}
          {children} <FaLinkedin size={size}/>{' '}
        </Anchor>
      );
    case 'github':
      return (
        <Anchor>
          {' '}
          {children} <FaGithub size={size}/>{' '}
        </Anchor>
      );
    case 'none':
      return <Anchor> {children} </Anchor>;
  }
};
