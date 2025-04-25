export interface ExperienceProps {
  date: {
    from: {
      month: string;
      year: number;
    };
    to?: {
      month?: string;
      year?: number;
    };
    isPresent: boolean;
  };
  img: string;
  title: string;
  role?: string;
  description?: string[];
  course?: string;
  link: string;
}

export interface ProjectProps {
  date: {
    month: string;
    year: number;
  };
  img: string;
  isDarkMode: boolean;
  title: string;
  description?: string;
  tags?: string[];
  links: {
    github: string;
    live: string;
  };
}
