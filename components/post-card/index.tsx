"use client";

import Link from "next/link";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

import { TRANSPARENT_GRAY, WHITE } from "@/src/styles/constants";

interface PostCardProps {
  id: string;
  title: string;
  slug?: string;
  coverUrl?: string | null;
}

export default function PostCard({ slug, title, coverUrl }: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      passHref
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        sx={{
          backgroundColor: TRANSPARENT_GRAY,
          color: WHITE,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={coverUrl ?? "/default-cover.png"}
            alt={title}
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
