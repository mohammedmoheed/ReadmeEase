import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function PreviewContainer({ body }: { body: string }): JSX.Element {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="preview p-4 min-h-[calc(100vh-151px)] max-h-[calc(100vh-151px)] h-full w-full bg-[#0d1117] overflow-y-auto"
    >
      {body}
    </ReactMarkdown>
  );
}

export default PreviewContainer;
