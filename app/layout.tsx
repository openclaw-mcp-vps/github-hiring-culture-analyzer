import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Hiring Culture Analyzer",
  description: "Analyze company culture from GitHub activity. Evaluate team collaboration, code review culture, and work-life balance before accepting a job offer."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3601ff51-0388-4ca4-a83f-1a4a355f1fb7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
