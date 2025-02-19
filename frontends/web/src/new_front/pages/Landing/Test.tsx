import { motion } from "framer-motion";
import { fadeIn } from "new_front/utils/helpers/motion";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { responsiveCarouselCompanies } from "../../utils/constants";
import "react-multi-carousel/lib/styles.css";

const Test = () => {
  const companies = [
    {
      name: "Stanford University",
      logo: "https://logodownload.org/wp-content/uploads/2021/04/stanford-university-logo-2.png",
    },
    {
      name: "Harvard University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    },
    {
      name: "Google",
      logo: "https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png",
    },
    {
      name: "Coactive",
      logo: "https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/614/500/original/coactive-logo-rgb-2400px.png?1639152613",
    },
    {
      name: "ETH Zurich",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ETH_Z%C3%BCrich_Logo_black.svg/2560px-ETH_Z%C3%BCrich_Logo_black.svg.png",
    },
    {
      name: "Cohere",
      logo: "https://cdn.sanity.io/images/1b1xyaip/production/f5e234e86f931398d5e05f4cdeb8d6dfcd182c7a-102x18.svg",
    },
    {
      name: "Oxford University",
      logo: "https://e7.pngegg.com/pngimages/156/150/png-clipart-university-of-oxford-logo-college-others-blue-text.png",
    },
  ];
  return (
    <>
      <section id="hero" className="container mt-20">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <motion.div
              className="mt-12 lg:mt-0"
              variants={fadeIn("right", "tween", 0.5, 0.5)}
            >
              <h2 className="font-sans text-5xl font-bold  text-[#344854]">
                Challenging the Limits of Benchmarking AI
              </h2>
              <p className="mb-16 text-xl mt-4">
                Collaborate with fellow AI enthusiasts and experts, and work
                together to create new and innovative solutions to the most
                pressing challenges facing the field of AI today.
              </p>
              <Button
                as={Link}
                className="mr-2 border-0 font-semibold text-xl bg-primary-color  p-3 rounded-full"
                to="/tasks"
              >
                Challenges
              </Button>
              <Button
                as={Link}
                className="mr-2 border-0 font-medium light-gray-bg text-xl p-3"
                to="/account#tasks"
              >
                Create your own task
              </Button>
              <div className="flex flex-row w-full gap-16 mt-4">
                <div className="mb-12 md:mb-0">
                  <h2 className="text-3xl font-bold display-5 text-[#344854] mb-2">
                    20+
                  </h2>
                  <h5 className="text-lg font-medium mb-2">Challenges</h5>
                </div>
                <div className="mb-12 md:mb-0">
                  <h2 className="text-3xl font-bold display-5 text-[#344854] mb-2">
                    50+
                  </h2>
                  <h5 className="text-lg font-medium mb-2">Models</h5>
                </div>
                <div className="mb-12 md:mb-0">
                  <h2 className="text-3xl font-bold display-5 text-[#344854] mb-2">
                    50+
                  </h2>
                  <h5 className="text-lg font-medium mb-4">Participants</h5>
                </div>
              </div>
            </motion.div>
            <div className="mb-12 lg:mb-0">
              {/* <img src="https://i.postimg.cc/90DyYQGD/collage-1.png" alt="" /> */}
              {/* <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video overflow-hidden border-hidden rounded-2xl shadow-lg border-transparent	border-0	"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full "
                  src="https://models-dynalab.s3.eu-west-3.amazonaws.com/assets/explainer.mp4"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div> */}
              <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video overflow-hidden rounded-md shadow-lg"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full "
                  src="https://s10.gifyu.com/images/ezgif.com-video-to-gif23674cd2ee6b09d5.gif"
                  allow="accelerometer; clipboard-write;  encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/text"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </section>
      <section id="trusted by divide-y">
        <div className=" mt-16 container">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Trusted by
          </h2>
          <div className="grid grid-cols-1 pt-16">
            <Carousel
              responsive={responsiveCarouselCompanies}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              className="w-full mx-auto"
              arrows={false}
            >
              {companies.map((company) => (
                <div className="flex justify-center px-2 bg-white">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-48 "
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section id="communities" className="mt-16">
        <div className="inset-0 flex items-center">
          <div className="w-full border-b border-gray-300"></div>
        </div>
        <div className="container max-w-5xl mx-auto mt-4">
          <motion.h2
            className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
            variants={fadeIn("right", "tween", 0.5, 0.5)}
          >
            Communities
          </motion.h2>

          <div className="flex flex-wrap my-12">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Dynamical adversarial
              </h3>
              <p className="text-gray-600 mb-8">
                Dynabench is a platform for dynamic data collection and
                benchmarking. Static benchmarks have many issues. Dynabench
                offers a more accurate and sustainable way for evaluating
                progress in AI.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video overflow-hidden rounded-md shadow-lg"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full "
                  src="https://models-dynalab.s3.eu-west-3.amazonaws.com/assets/explainer.mp4"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row my-12">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video overflow-hidden rounded-md shadow-lg"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full "
                  src="https://www.youtube.com/embed/zihoyz0u_cs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Dataperf
                </h3>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-12">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Dynamical adversarial
              </h3>
              <p className="text-gray-600 mb-8">
                Dynabench is a platform for dynamic data collection and
                benchmarking. Static benchmarks have many issues. Dynabench
                offers a more accurate and sustainable way for evaluating
                progress in AI.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video overflow-hidden rounded-md shadow-lg"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full "
                  src="https://www.youtube.com/embed/zihoyz0u_cs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
