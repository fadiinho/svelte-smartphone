import type { IconSource } from "svelte-hero-icons";

export interface TApp {
  appName: string;
  icon: IconSource;
  className?: string;
}
