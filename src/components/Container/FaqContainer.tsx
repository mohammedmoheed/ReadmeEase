interface FaqTypes {
  id: string;
  title: string;
  body: string;
}

function FaqContainer(): JSX.Element {
  const faqs: Array<FaqTypes> = [
    {
      id: "faq-1",
      title: "What is ReadmeEase?",
      body: "<span class='text-white'>ReadmeEase</span> is a tool that makes it easy to create <span class='text-white'>professional-looking</span> README files for your GitHub repositories. It provides a simple, user-friendly interface for creating and editing README files.",
    },
    {
      id: "faq-2",
      title: "Do I need to have coding experience to use ReadmeEase?",
      body: "<span class='text-white'>No</span>, you do not need any coding experience to use ReadmeEase. The tool is designed to be user-friendly and accessible to anyone, regardless of their technical background.",
    },
    {
      id: "faq-3",
      title: "How much does ReadmeEase cost?",
      body: "ReadmeEase is completely <span class='text-white'> free to use</span>.",
    },
  ];
  return (
    <div className="mx-auto py-10 max-w-3xl w-full">
      <div className="w-full">
        <h3 className="text-3xl text-left text-white font-medium tracking-wide">
          FAQ&#39;s
        </h3>
      </div>
      <div className="mt-8 flex flex-col items-start justify-start gap-y-4 w-full h-auto">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="relative flex flex-col items-start justify-center w-full bg-[#1a1a1a] rounded-lg overflow-hidden"
          >
            <input
              type="checkbox"
              id={faq.id}
              className="peer group absolute opacity-0 -z-10"
            />
            <label
              htmlFor={faq.id}
              className="relative flex items-center justify-between p-4 w-full bg-transparent text-lg text-left text-[#f1f1f1] font-medium tracking-wide cursor-pointer rounded-lg border border-solid border-transparent peer-focus-visible:border-[#f3f3f3]"
            >
              <span className="absolute top-4 left-2.5">Q.</span>
              <span className="pl-5">{faq.title}</span>
            </label>
            <div className="hidden peer-checked:block px-4 w-full">
              <div className="w-full border-b border-solid border-[#f1f1f1]"></div>
            </div>
            <div className="relative w-full bg-transparent max-h-0 peer-checked:max-h-40 transition-[max-height] h-auto duration-150 ease-linear overflow-y-hidden">
              <span className="absolute left-3 top-4 text-base">A.</span>
              <p
                dangerouslySetInnerHTML={{ __html: faq.body }}
                className="py-4 pl-10 pr-4 text-base text-left text-[#787878] font-medium tracking-wide"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqContainer;
