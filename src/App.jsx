import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './static/hero'
import { Button } from './components/ui/Button'
import SearchBar from './components/SearchBar'
import HowToUseSection from './static/HowToUseSection'
import WhyToUseSection from './static/WhyToUseSection'
import DataTableSection from './static/DataTableSection'
import Footer from './components/Footer'
// import { Toaster } from './components/ui/sonner'
import { VideoDataContext } from './context/VideoDataContext'
import { VideoData } from './Entity/VideoData'
import { printConsole } from './utils/utils'
import { FaVideo } from 'react-icons/fa6'
import { MdAudiotrack } from 'react-icons/md'
import { Users } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import BottomDrawer from './components/BottomDrawer'


function App() {

  const [count, setCount] = useState(0)
  const [videoData, setVideoData] = useState(null);
  const [audioFormats, setAudioFormats] = useState([]);
  const [videoFormats, setVideoFormats] = useState([]);
  const [videoFormatId, setVideoFormatId] = useState("");
  const [audioFormatId, setAudioFormatId] = useState("");
  const [formatLoading, setFormatLoading] = useState(false);

  const [mssg, setMssg] = useState("");
  const [open, setOpen] = useState(false);

  const updateVideoData = (videoData) => {
    console.log("on APP Update Function")
    console.log(videoData);
    setVideoData(videoData);
    console.log(this.videoData);
  };

  useEffect(() => {
    if (videoData?.formats) {
      setAudioFormats(videoData?.formats.filter(format => format.resolution === "audio only"));
      setVideoFormats(videoData?.formats.filter(format => format.resolution != "audio only"));
    }
  }, [videoData]);

  useEffect(() => {
    if (videoFormatId) {
      printConsole(videoFormatId)
    }

    if (audioFormatId)
      printConsole(audioFormatId)

  }, [videoFormatId, audioFormatId]);


  useEffect(() => {
    printConsole(open)
  }, [open])


  return (
    <div className='p-1'>
      <Header setOpen={setOpen}></Header>
      <Hero videoData={videoData} setVideoData={setVideoData} setFormatLoading={setFormatLoading}></Hero>
      <DataTableSection videoData={videoData} formats={videoFormats} setFormatId={setVideoFormatId} formatLoading={formatLoading}></DataTableSection>
      <HowToUseSection> </HowToUseSection>
      <WhyToUseSection> </WhyToUseSection>
      // <Toaster></Toaster>
      {/* <Toaster></Toaster> */}
      {/* <BottomDrawer setOpen={setOpen} open={open}></BottomDrawer> */}
      <Footer></Footer>

    </div>

  )
}

export default App
