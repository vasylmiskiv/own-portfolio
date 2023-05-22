interface INavItem {
  label: string;
  page: string;
}

interface ISkillItem {
  id: number;
  name: string;
}

interface IProjectItem {
  name: string;
  description: string;
  image: string;
  isImageDark: boolean;
  github: string;
  link: string;
}

interface ISlideUpProps {
  offset?: string;
  children?: ReactNode;
  // any props that come into the component
}
