import DisplayPdf from "./Components/DisplayPdf"
import Layout from "./Layout/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Router>
          <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path="/pdfview/:filename" element={<DisplayPdf />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
