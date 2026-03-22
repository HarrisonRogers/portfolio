import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { metaData, socialLinks } from '@/app/config';
import Link from 'next/link';

const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
  ariaLabel,
}: {
  href: string;
  icon: React.ElementType;
  ariaLabel: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
    >
      <Icon />
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-1">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} ariaLabel="X" />
      <SocialLink
        href={socialLinks.github}
        icon={FaGithub}
        ariaLabel="GitHub"
      />
      <SocialLink
        href={socialLinks.linkedin}
        icon={FaLinkedinIn}
        ariaLabel="LinkedIn"
      />
      <SocialLink href={socialLinks.email} icon={IoIosMail} ariaLabel="Email" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="lg:mt-24 mt-16 pt-8 border-t border-border">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="font-mono">{YEAR}</span>{' '}
          <Link
            className="no-underline hover:text-foreground transition-colors"
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            {metaData.name}
          </Link>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
