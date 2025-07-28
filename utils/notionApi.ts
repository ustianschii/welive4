import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getPublishedPosts(category: string) {
  const databaseId = process.env.HOME_AUTOMATION_SYSTEM_DATABASE_ID!;
  const notionSubdomain = "welive4.notion.site";

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

      return {
        id: page.id,
        title,
        slug,
        iframeUrl,
        coverUrl,
      };
    });

  console.log("Fetched posts:", posts);
  console.log("typeof coverurl:", typeof posts[1]?.coverUrl);

  return posts;
}
