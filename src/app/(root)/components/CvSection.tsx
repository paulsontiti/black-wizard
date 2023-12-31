"use client";

import { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import { IoIosCloseCircleOutline } from "react-icons/io";
//configure
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const cvUrl = "/assets/cv.pdf";
export default function CvSection({
  setShowCv,
}: {
  setShowCv: (value: boolean) => void;
}) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div
      className="text-white overflow-scroll
    mb-4 mt-4 max-h-96 w-[340px] sm:w-[600px] 
"
    >
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center justify-between">
          {numPages && numPages <= pageNumber && (
            <MdOutlineArrowBackIos
              className="w-6 h-6"
              onClick={() => setPageNumber((pgNum) => --pgNum)}
            />
          )}
          <p className="text-center mr-4 ml-4">
            Page {pageNumber} of {numPages}
          </p>
          {numPages && numPages > pageNumber && (
            <MdOutlineArrowForwardIos
              className="w-6 h-6"
              onClick={() => setPageNumber((pgNum) => ++pgNum)}
            />
          )}
        </div>
        <div>
          <IoIosCloseCircleOutline
            className="w-8 h-8"
            onClick={() => setShowCv(false)}
          />
        </div>
      </div>

      <div className="mt-4 ">
        <Document file={cvUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}
