import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LogoSVG } from "./components/logo";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <LogoSVG />
    </span>
  ),
  project: {
    link: "https://github.com/liolle/documentation-vertix",
  },

  docsRepositoryBase: "https://github.com/liolle/documentation-vertix",
  footer: {
    text: "© Vertix",
  },
};

export default config;
