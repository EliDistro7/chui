"use client";

/**
 * This file is used for onboarding when you don't have content yet and are using the template for the first time.
 * Once you have provided a url for the environment variable NEXT_PUBLIC_SANITY_STUDIO_URL, and have content, you can delete this file.
 */




type OnboardingMessageProps = {
  message: {
    title: string;
    description: string;
  };
  link: {
    title: string;
    href: string;
    showIcon?: boolean;
  };
  type?: string;
  path?: string;
};

const OnboardingMessage = ({
  message,
  link,
  type,
  path,
}: OnboardingMessageProps) => {
 

  return (
    null
  );
};

export default function Onboarding() {
  return (
   null
  );
}

export function PageOnboarding() {
  return (
    null
  );
}
