export interface DateProps {
  month: number;
  year: number;
}

export interface ExperienceProps {
  date: {
    from: DateProps;
    to?: DateProps;
    isPresent: boolean;
  };
  img: string;
  title: string;
  role?: string;
  location?: string;
  description?: string[];
  course?: string;
  link: string;
  isDarkMode?: boolean;
}

export interface ProjectProps {
  date: DateProps;
  img: string;
  isDarkMode?: boolean;
  title: string;
  description?: string;
  tags?: string[];
  links: {
    github: string;
    live: string;
  };
}
