"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import "./styles.css";

export default function NotionPage({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  );
}
