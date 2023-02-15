import PageHeader from "@/components/Page/Header";
import { Poppins } from "@next/font/google";
import { EditorPageContainer } from "@/components/Container";
import { Header, Footer } from "@/components/Banner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
});

export default function EditorIdPage() {
  return (
    <div className={poppins.className}>
      <PageHeader
        title="Editor | ReadmeEase"
        description="Discover the power of effortless README creation with the editor feature of ReadmeEase. Create professional-looking documentation with ease using its drag and drop interface and dynamic customization options, all built with Next.js and Tailwind CSS."
      />
      <Header />
      <main className="block w-full">
        <EditorPageContainer />
      </main>
      <Footer />
    </div>
  );
}
