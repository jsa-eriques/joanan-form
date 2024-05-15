// import Tilt from "react-parallax-tilt";
import React from "react";
// import imgMockup from "../assets/mz/clientes/Mockup.png";
import circleBlur from "../assets/mz/clientes/Daco_86558.png";

function Video() {
  // const [scale] = useState(1.6);
  const videoUrl =
    "https://www.youtube.com/embed/fGXmvFXFjPk?si=jFjlXgh3ziRqeIOr&amp;controls=0";

  return (
    <div class=" bg-sub-white dark:bg-sub-black -z-70 w-full">
      <div class="overflow-hidden overflow-x-hidden">
        <img
          class="-z-60 absolute overflow-hidden opacity-50 right-3.5 w-3/4 h-[100vh]"
          src={circleBlur}
          alt="Javascript"
        />
      </div>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto z-10"
        id="contato"
      >
        <div className="grid md:grid-cols-2 items-center gap-28">
          <div class=" w-auto h-[88vh] hidden md:flex md:items-center z-10">
            <video
              class="z-30 bottom-0 right-0"
              // src={imgVideo}
              alt="Javascript"
            >
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="MegaZap"
                frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              {/* <source
                src={videoUrl}
                type="video/mp4"
                allowfullscreen
                title="MegaZap"
                frameborder="0"
                width="560"
                height="315"
              /> */}
            </video>
          </div>
          <div class="uppercase z-10">
            <h1 class="text-4xl text-blue-500 sm:text-4xl lg:text-4xl lg:leading-tight font-extrabold dark:text-blue-500">
              TELA DO GESTOR
            </h1>

            <div class="mt-8">
              <p class="mt-3 text-lg text-gray-950  dark:text-white left-to-right text-left">
                Além do Chatbot e das funções de organização dos atendimentos,
                você como gestor terá acesso em tempo real a uma Dashboard
                completa com métricas, dados e relatórios das vendas e
                atendimentos realizados na sua empresa.
              </p>

              <h1 class="text-3xl font-bold text-gray-500 sm:text-3xl lg:text-3xl lg:leading-tight dark:text-white pt-4 text-left">
                EM UMA UNICA TELA DO SEU CELULAR OU DO SEU COMPUTADOR!
              </h1>
            </div>
            <div class="mt-7 grid gap-3 w-full sm:inline-flex uppercase font-extrabold">
              <a
                offset="100"
                class="font-extrabold left-to-right uppercase rad inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-emerald-500 hover:to-green-500  border-transparent text-sm lg:text-base text-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-20 dark:focus:ring-offset-gray-800"
                href="#projetos"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
