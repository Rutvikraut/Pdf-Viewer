import UploadFile from '../Components/UploadFile'
import ViewPdfList from '../Components/ViewPdfList'

const Layout = () => {
  return (
    <div className='w-full h-screen flex justify-center flex-col md:flex-col'>
        <div className='flex w-full h-20 justify-center items-center pt-16 md:flex-col'>
            <UploadFile/>
        </div>
        <div className='flex flex-col w-full justify-center mt-16 overflow-y-auto'>
            <h1 className='text-white text-center mb-4'>Uploded Files</h1>
            <ViewPdfList/>
        </div>
    </div>
  )
}

export default Layout