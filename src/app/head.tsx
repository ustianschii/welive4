import Head from "next/head";
import { Analytics } from "../../components/analytics/analytics";

interface MetaProps {
  title: string;
  keywords: string[];
  description: string;
}

export const Meta = ({
  title = "WeLive4",
  keywords = [],
  description = "Business & Smart Home Automation Design, Installation and support.",
}: Partial<MetaProps>) => {
  return (
    <>
      <Head>
        <Analytics />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="logos/favicon.svg" type="image/svg+xml" /> */}
        <title>{title}</title>
      </Head>
    </>
  );
};
