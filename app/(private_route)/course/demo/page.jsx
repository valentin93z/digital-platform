'use client';
import { useState, useEffect } from "react";
import { useElementWidth } from "@hooks/useElementWidth";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

import pdfFile from '@public/course_the_iStore.pdf';
import ArrowBackIOSIcon from "@components/icons/ArrowBackIOSIcon";
import ArrowForwardIOSIcon from "@components/icons/ArrowForwardIOSIcon";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const DemoCoursePage = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [ref, width] = useElementWidth();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      setPageNumber(prev => prev > 1 ? prev - 1 : prev);
    }
    if (e.keyCode === 39) {
      setPageNumber(prev => prev + 1);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  


  return (
    <div className="relative w-full font-rubik unselectable">
      <div className='max-w-[1730px] mx-auto' ref={ref}>
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={width}
          />
        </Document>
      </div>

      <button
        className="absolute left-[1.5%] top-[50%]"
        type="button"
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber <= 1}
      >
        <ArrowBackIOSIcon className={`${pageNumber <= 1 ? 'fill-gray-700' : 'fill-black dark:fill-white '}`} width='48px' height='48px' />
      </button>

      <button
        className="absolute right-[1.5%] top-[50%]"
        type="button"
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber >= numPages}
      >
        <ArrowForwardIOSIcon className={`${pageNumber >= numPages ? 'fill-gray-700' : 'fill-black dark:fill-white '}`} width='48px' height='48px' />
      </button>

    </div>
  )
}

export default DemoCoursePage;