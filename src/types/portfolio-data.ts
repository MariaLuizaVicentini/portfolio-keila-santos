export type Project = {
  number: string;
  name: string;
  segment: string;
  platforms: string;
  description: string;
  solutions?: string[];
  work: string[];
  objective: string;
  strategy: string;
  metrics: string[];
  image?: string;
};

export type Certification = {
  issuer: string;
  title: string;
  year?: string;
  duration?: string;
  href: string | null;
};
