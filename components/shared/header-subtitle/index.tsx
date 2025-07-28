import { Box, Typography } from "./styles";
interface HeaderSubtitleTypes {
  subtitles?: string[];
}

export const HeaderSubtitle = ({ subtitles }: HeaderSubtitleTypes) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {subtitles?.map((subtitle) => (
        <Typography key={subtitle}>{subtitle}</Typography>
      ))}
    </Box>
  );
};
