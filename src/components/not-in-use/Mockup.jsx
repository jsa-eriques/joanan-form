// import Tilt from "react-parallax-tilt";
import React from "react";
import imgMockup from "../assets/mz/clientes/Mockup.png";
import circleBlur from "../assets/mz/clientes/Daco_86558.png";
// import { Link } from "react-router-dom";
// import a from "react-anchor-link-smooth-scroll";

function Mockup() {
  // const [scale] = useState(1.6);
  // const imgMockup = "https://i.imgur.com/6m0qian.png";
  // const circleBlur = "https://i.imgur.com/caaylO1.png";
  // const redirect = "https://megazap.com/ads/redirect/redirectnew";

  const handleClick = () => {
    // Substitua 'NomeDoEvento' pelo nome do evento que você deseja rastrear
    // window.fbq("init", process.env.REACT_APP_META_PIXEL_ID);
    // window.fbq('track', process.env.REACT_APP_TRACKER_EVENT_NAME);
    window.open('https://app.mzworkspace.com/api/links/mz/siteoficial');

  }

  return (
    <div class=" bg-sub-white dark:bg-sub-black -z-70 w-full md:h-[92vh] xl:h-[91vh] xl:py-32">
      <div class="overflow-hidden overflow-x-hidden -z-10">
        <img
          class="-z-10 absolute overflow-hidden opacity-50 right-3.5 w-3/4"
          src={circleBlur}
          alt="Javascript"
        />
      </div>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto z-10"
        id="contato"
      >
        <div className="grid md:grid-cols-2 items-center gap-28 ">
          <div class=" w-auto md:flex md:items-center order-1 z-10">
            {/* <Tilt scale={scale} transitionSpeed={2000}> */}
            <img
              class="z-30 bottom-0 right-0"
              src={imgMockup}
              alt="Javascript"
            />
            {/* </Tilt> */}
          </div>
          <div class="z-10 order-2 xl:py-16">
            <h1 class="text-blue-500 mm:text-center mm:text-3xl text-6x1 sm:text-3xl md:text-6x1 lg:text-6xl lg:leading-tight font-extrabold dark:text-blue-500 uppcase ">
              TELA DO GESTOR
            </h1>

            <div class="mt-8">
              <p class="mt-3  mm:text-center text-lg text-gray-950  dark:text-white left-to-right text-left mm:text-sm md:text-md lg:text-lg">
                Além do Chatbot e das funções de organização dos atendimentos,
                você como gestor terá acesso em tempo real a uma Dashboard
                completa com métricas, dados e relatórios das vendas e
                atendimentos realizados na sua empresa.
              </p>

              <h1 class="text-3xl font-bold text-gray-500 sm:text-3xl lg:text-3xl lg:leading-tight dark:text-white pt-4 text-left mm:text-center mm:text-sm md:text-md">
                EM UMA UNICA TELA DO SEU CELULAR OU DO SEU COMPUTADOR!
              </h1>
            </div>
            <div class="mt-7 grid gap-3 w-full sm:inline-flex uppercase font-extrabold">
              <button
                // to="/OnClick"
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                offset="100"
                class="font-extrabold left-to-right uppercase rad inline-flex justify-center items-center w-full gap-x-3 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-emerald-500 hover:to-green-500  border-transparent text-sm lg:text-base text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-20 dark:focus:ring-offset-gray-800"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mockup;
