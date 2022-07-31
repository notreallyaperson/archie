import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Header13 } from "./components/header-13";
import { About } from "./components/about";
import { About13 } from "./components/about-13";
import { Services } from "./components/services";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return <>
    <Header data={landingPageData.Header} />
    <About data={landingPageData.About} />
  </>
}

const ConcertPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return <>
    <Header13 data={landingPageData.Header} />
    <About13 data={landingPageData.About} />
  </>
}


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ConcertPage />} />
      </Routes>
      <Services data={landingPageData.Services} />
    </BrowserRouter>
  );
};

export default App;
