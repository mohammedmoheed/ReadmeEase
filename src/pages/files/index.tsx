import PageHeader from "@/components/Page/Header";
import { Poppins } from "@next/font/google";
import { CreateReadmeFileButton } from "@/components/Button";
import { PreviewFilesContainer } from "@/components/Container";
import { Header, Footer } from "@/components/Banner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
});

export default function FilePage() {
  return (
    <div className={poppins.className}>
      <PageHeader
        title="Editor | ReadmeEase"
        description="Discover the power of effortless README creation with the editor feature of ReadmeEase. Create professional-looking documentation with ease using its drag and drop interface and dynamic customization options, all built with Next.js and Tailwind CSS."
      />
      <Header />
      <main className="relative w-full h-auto">
        <div className="mx-auto py-10 px-6 max-w-[1440px] w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <CreateReadmeFileButton />
          </div>
          <div className="py-10 w-full">
            <PreviewFilesContainer />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
