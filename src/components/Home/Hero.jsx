import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import backpain from '/spine Align back pain relief.jpg'
// import comfort from '/spine align comfort from home.jpg'
// import sleep from '/spine align sleep better.jpg'
function Hero() {
  const slides = [
    {
      url: "http://localhost:5173/backpain.jpg",
      // url: "https://matrix.redditspace.com/_matrix/media/r0/download/reddit.com/giv8c8zmyhcc1",
      title: "Dealing with back pain?",
      sub: "Worry no more.",
    },
    {
      url: "http://localhost:5173/comfort.jpg",
      // url: "https://matrix.redditspace.com/_matrix/media/r0/download/reddit.com/a3b82gcnyhcc1",
      title: "Better health & relief",
      sub: "From the convenience of your home.",
    },
    {
      url: "http://localhost:5173/sleepbetter.jpg",
      // url: "https://matrix.redditspace.com/_matrix/media/r0/download/reddit.com/vgdsc6vnyhcc1",
      title: "Sleep deeper, Sleep better",
      sub: "with vigen mats.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCurrentIndex(current => current < 2 ? current + 1 : 0)
    }, 5000);
  }, []);

  return (
    <div className="w-screen heightcalc  duration-200">
      <div
        className="w-full h-full transition ease-in-out delay-150  duration-200 bg-cover sm:bg-center flex-col"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className="h-full w-full bg-yellow-900/40  flex items-center justify-center flex-col">
          <h1 className="text-7xl sm:text-fuchsia-300 md:text-fuchsia-200 mt-40 mb-10 shadow-xl">
            {slides[currentIndex].title}
          </h1>
          <p className="text-4xl  sm:text-lime-200 md:text-lime-200 ">
            {slides[currentIndex].sub}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
