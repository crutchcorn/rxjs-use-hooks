import {defineConfig} from "vitepress";

const {description} = require("../../package.json");

const ogImage = "/social-banner.png";

export default defineConfig({
  lang: "en-US",
  title: "RxJS Use Hooks",
  description: description,
  base: "/rxjs-use-hooks/",
  lastUpdated: true,
  head: [
    ["meta", {property: "og:image", content: ogImage}],
    ["meta", {name: "twitter:image", content: ogImage}],
    ["meta", {name: "theme-color", content: "#DBCAFF"}],
    ["meta", {property: "twitter:card", content: "summary_large_image"}],
    ["link", {rel: "icon", href: "/logo.svg", type: "image/svg+xml"}],
    ["link", {rel: "mask-icon", href: "/logo.svg", color: "#ffffff"}],
  ],
  themeConfig: {
    logo: "/logo.svg",
    socialLinks: [
      {icon: "github", link: "https://github.com/crutchcorn/rxjs-use-hooks"}
    ],
    editLink: {
      pattern: "https://github.com/crutchcorn/rxjs-use-hooks/edit/main/docs/:path",
    },
    nav: [
      {text: "Introduction", link: "/introduction"},
      {
        text: "v0",
        items: [
          // Change to `Changelog` when we have one
          {
            text: "Releases",
            link: "https://github.com/crutchcorn/rxjs-use-hooks/releases",
          },
          {
            text: "Contributing",
            link: "https://github.com/crutchcorn/rxjs-use-hooks/blob/main/CONTRIBUTING.md",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction",
      },
      {
        text: "useObservable",
        link: "/useObservable",
      },
      {
        text: "useSubject",
        link: "/useSubject",
      },
      {
        text: "useSubscription",
        link: "/useSubscription",
      },
    ],
  },
});
