import { Document,pdfjs,Page } from "react-pdf";
import { useParams } from "react-router";
import { useEffect, useState } from "react"
import { loadPdfFile } from "../api/loadPdfApi";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs`;
const DisplayPdf = () => {
    const {filename}=useParams<string>()
    const [pdfUrl, setPdfUrl] = useState<string|null>();
    const [totalPages,setTotalPages]=useState<number|null>()
    const [pageNum,setPageNum]=useState<number>(1)

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setTotalPages(numPages)
      }

    const handlePrevPage=()=>{
        if(pageNum>1){
            setPageNum((num)=>num-1)
        }
    }

    const handleNextPage=()=>{
        if(totalPages){
            if(pageNum<totalPages){
                setPageNum((num)=>num+1)
            }
        }
    }
    useEffect(()=>{
        if(filename){
            const fetchPdf=async ()=>{
                const rawUrl=await loadPdfFile(filename)
                setPdfUrl(rawUrl)
            }
            fetchPdf()
        }
    },[filename])
  return (
    <div className="flex flex-col items-center">
        {pdfUrl && (
          <>
            <div className='w-full flex flex-col justify-center items-center py-4'>
              
              <div className='mt-6 max-w-3xl'>
              {totalPages && (
                <div className='flex gap-4 mb-4 justify-between rounded px-2'>
                  <button onClick={handlePrevPage} className='bg-blue-500 px-3 rounded'>Prev</button>
                  <p className='text-center text-white py-2'>Page {pageNum} of {totalPages}</p>
                  <button onClick={handleNextPage} className='bg-blue-500 px-3 rounded'>next</button>
                </div>
              )}
              <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className="flex flex-col gap-3 text-center">
              <Page
                  pageNumber={pageNum}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="pdf-page w-full"
                />
              </Document>
              
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default DisplayPdf