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
  feedback: {
    labels:
      "https://github.com/liolle/documentation-vertix/issues/new?title=Feedback%20for%20%E2%80%9CVertix%20Doc%E2%80%9D&labels=feedback",
  },
  editLink: {
    text: "https://github.com/liolle/documentation-vertix",
  },
};

export default config;
