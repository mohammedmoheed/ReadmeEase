import PageHeader from "@/components/Page/Header";
import { Footer, Header } from "@/components/Banner";
import { Barlow_Condensed, Poppins } from "@next/font/google";
import Link from "next/link";

const barlowCondensed = Barlow_Condensed({
  display: "swap",
  weight: ["500", "600"],
  preload: true,
  style: "normal",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  display: "swap",
});

export default function Home(): JSX.Element {
  return (
    <div className={poppins.className}>
      <PageHeader title="ReadmeEase: Effortless README Creation with Drag and Drop" />
      <Header />
      <main className="relative w-full">
        <div className="mx-auto max-w-[1440px] w-full">
          <div className="px-6 py-4 w-full">
            <div className="inline-block py-10 w-full">
              <div className="py-10 flex flex-col items-center justify-center w-full h-auto">
                <div className="flex py-5 flex-col items-center justify-between mx-auto max-w-2xl w-full">
                  <h2 className="text-4xl text-center text-[#b7b6c0] font-medium tracking-wider">
                    <span className={barlowCondensed.className}>
                      Streamline your documentation process with
                    </span>
                  </h2>
                  <h3 className="mt-2 mb-4 text-6xl text-center text-[#e56643] font-semibold tracking-wider">
                    <span className={barlowCondensed.className}>
                      ReadmeEase
                    </span>
                  </h3>
                  <p className="mt-4 text-base text-center text-[#787878] font-medium tracking-wide">
                    Effortlessly manage project READMEs with{" "}
                    <span className="px-1.5 py-0.5 text-[#f1f1f1] bg-[#6e768166] rounded">
                      ReadmeEase&#39;s
                    </span>{" "}
                    simple and intuitive editor. Create custom sections and
                    personalize your readme in no time.
                  </p>
                  <Link
                    href="/files"
                    className="inline-block mt-4 px-4 py-2 w-auto text-base text-center text-[#c9d1d9] hover:text-white font-medium tracking-wide bg-[#af3d1e] hover:bg-[#c54623] rounded"
                    aria-label="Go to 'files' page"
                    title="Go to 'Files' page"
                  >
                    Start your journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
