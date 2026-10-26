import { CourseIndexView } from "@/components/organic-course/views";
import { devOnly } from "../guard";
export default function Page() { devOnly(); return <CourseIndexView base="/dev-pilots/native" />; }
