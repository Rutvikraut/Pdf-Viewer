import React, { useState } from "react"
import { uploadFile } from "../api/uploadApi"
import { usePdfContext } from "../Context/pdfcontext"

const UploadFile = () => {
    const {uploadStatus,setUploadStatus}=usePdfContext()
    const [pdfData,setPdfData]=useState<File|null>(null)
    const handleFileUpload=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            if(e.target.files[0].type=="application/pdf"){
                if (e.target.files[0].size < 4 * 1024 * 1024) {
                    setPdfData((e.target.files[0]))
                }else{
                    alert("File size exceeds 4 MB. Please upload a smaller file.");
                    e.target.value=""
                }
            }else{
                alert("Please Upload Correct File")
                e.target.value=""
            }
            
        }
    }
    const handleUploadButton=async()=>{
        if(pdfData){
            await uploadFile(pdfData)
            setUploadStatus(!uploadStatus)
            console.log()
        }else{
            alert("Please Upload the file first")
        }
    }
  return (
    <div className="flex gap-4 flex-col items-center justify-center mt-6 md:flex-row fixed">
        <div className="max-w-sm w-full">
            <form>
                <label className="block">
                <input type="file" className="block w-full text-sm text-gray-500
                    file:me-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-600 file:text-white
                    hover:file:bg-blue-700
                    file:disabled:opacity-50 file:disabled:pointer-events-none"
                    onChange={handleFileUpload}
                    />
                </label>
            </form>
        </div>
        <div className="flex justify-center">
        <button className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 text-nowrap" type="button" onClick={handleUploadButton}>
        Upload File
        </button>     
        </div>
    </div>
  )
}

export default UploadFile