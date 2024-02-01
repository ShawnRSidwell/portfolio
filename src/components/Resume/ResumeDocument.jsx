import { useEffect, useState } from "react";
import pdf from "../../assets/Shawn Sidwell Resume 2024.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeDocument() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Document
      file={pdf}
      className="flex justify-center border-2 border-black p-3 mt-5 mb-5"
    >
      <Page
        pageNumber={1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        customTextRenderer={false}
        scale={width > 786 ? 1 : 0.5}
        error="Failed to load resume"
      />
    </Document>
  );
}

export default ResumeDocument;
