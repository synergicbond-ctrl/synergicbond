import { ChapterView } from "@/components/organic-course/views";
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ChapterView base="/learn/jee-advanced/organic-course" slug={slug} />;
}
