// import styles from "./page.module.css";
// de hotarit cu dark theme
import { Intro } from "../../components/intro";
import { IntroSecondary } from "../../components/intro-secondary";
import { Reviews } from "../../components/reviews";
import { Services } from "../../components/services";
import { reviews } from "../../components/review-card/reviews";

export default function Home() {
  return (
    <>
      <Intro />
      <IntroSecondary />
      <Services />
      <Reviews reviews={reviews} />
    </>
  );
}
