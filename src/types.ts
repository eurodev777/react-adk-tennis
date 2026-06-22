export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  linkText: string;
  date?: string;
  tag?: string;
}

export interface Sponsor {
  id: number;
  name: string;
  category: "Patrocinador" | "Parceria" | "Apoio";
  customSvgType: string;
  websiteUrl?: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  target: string;
  features: string[];
  image: string;
}

export interface Athlete {
  id: string;
  name: string;
  category: string;
  achievement: string;
  rankSingle?: string;
  rankDouble?: string;
  highlights: string[];
  image: string;
  bio: string;
  status: string;
}

export interface News {
  id: string;
  title: string;
  summary: string;
  date: string;
  content: string;
  image: string;
  tag: string;
}

export interface Unit {
  id: string;
  name: string;
  city: string;
  description: string;
  courts: string;
  amenities: string[];
  address: string;
  phone: string;
  email: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  image: string;
}
