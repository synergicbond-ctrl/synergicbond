import { SectionView } from "@/components/organic-course/views";
import { devOnly } from "../../../guard";
export default async function Page({ params }: { params: Promise<{ stem: string; dir: string }> }) {
  devOnly();
  const { stem, dir } = await params;
  return <SectionView base="/dev-pilots/native" stem={stem} dir={dir} animSrc="/organic-course/sb-anim.js" />;
}
