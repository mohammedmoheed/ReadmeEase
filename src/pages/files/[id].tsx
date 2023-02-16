import PageHeader from "@/components/Page/Header";
import { Poppins } from "@next/font/google";
import { Header, Footer } from "@/components/Banner";
import { useRouter } from "next/router";
import PreviewPage from "@/components/Skeleton/PreviewPage";
import { PreviewFile } from "@/components/Container";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
});

export default function PreviewFileByIdPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={poppins.className}>
      <PageHeader title={`${id} | ReadmeEase`} />
      <Header />
      <main className="block w-full">
        {!id ? <PreviewPage /> : <PreviewFile id={id} />}
      </main>
      <Footer />
    </div>
  );
}
