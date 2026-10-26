import { ChapterView } from "@/components/organic-course/views";
import { devOnly } from "../../../guard";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  devOnly();
  const { slug } = await params;
  return <ChapterView base="/dev-pilots/native" slug={slug} />;
}
