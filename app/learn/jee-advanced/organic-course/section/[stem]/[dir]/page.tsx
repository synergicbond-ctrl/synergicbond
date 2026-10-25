import { SectionView } from "@/components/organic-course/views";
export default async function Page({ params }: { params: Promise<{ stem: string; dir: string }> }) {
  const { stem, dir } = await params;
  return <SectionView base="/learn/jee-advanced/organic-course" stem={stem} dir={dir} animSrc="/organic-course/sb-anim.js" />;
}
