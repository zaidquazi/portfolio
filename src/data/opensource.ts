export interface OpenSourceContribution {
  repoName: string;
  description: string;
  impact: string;
  link: string;
}

export const openSourceData: OpenSourceContribution[] = [
  {
    repoName: "facebook/react",
    description: "Core library bug fix.",
    impact: "Merged a PR resolving a rare hydration mismatch edge case in concurrent mode, improving SSR stability for thousands of developers.",
    link: "https://github.com"
  },
  {
    repoName: "vercel/next.js",
    description: "Documentation improvement.",
    impact: "Rewrote the caching strategy guide for the App Router to clarify revalidation behavior for new developers.",
    link: "https://github.com"
  }
];
