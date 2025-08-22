"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { Collection } from "react-notion-x/build/third-party/collection";

import "./styles.css";

export default function NotionPage({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={true}
      components={{
        Collection,
      }}
    />
  );
}
