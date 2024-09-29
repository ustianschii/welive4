import React from "react";
import {
  BannerBox,
  ConsultationBox,
  ConsultationTitle,
  Title,
  Button,
  Wrapper,
  Highlight,
  Description,
  TextBox,
  AchievementsTitle,
  Achievements,
  Achievement,
  AchievementTitle,
  SvgIcon,
} from "./styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const achievements = [
  { title: "2000+ Smart Devices Installed" },
  { title: "100% Customer Satisfaction" },
  { title: "Customizable Smart Solutions" },
];

export const IntroSecondary = () => {
  return (
    <Wrapper disableGutters>
      <BannerBox>
        <ConsultationBox>
          <ConsultationTitle variant="h3">
            To get your smart house
          </ConsultationTitle>
          <Button variant="contained">Request Consultation</Button>
        </ConsultationBox>
      </BannerBox>
      <TextBox>
        <AchievementsTitle>
          <Achievements>
            {achievements.map((achievement, index) => (
              <Achievement key={index}>
                <SvgIcon>
                  <CheckCircleOutlineIcon />
                </SvgIcon>
                <AchievementTitle>{achievement.title}</AchievementTitle>
              </Achievement>
            ))}
          </Achievements>
          <Title variant="h2">
            A <Highlight>Smarter</Highlight> Way to
            <Highlight>Live</Highlight>
          </Title>
        </AchievementsTitle>
        <Description>
          Smart technology has many cool designs and solutions to make your life
          more comfortable and bring additional passive income to your
          household, not to mention more fun! It is possible to live better
          without breaking the bank.
        </Description>
      </TextBox>
    </Wrapper>
  );
};
