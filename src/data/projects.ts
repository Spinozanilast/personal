export interface Project {
  index: number;
  title: string;
  tagline: string;
  description: string;
  details: string;
  tech: string[];
  link: string;
  logoLink: string;
  year: string;
}

export const projects: Project[] = [
  {
    index: 1,
    title: "Flow Launcher Plugin",
    tagline: "AppsSnapshoter",
    description: "Snapshot currently open apps and launch them all later.",
    details:
      "A Flow Launcher plugin that captures your currently running (windowed) apps into named snapshots, so you can restore your whole working setup later in a couple of keystrokes. Snapshots can be listed, renamed, removed, and apps inside them can be replaced or blocked from ever being snapshotted again.",
    tech: ["C#", "WPF", "Flow Launcher"],
    link: "https://github.com/Spinozanilast/Flow.Launcher.Plugin.AppsSnapshoter",
    logoLink:
      "https://raw.githubusercontent.com/Spinozanilast/Flow.Launcher.Plugin.AppsSnapshoter/refs/heads/master/snapshot.png",
    year: "2024",
  },
  {
    index: 2,
    title: "Aseprite Assets CLI",
    tagline: "aseprite-assets-cli",
    description: "Manage Aseprite sprites and palettes from the terminal via TUI.",
    details:
      "A Go CLI for a better experience with Aseprite assets. List existing sprites and palettes, create new ones, preview them right in the terminal, and export them by format or template path with optional scales or sizes. Flags are interchangeable with interactive surveys.",
    tech: ["Go", "Cobra", "Viper"],
    link: "https://github.com/Spinozanilast/aseprite-assets-cli",
    logoLink:
      "https://raw.githubusercontent.com/Spinozanilast/aseprite-assets-cli/master/www/static/logo128.png",
    year: "2025",
  },
];
