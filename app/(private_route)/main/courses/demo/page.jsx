'use client';
import { useState } from "react";
import { useElementWidth } from "@hooks/useElementWidth";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

import pdfFile from '@public/course_the_iStore.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const DemoCoursePage = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [ref, width] = useElementWidth();

  const onDocumentLoadSuccess = ({ nextNumPages }) => {
    setNumPages(nextNumPages);
  }


  return (
    <div className="w-full font-rubik px-5 md:px-20 unselectable">
      <div className='max-w-[1400px] mx-auto' ref={ref}>
        <Document file={pdfFile}>
          <Page
            pageNumber={pageNumber}
            onLoadSuccess={onDocumentLoadSuccess}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={width}
          />
        </Document>
      </div>
      <div className="max-w-[1400px] flex justify-end gap-5 mx-auto mt-5">
        <button
          className="text-white dark:text-white bg-violet-500 dark:bg-violet-500 rounded-md px-2 py-1"
          type="button"
          onClick={() => setPageNumber((prev) => prev - 1)}
        >
          Назад
        </button>
        <button
          className="text-white dark:text-white bg-violet-500 dark:bg-violet-500 rounded-md px-2 py-1"
          type="button"
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  )
}

export default DemoCoursePage;