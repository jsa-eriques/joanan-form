import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
// import videoBg from "../assets/vid/videoBg.mp4";
import imgSistema from "../assets/mz/images/IMG-SITE.png";
import circleBlur from "../assets/mz/clientes/Daco_86558.png";
import "../css/Cover.css";
import Clients from "./Clients";
// import { Link } from "react-router-dom";
// import Cookies from "./Cookies";

function Cover() {
  const [scale] = useState(1.2);
  // const circleBlur = "https://i.imgur.com/caaylO1.png";
  // const imgSistema = "https://i.imgur.com/9KxkfzJ.png";
  // const redirect = "https://megazap.com/ads/redirect/redirectnew";

  const handleClick = () => {
    // Substitua 'NomeDoEvento' pelo nome do evento que você deseja rastrear
    // window.fbq("init", process.env.REACT_APP_META_PIXEL_ID);
    // window.fbq('track', process.env.REACT_APP_TRACKER_EVENT_NAME);
    window.open('https://app.mzworkspace.com/api/links/mz/siteoficial');

  }

  return (
    <>
      {/* <video
        autoPlay
        loop
        muted
        className="absolute -z-10 w-full h-full object-cover opacity-70 brightness-50 md:h-[92vh]"
      >
        <source src={videoBg} type="video/mp4" />
      </video> */}
      <div
        class="overflow-hidden overflow-x-hidden flex justify-items-end"
        id="cover"
      >
        <img
          class="-z-10 absolute overflow-hidden opacity-50 right-3.5 top-0 w-3/4"
          src={circleBlur}
          alt="Javascript"
        />

        <img
          class="bottom-0 -left-72 -z-10 absolute overflow-hidden opacity-50 top-24 w-3/4"
          src={circleBlur}
          alt="Javascript"
        />
      </div>
      <div className="flex flex-row z-20 py-8 sm:py-2 mm:py-6 md:h-[91vh] md:py-0 mm:flex mx-auto overflow-hidden px-2 sm:px-6 lg:px-8 dark:bg-[#00000065] css-selector">
        <div class="max-w-[85rem] pt-20 mx-auto px-4 mm:px-0 sm:px-6 lg:px-8 mm:pt-0 mm:m-auto">
          <div class="grid md:grid-cols-2 mm:gap-0 gap-4 md:gap-6 xl:gap-10 md:items-center justify-items-end p-4 mm:p-0 rounded-xl">
            <div class="left-to-right mm:order-2 shadow-2x1 shadow-slate-900/50  dark:shadow-2x1 dark:shadow-slate-900 ">
              <h1 class="block text-3x1 z-20 font-bold text-black lg:leading-none dark:text-white left-to-right text-left mm:text-center mm:text-sm-3x1 md:text-md lg:text-lg">
                Plataforma de Atendimento e Gestão
              </h1>
              <span class="block text-left mm:text-center mm:text-3xl text-6x1 sm:text-3xl md:text-6x1 lg:text-6xl lg:leading-none text-blue-800 font-bold dark:text-blue-500 left-to-right ">
                {" "}
                MegaZap Business{" "}
              </span>
              <br />
              <p class="mt-3 text-gray-950  dark:text-white left-to-right text-left mm:text-center mm:text-sm md:text-md lg:text-lg">
                Atenda mais clientes no dia, aumentando a organização dos seus
                atendimentos, você terá ferramentas para um atendimento
                profissional completo.
              </p>
              <div class="mt-7 grid gap-3 w-full sm:inline-flex uppercase">
                <button
                  // to="/OnClick" // Defina a rota desejada aqui
                  onClick={handleClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="left-to-right mm:p-2 uppercase rad inline-flex justify-center w-full items-center gap-x-3 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-emerald-500 hover:to-green-500 border-transparent text-sm lg:text-base text-white font-extrabold rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-20 dark:focus:ring-offset-gray-800"
                >
                  AGENDAR DEMONSTRAÇÃO GRATUITA
                  <svg
                    class="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-6 lg:mt-12">
                <Clients />
              </div>
            </div>
            <div class=" w-auto pb-16 mm:order-1 mm:p-0 mm:m-auto md:order-2 sm:flex md:flex md:items-center right-to-left">
              <Tilt scale={scale} transitionSpeed={2000}>
                <img
                  class="z-30 bottom-0 right-0 mm:p-1"
                  src={imgSistema}
                  alt="Javascript"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
