import { createContext,useContext } from "react";

interface PdfContextType {
    uploadStatus: boolean
    setUploadStatus: (uploadStatus: boolean) => void
}

export const pdfContext=createContext<PdfContextType>({
    uploadStatus: false,
    setUploadStatus: () => void {},
})

export const usePdfContext=()=>useContext(pdfContext)