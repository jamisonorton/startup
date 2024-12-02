export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/jamisonorton/startup",
  },
};
