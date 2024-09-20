import React, { useState } from 'react'
import { pdfContext } from '../Context/pdfcontext'
const ContextProvider = ({children}:{children:React.ReactNode}) => {
    const [uploadStatus, setUploadStatus] = useState<boolean>(false)
  return (
    <pdfContext.Provider value={{uploadStatus, setUploadStatus}}>
        {children}
    </pdfContext.Provider>
  )
}

export default ContextProvider