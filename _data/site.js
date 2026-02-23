const isProduction = process.env.ELEVENTY_ENV === "production";
const productionUrl = process.env.SITE_URL || "https://example.com";

export default {
  title: {
    tagline: "Presenting the",
    title: "Academic Workshop Zola Theme",
    subtitles: ["For workshops, seminars, and academic events"],
    url: false
  },
  description: "A Zola-inspired workshop and seminar theme ported to Eleventy.",
  language: "en",
  author: "Alexander Terenin",
  url: isProduction ? productionUrl : "http://localhost:8080",
  favicon: false,
  card: {
    url: "/placeholder.svg",
    large: false
  },
  banner: {
    extension: "svg",
    size: "fixed",
    fade: true,
    noRepeat: false
  },
  buttons: [
    { name: "Website", url: "https://aterenin.github.io/academic-workshop" },
    { name: "GitHub", url: "https://github.com/aterenin/academic-workshop" }
  ],
  image: {
    ext: ".jpg"
  },
  listPageLimit: 10,
  headerPages: [
    { name: "Home", url: "/#home" },
    { name: "Design", url: "/#design" },
    { name: "Seminars", url: "/seminars/" }
  ],
  buttonShortcuts: [
    { variable: "video", name: "Video" }
  ],
  footerText: 'This website is built using <a href="https://www.11ty.dev/">Eleventy</a> and the <a href="http://github.com/aterenin/academic-workshop/">Academic Workshop</a> theme, which is <a href="https://jeffhuang.com/designed_to_last/">designed to last</a>.',
  themeSlug: "academic-workshop",
  themeName: "Academic Workshop",
  themeHomepage: "https://github.com/aterenin/academic-workshop",
  themeDemo: "https://aterenin.github.io/academic-workshop",
  themeAuthor: "Alexander Terenin",
  themeLicense: "MIT",
  navigation: [
    { label: "Home", url: "/" },
    { label: "Seminars", url: "/seminars/" },
    { label: "Blog", url: "/blog/" },
    { label: "About", url: "/about/" },
    { label: "Contact", url: "/contact/" }
  ]
};
