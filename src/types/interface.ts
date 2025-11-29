export interface LanguageInterface {
  [key: string]: {
    location: string;
    tel: string;
    languages: string[];
    headings: {
      work_experience: string;
      skills: string;
      education: string;
    };
    school: {
      name: string;
      url: string;
    };
    jobs: {
      role: string;
      company: {
        name: string;
        url: string;
      };
      date: string;
      heading: string;
      items: string[];
    }[];
    skills: {
      frontend: {
        name: string;
        items: string[];
      };
      familiar: {
        name: string;
        items: string[];
      };
      backend: {
        name: string;
        items: string[];
      };
      other: {
        name: string;
        items: string[];
      };
    };
  };
}
