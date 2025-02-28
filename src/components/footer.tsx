import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { metaData, socialLinks } from '@/app/config';
import Link from 'next/link';

const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={IoIosMail} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{' '}
      <Link
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </Link>
      <SocialLinks />
    </small>
  );
}
