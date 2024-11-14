interface MetaProps {
  title: string;
  keywords: string[];
  description: string;
}

export const Meta = ({
  title = "We Live 4",
  keywords = [
    "welive4, smart home, ev charging, network, energy management, game room, home theater, wifi, tv mounting, home audio, loxone, outdoor tv",
  ],
  description = "Experience smart technology",
}: Partial<MetaProps>) => {
  return (
    <head>
      {/* <Analytics /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      {/* <meta charSet="utf-8" /> */}
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title}</title>
    </head>
  );
};
