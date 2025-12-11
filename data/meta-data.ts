const HeaderNavLinks = [
  {
    title: "Topics",
    href: "/topics",
  },
  {
    title: "About",
    href: "/about",
  },
];

const HomePage = {
  metadata: {
    metadataBase: new URL("https://gre.shenlu.me"),
    title: {
      default:
        "GRE AWA | A toolkit can help you practice and prepare effectively for the GRE Analytical Writing.",
      template: `%s | GRE AWA`,
    },
    description:
      "GRE AWA is a toolkit that can help you practice and prepare effectively for the GRE Analytical Writing.",
    openGraph: {
      title: "GRE AWA",
      description:
        "GRE AWA is a toolkit that can help you practice and prepare effectively for the GRE Analytical Writing.",
      url: "https://gre.shenlu.me",
      siteName: "GRE AWA",
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "GRE AWA",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  },
  title: "GRE AWA",
  description:
    "GRE AWA is a toolkit that can help you practice and prepare effectively for the GRE Analytical Writing.",
  url: "https://gre.shenlu.me",
  avatar_url: "/images/logo.svg",
};

const SearchPage = {
  metadata: {
    title: "Search",
    description: "Find and search the topics for the GRE Analytical Writing",
  },
};

const AboutPage = {
  metadata: {
    title: "About",
    description: "More detailed information about GRE AWA.",
  },
};

export { HeaderNavLinks, HomePage, SearchPage, AboutPage };
