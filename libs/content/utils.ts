import path from "path";
import { remark } from 'remark';
import html from 'remark-html';
import * as fs from "fs";
import matter from "gray-matter";

const contentDirectory = process.env.CONTENT_DIR || "./content"
export async function getHTMLContentFromMd(contentToFind: string) {
  const fullPath = path.join(contentDirectory, `${contentToFind}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    contentHtml,
    ...matterResult.data,
  };
}
