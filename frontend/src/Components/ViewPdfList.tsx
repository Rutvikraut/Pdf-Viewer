import { useEffect, useState } from 'react'
import {getPdfList} from '../api/pdfListApi'
import {Link} from 'react-router-dom'

const ViewPdfList = () => {
    const [pdfList,setPdfList]=useState<string[]>([])
    console.log(pdfList)
    useEffect(()=>{
        const fetchData=async ()=>{
            const dataList:string[]=await getPdfList()
            setPdfList(dataList)
        }
        fetchData()
    },[getPdfList])
  return (
    <div className='flex justify-center gap-4 overflow-y-auto'>
        {pdfList.length > 0 ? (
                <ul>
                    {pdfList.map((pdf, _) => (
                        <div
                        role="button"
                        className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 mb-4 justify-between text-ellipsis overflow-hidden ...">
                        {pdf}
                        <Link to={`/pdfview/${pdf}`}
                        className="rounded-md bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        >
                        View Pdf
                        </Link>
                      </div>
                    ))}
                </ul>
            ) : (
                <p>No PDFs available</p>
            )}
    </div>
  )
}

export default ViewPdfList