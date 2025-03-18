import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './static/hero'
import HowToUseSection from './static/HowToUseSection'
import WhyToUseSection from './static/WhyToUseSection'
import DataTableSection from './static/DataTableSection'
import Footer from './components/Footer'
// import { Toaster } from './components/ui/sonner'
import { printConsole } from './utils/utils'
import { Toaster } from 'react-hot-toast'



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
