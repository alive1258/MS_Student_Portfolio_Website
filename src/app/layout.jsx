import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Abu Sayem",
    template: "%s | Abu Sayem",
  },
  description:
    "Abu Sayem — MS student and Power Electronics researcher specializing in power converter design, reliability engineering, and renewable energy systems. Explore his research, publications, and academic journey.",
  keywords: [
    "Abu Sayem",
    "Power Electronics Researcher",
    "MS Student",
    "Power Converter Design",
    "Reliability Engineering",
    "Renewable Energy Systems",
    "Electrical Engineering",
    "Research Portfolio",
    "Energy Conversion",
    "Smart Grids",
  ],
  icons: {
    icon: "https://i.ibb.co/w7HRw2Q/logo.webp", // Replace with your own logo if available
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdabusayem.com", // Replace with Abu Sayem’s actual domain
    siteName: "Abu Sayem",
    title: "Abu Sayem | Power Electronics Researcher & MS Student",
    description:
      "Explore the academic and research portfolio of Abu Sayem — focused on power converter design, renewable energy systems, and electrical reliability.",
    images: [
      {
        url: "https://i.ibb.co/8VbVZmn/Sayem-Image.png", // Update to a 1200x630 OpenGraph preview image
        width: 1200,
        height: 630,
        alt: "Abu Sayem Portfolio Preview",
      },
    ],
    profile: {
      firstName: "Abu",
      lastName: "Sayem",
      username: "abu-sayem", // Optional LinkedIn username
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle", // Optional: add Sayem's Twitter if available
    title: "Abu Sayem | Power Electronics Researcher & MS Student",
    description:
      "Researcher focused on power converter design, reliability, and renewable energy systems. Visit to explore academic works and publications.",
    images: ["https://i.ibb.co/w7HRw2Q/logo.webp"], // Match with OpenGraph image
  },
  // Custom field for social profiles (not standard metadata, just for your use)
  socialProfiles: {
    linkedin: "https://www.linkedin.com/in/md-sayem-8a53b2208/", // Add actual LinkedIn URL here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff]`}
      >
        <NextTopLoader
          showSpinner={false}
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div className="bar" role="bar"><div className="peg"></div></div>
          <div className="spinner" role="spinner"><div className="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
      </body>
    </html>
  );
}
