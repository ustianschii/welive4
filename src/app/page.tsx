"use client";
// import styles from "./page.module.css";

import { Banner } from "../../components/banner";
import { IntroText } from "../../components/intro";
import { IntroSecondary } from "../../components/intro-secondary";

// import { Banner } from "../../components/banner";

export default function Home() {
  return (
    <>
      <IntroText />
      <Banner />
      <IntroSecondary />
    </>
  );
}
