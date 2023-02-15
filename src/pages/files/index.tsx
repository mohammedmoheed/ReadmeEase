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
        title="Files | ReadmeEase"
        description="The 'Files' page of ReadmeEase is where you can view, manage, and organize your files in a user-friendly way. With ReadmeEase, managing your files has never been easier. Keep your files organized and accessible with our intuitive and efficient file management system. Try ReadmeEase today and simplify your file management tasks!"
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
