"use client";
// import styles from "./page.module.css";
// de hotarit cu dark theme
import { Intro } from "../../components/intro";
import { IntroSecondary } from "../../components/intro-secondary";
import { Reviews } from "../../components/reviews";
import { Services } from "../../components/services";
import { reviews } from "../../components/review-card/reviews";
import { Meta } from "./head";

export default function Home() {
  return (
    <>
      <Meta />
      <Intro />
      <IntroSecondary />
      <Services />
      <Reviews reviews={reviews} />
    </>
  );
}
