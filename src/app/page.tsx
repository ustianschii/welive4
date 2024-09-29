"use client";
// import styles from "./page.module.css";

import { Intro } from "../../components/intro";
import { IntroSecondary } from "../../components/intro-secondary";
import { Reviews } from "../../components/reviews";
import { Services } from "../../components/services";

export default function Home() {
  return (
    <>
      <Intro />
      <IntroSecondary />
      <Services />
      <Reviews />
    </>
  );
}
