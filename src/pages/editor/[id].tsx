import PageHeader from "@/components/Page/Header";
import { Poppins } from "@next/font/google";
import { EditorPageContainer } from "@/components/Container";
import { Header, Footer } from "@/components/Banner";
import { useRouter } from "next/router";
import EditorPageSkeleton from "@/components/Skeleton/EditorPageSkeleton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
});

export default function EditorIdPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={poppins.className}>
      <PageHeader
        title="Editor | ReadmeEase"
        description="Discover the power of effortless README creation with the editor feature of ReadmeEase. Create professional-looking documentation with ease using its drag and drop interface and dynamic customization options, all built with Next.js and Tailwind CSS."
      />
      <Header />
      <main className="block w-full">
        {!id ? <EditorPageSkeleton /> : <EditorPageContainer id={id} />}
      </main>
      <Footer />
    </div>
  );
}
