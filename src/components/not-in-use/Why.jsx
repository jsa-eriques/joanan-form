// import Tilt from "react-parallax-tilt";
import React from "react";
import imgSistema from "../assets/mz/criativo-vendas/IMAGEM-BANNER.png";
import circleBlur from "../assets/mz/clientes/Daco_86558.png";
// import { Link } from "react-router-dom";

function Why() {
  // const [scale] = useState(1.6);
  // const redirect = "https://megazap.com/ads/redirect/redirectnew";

  const handleClick = () => {
    // Substitua 'NomeDoEvento' pelo nome do evento que você deseja rastrear
    // window.fbq("init", process.env.REACT_APP_META_PIXEL_ID);
    // window.fbq('track', process.env.REACT_APP_TRACKER_EVENT_NAME);
    window.open('https://app.mzworkspace.com/api/links/mz/siteoficial');

  }
  return (
    <>
      <div class="overflow-hidden overflow-x-hidden">
        <img
          class="-z-10 absolute overflow-hidden opacity-50 left-3.5 w-3/4"
          src={circleBlur}
          alt="Javascript"
        />
      </div>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto md:h-[92vh] xl:h-[91vh] "
        id="contato"
      >
        <div className="grid md:grid-cols-2 mm:gap-3 items-center gap-28 md:py-24">
          <div class=" w-auto md:flex md:items-center">
            {/* <Tilt scale={scale} transitionSpeed={2000}> */}
            <img
              class="z-30 bottom-0 right-0 mm:mb-0 sm:p-4"
              src={imgSistema}
              alt="Javascript"
            />
            {/* </Tilt> */}
          </div>
          <div class="uppercase mm:text-center">
            <h1 class=" text-gray-800 text-4x1 sm:text-3xl md:text-4x1 lg:text-4xl mm:text-2xl lg:leading-tight dark:text-white mm:text-center">
              <span class="block text-left text-4x1 xx:text-4x1 lg:leading-none text-blue-800 font-bold dark:text-blue-500 left-to-right mm:text-center mm:text-3xl text-5x1 sm:text-3xl md:text-5x1 lg:text-5xl">
                {" "}
                NÃO PERCA VENDAS!{" "}
              </span>
              RECEBA SEUS CLIENTES DO:
            </h1>

            <div class="mt-8 flex justify-center flex-col items-center">
              <ul class="mt-2 space-y-2 text-3x1 sm:text-2xl md:text-1xl lg:text-2xl mm:text-center flex justify-center flex-col items-center">
                <li class="flex space-x-3">
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2 ">
                    WHATSAPP
                  </span>
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2 ">
                    INSTAGRAM
                  </span>
                </li>
                <li class="flex space-x-3">
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2 ">
                    TELEGRAM
                  </span>
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2">
                    GOOGLE-BUSINESS
                  </span>
                </li>
                <li class="flex space-x-3">
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2 ">
                    FACEBOOK
                  </span>
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2 ">
                    SITE
                  </span>
                  <span class="text-blue-500 dark:text-blue-500 border-2 font-bold border-blue-500 rounded-full p-2 ">
                    E-MAIl
                  </span>
                </li>
              </ul>

              <h1 class="mm:text-sm sm:text-sm md:text-md font-bold text-gray-500 lg:leading-tight mm:pt-4 mm:py-2 m-auto dark:text-white pt-4 text-left mm:text-center">
                EM UMA UNICA TELA DO SEU CELULAR OU DO SEU COMPUTADOR!
              </h1>
            </div>
            <div class="mt-7 grid gap-3 mm:gap-0 w-full sm:inline-flex uppercase font-extrabold items-center justify-center">
              <button
                // to="/OnClick"
                onClick={handleClick}
                offset="100"
                class="mm:p-2 mb-10 font-extrabold left-to-right uppercase w-full rad inline-flex justify-center items-center gap-x-3 gap-x- text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-emerald-500 hover:to-green-500  border-transparent text-sm lg:text-base text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-20 dark:focus:ring-offset-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                ENTRE EM CONTATO CONOSCO
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
    </>
  );
}

export default Why;
