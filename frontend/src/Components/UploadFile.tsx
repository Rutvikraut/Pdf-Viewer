import React, { useState } from "react"
import { uploadFile } from "../api/uploadApi"

const UploadFile = () => {
    const [pdfData,setPdfData]=useState<File|null>(null)
    const handleFileUpload=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            console.log(e.target.files)
            setPdfData(e.target.files[0])
        }
    }
    const handleUploadButton=async()=>{
        if(pdfData){
            await uploadFile(pdfData)
        }else{
            alert("Please Upload the file first")
        }
    }
  return (
    <div className="flex gap-3 justify-center mt-6">
        <div className="max-w-sm">
            <form>
                <label className="block">
                <span className="sr-only">Choose profile photo</span>
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
        <button className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={handleUploadButton}>
        Upload File
        </button>     
        </div>
    </div>
  )
}

export default UploadFile