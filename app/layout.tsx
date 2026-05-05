import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Tax Compliance Checker — Verify Classification Automatically",
  description: "Analyze contractor relationships against IRS/DOL guidelines, flag misclassification risks, and generate compliant contract templates. Starting at $19/mo.",
  keywords: "contractor classification, IRS compliance, DOL guidelines, 1099 vs W2, worker misclassification, contractor compliance checker",
  openGraph: {
    title: "Contractor Tax Compliance Checker",
    description: "Verify contractor classification compliance automatically. Avoid costly misclassification penalties.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cbf4b291-8523-4c2c-884d-072e6d560bd1"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
