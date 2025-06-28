// Service Types
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  benefits: string[];
  keywords: string[];
  image: string;
  category: string;
}

// Case Study Types
export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  description: string;
  technologies: string[];
  duration: string;
  image: string;
  keywords: string[];
}

// Blog Types
export interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  keywords: string[];
  image: string;
  seoTitle: string;
  metaDescription: string;
}

// Company Types
export interface CompanyValue {
  title: string;
  description: string;
}

export interface CompanyStatistics {
  clients_served: string;
  years_experience: string;
  team_size: string;
  markets_covered: string;
  data_points_processed: string;
  uptime_guarantee: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface BusinessHours {
  monday_friday: string;
  saturday: string;
  sunday: string;
}

export interface ContactInfo {
  headquarters: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  sales_email: string;
  support_email: string;
  website: string;
  business_hours: BusinessHours;
  emergency_support: string;
}

export interface Company {
  name: string;
  tagline: string;
  location: string;
  founded: string;
  description: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
  services_overview: string;
  specializations: string[];
  industries_served: string[];
  statistics: CompanyStatistics;
}

export interface CompanyData {
  company: Company;
  contact: ContactInfo;
  team: TeamMember[];
  certifications: string[];
  partnerships: string[];
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

// Component Props Types
export interface ButtonProps {
  children: any;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: any;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export interface ContainerProps {
  children: any;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  padding?: boolean;
}

export interface HeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  animation?: boolean;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject: string;
  message: string;
  newsletter?: boolean;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  className?: string;
  error?: string;
}

// Animation Types
export interface AnimationProps {
  children: any;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
}

// API Response Types
export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Page Props Types
export interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Metadata Types
export interface MetadataProps {
  title: string;
  description: string;
  keywords?: string;
  openGraph?: {
    title: string;
    description: string;
    images: string[];
  };
  twitter?: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
} 