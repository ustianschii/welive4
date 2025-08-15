import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getPublishedPosts(category: string) {
  const databaseId = process.env.HOME_AUTOMATION_SYSTEM_DATABASE_ID!;
  const notionSubdomain = "eight-wheel-012.notion.site";

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Category",
          multi_select: {
            contains: category,
          },
        },
      ],
    },
  });

  const posts = response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const nameProp = page.properties["Title"];
      const slugProp = page.properties["Slug"];
      const urlProp = page.properties["Url"];
      const coverProp = page.properties["Cover"];
      const descriptionProp = page.properties["Meta description"];

      const title =
        nameProp?.type === "title"
          ? nameProp.title[0]?.plain_text ?? "Untitled"
          : "Untitled";

      const slug =
        slugProp?.type === "rich_text"
          ? slugProp.rich_text[0]?.plain_text ?? ""
          : "";

      const iframeUrl =
        urlProp?.type === "url" && urlProp.url
          ? urlProp.url
          : `https://${notionSubdomain}.notion.site/ebd/${page.id.replace(
              /-/g,
              ""
            )}`;

      const coverUrl =
        coverProp?.type === "files" && coverProp.files.length > 0
          ? coverProp.files[0]?.type === "file"
            ? coverProp.files[0].file.url
            : coverProp.files[0]?.type === "external"
            ? coverProp.files[0].external.url
            : null
          : null;

      const description =
        descriptionProp?.type === "rich_text" &&
        descriptionProp.rich_text.length > 0
          ? descriptionProp.rich_text.map((text) => text.plain_text).join(" ")
          : "No description available";

      return {
        id: page.id,
        title,
        description,
        slug,
        iframeUrl,
        coverUrl,
      };
    });

  return posts;
}
