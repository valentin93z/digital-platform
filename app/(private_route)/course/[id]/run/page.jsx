'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useElementWidth } from "@hooks/useElementWidth";
import { Document, Page, pdfjs } from "react-pdf";
import ArrowBackIOSIcon from "@components/icons/ArrowBackIOSIcon";
import ArrowForwardIOSIcon from "@components/icons/ArrowForwardIOSIcon";
import CircleLoader from "@components/loader/CircleLoader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const RunCoursePage = ({ params }) => {

  const router = useRouter();
  const { status, data } = useSession();
  const [ref, width] = useElementWidth();
  
  const [courseData, setCourseData] = useState({});
  const [startTime, setStartTime] = useState(0);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(`/api/course/${params.id}`);
      const data = await response.json();
      setCourseData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSave = async () => {
    try {
      const response = await fetch('/api/course-result', {
        method: 'POST',
        body: JSON.stringify({
          title: courseData.title,
          forPosition: courseData.forPosition,
          result: true,
          userId: String(data?.user?.id),
          startTime: startTime,
          finishTime: Date.now(),
        })
      })
      const courseResult = await response.json();
      router.push(`/course/${courseResult._id}/finish`);
    } catch (error) {
      console.log(error);
    }
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const handleIncrementPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  const handleDecrementPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  useEffect(() => {
    setStartTime(Date.now());
    fetchCourseData();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 37) {
        if (pageNumber <= 1) return;
        setPageNumber(prev => prev - 1);
      }
      if (e.keyCode === 39) {
        if (pageNumber >= numPages) return;
        setPageNumber(prev => prev + 1);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [numPages, pageNumber]);


  return (
    <div className="w-full h-screen font-rubik px-20 unselectable">
      <div className='relative max-w-[1730px] h-screen mx-auto' ref={ref}>
        <Document className='w-full h-screen' file={courseData.path && require(`@public/pdf/${courseData.path}`)} onLoadSuccess={onDocumentLoadSuccess} loading={<CircleLoader/>}>
          <Page
            className="w-full h-screen bg-neutral-100 dark:bg-neutral-900"
            loading={<CircleLoader/>}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={width}
          />
        </Document>
        <button
          className="absolute left-[-4%] top-[50%]"
          type="button"
          onClick={handleDecrementPage}
          disabled={pageNumber <= 1}
        >
          <ArrowBackIOSIcon className={`${pageNumber <= 1 ? 'fill-gray-700' : 'fill-black dark:fill-white '}`} width='48px' height='48px' />
        </button>

        <button
          className="absolute right-[-4%] top-[50%]"
          type="button"
          onClick={handleIncrementPage}
          disabled={pageNumber >= numPages}
        >
          <ArrowForwardIOSIcon className={`${pageNumber >= numPages ? 'fill-gray-700' : 'fill-black dark:fill-white '}`} width='48px' height='48px' />
        </button>
        {pageNumber === numPages &&
          <button
            className="absolute top-[65%] right-[33%] text-2xl text-white bg-violet-500 dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-700 rounded-md px-3 py-2"
            type="button"
            onClick={handleSave}
          >
            Завершить курс
          </button>}
      </div>
    </div>
  )
}

export default RunCoursePage;