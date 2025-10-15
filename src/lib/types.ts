export interface DateProps {
  month: number;
  year: number;
}

export type RoleType = "Full-time" | "Part-time" | "Freelance" | "Internship";

export interface ExperienceProps {
  type: "work" | "education";
  date: {
    from: DateProps;
    to?: DateProps;
    isPresent: boolean;
  };
  role_type?: RoleType;
  img: string;
  title: string;
  role?: string;
  location?: string;
  projects?: {
    title: string;
    links?: {
      github?: string;
      live?: string;
    };
    image?: string;
    description: string[];
  }[];
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
