export interface DestinationCard {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  description?: string;
  link: string;
  gridClass: string;
  delay?: string;
}

export interface ExperienceCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  delay?: string;
}

export interface VideoCard {
  id: string;
  src: string;
  poster: string;
  alt: string;
  title: string;
  subtitle: string;
  lightboxTitle?: string;
  delay?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  delay?: string;
}

export interface WhyCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

export interface LightboxState {
  isOpen: boolean;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  title: string;
}

