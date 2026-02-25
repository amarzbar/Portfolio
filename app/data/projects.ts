export interface Project {
  name: string;
  techStack: string[];
  description: string;
  license: string | null;
  status: "Public" | "Private";
  repoUrl: string;
}

const projects: Project[] = [
  {
    name: "LofiModoro",
    techStack: ["TypeScript", "React"],
    description:
      "A Lofi stream player coupled with a pomodoro clock",
    license: null,
    status: "Public",
    repoUrl: "https://github.com/amarzbar/LofiModoro",
  },
  {
    name: "Lobotomizer",
    techStack: ["TypeScript", "JavaScript"],
    description:
      "Full-stack application with separate client and server components",
    license: "MIT",
    status: "Public",
    repoUrl: "https://github.com/amarzbar/Lobotomizer",
  },
  {
    name: "PKMetaAnalyzer",
    techStack: ["Python", "R"],
    description:
      "RShiny Application that performs Statistical Analysis on the Base Stat Total (BST) of all pokemon to determine their meta relevance",
    license: null,
    status: "Public",
    repoUrl: "https://github.com/amarzbar/PKMetaAnalyzer",
  },
  {
    name: "AcolytesOfAdi",
    techStack: ["Python"],
    description:
      "Fun little Discord Bot to tally up weekly participation on university discord chat's known simply as 'Friday'",
    license: null,
    status: "Public",
    repoUrl: "https://github.com/amarzbar/AcolytesOfAdi",
  },
  {
    name: "Journal",
    techStack: ["C++", "Flutter"],
    description:
      "Flutter Application used for keeping track of daily activities",
    license: null,
    status: "Public",
    repoUrl: "https://github.com/amarzbar/Journal",
  },
  {
    name: "tarjuman",
    techStack: ["Linux", "Wayland", "Hyprland"],
    description:
      "Basic keybinding system for diacritic extensions to Linux Keyboards running Wayland + Hyprland",
    license: null,
    status: "Public",
    repoUrl: "https://github.com/amarzbar/tarjuman",
  },
  {
    name: "RAMbunctious",
    techStack: ["HTML", "Browser Extension"],
    description:
      "A memory management extension for Chromium Based Browsers",
    license: "MIT",
    status: "Private",
    repoUrl: "https://github.com/amarzbar/RAMbunctious",
  },
  {
    name: "GitSwitcher",
    techStack: ["Shell"],
    description:
      "Bash Script ran in current directory to determine whether the following repo is a work repo or a personal repo",
    license: null,
    status: "Public",
    repoUrl: "https://github.com/amarzbar/GitSwitcher",
  },
];

export default projects;
