'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useElementWidth } from "@hooks/useElementWidth";
import { Document, Page, pdfjs } from "react-pdf";
import Link from "next/link";
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
      if (courseData.attached_test.id) {
        router.push(`/main/tests/${courseData.attached_test.id}/preview`);
      } else {
        router.push(`/course/${courseResult._id}/finish`);
      }
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


  // file={courseData.path && require(`@public/pdf/${courseData.path}`)}

  return (
    <div className="w-full h-screen font-rubik px-20 unselectable">
      <div className='relative flex items-center max-w-[1600px] h-screen mx-auto' ref={ref}>
        <Document className='relative w-full flex-shrink-0' file={courseData.path && courseData.path.secure_url} onLoadSuccess={onDocumentLoadSuccess} loading={<CircleLoader/>}>
          <Page
            className="w-full h-full bg-neutral-100 dark:bg-neutral-900"
            loading={<CircleLoader/>}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={width}
          />
          <div className="absolute top-0 left-[-60px]">
            <svg
              className='block fill-neutral-700 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500'
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M105-215v-91h750v91H105Zm0-219v-91h750v91H105Zm0-220v-92h750v92H105Z"/>
            </svg>
          </div>
          <div className="absolute top-0 right-[-60px]">
            <Link href="/main/courses">
              <svg
                className='block fill-neutral-700 dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500'
                width="48"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h269q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T449-780H180v600h269q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T449-120H180Zm545-330H390q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T390-510h333l-81-81q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l133 133q9 9 9 21t-9 21L687-326q-8.8 9-20.9 8.5-12.1-.5-21.491-9.5Q636-336 636-348.5t9-21.5l80-80Z"/>
              </svg>
            </Link>
          </div>
        </Document>
        <button
          className="absolute left-[-60px] top-[50%]"
          type="button"
          onClick={handleDecrementPage}
          disabled={pageNumber <= 1}
        >
          <ArrowBackIOSIcon className={`${pageNumber <= 1 ? 'fill-gray-700' : 'fill-black dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500'}`} width='48px' height='48px' />
        </button>

        <button
          className="absolute right-[-60px] top-[50%]"
          type="button"
          onClick={handleIncrementPage}
          disabled={pageNumber >= numPages}
        >
          <ArrowForwardIOSIcon className={`${pageNumber >= numPages ? 'fill-gray-700' : 'fill-black dark:fill-white hover:fill-violet-500 dark:hover:fill-violet-500'}`} width='48px' height='48px' />
        </button>
        {pageNumber === numPages &&
          <button
            className="absolute top-[65%] right-[33%] text-2xl text-white bg-violet-500 dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-700 rounded-md px-3 py-2"
            type="button"
            onClick={handleSave}
          >
            {courseData.attached_test.id ? 'Перейти к тесту' : 'Завершить курс'}
          </button>}
      </div>
    </div>
  )
}

export default RunCoursePage;