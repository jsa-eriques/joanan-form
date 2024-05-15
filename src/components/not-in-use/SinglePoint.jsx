import React from "react";
import imgApp9 from "../assets/mz/criativo-vendas/SISTEMA-INTEGRACOES.png";
// import a from "react-anchor-link-smooth-scroll";
import "../css/Cover.css";

function SinglePoint() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto left-to-right">
      <div className="test1001 text-center">
        <h1 class="h11 text-3x1 font-bold text-gray-800 sm:text-3xl lg:text-3xl lg:leading-none dark:text-white">
          {" "}
          <span class="text-3x1 sm:text-3xl lg:text-3xl lg:leading-nonetext-blue-800 font-bold dark:text-white">
            {" "}
            <span>NÃO</span> <span>PERCA</span> <span>VENDAS</span>{" "}
          </span>
          !<br />
        </h1>
        <h1 class="h11 text-2x1 font-bold text-gray-800 sm:text-2xl lg:text-2xl lg:leading-none dark:text-white">
          RECEBA SEUS{" "}
          <span class="text-2x1 sm:text-2xl lg:text-2xl lg:leading-none text-blue-800 font-bold dark:text-blue-500 border-t">
            {" "}
            CLIENTES{" "}
          </span>
          DO
          <br />
          <br />
        </h1>
        <h1 class="h11 text-2x1 font-bold uppercase text-black sm:text-2xl lg:text-2xl lg:leading-none dark:text-white">
          <span>Whatsapp</span> &nbsp;
          <span>Facebook</span> &nbsp;
          <span>Telegram</span> &nbsp;
          <span>Google Business</span> &nbsp;
          <span>Site</span> &nbsp;
          <span>E-mail</span> &nbsp;
          <br />
          <span class="text-2x1 sm:text-2xl lg:text-2xl lg:leading-none text-gray-800 font-bold dark:text-white">
            Em Uma Única Tela do Seu Celular ou do Computador!
          </span>
        </h1>
      </div>

      <div class="mt-12 md:mt-16 flex justify-center align-middle">
        <div class="max-w-screen-lg ">
          <figure class=" bottom-0 left-0 z-[2] max-w-max h-auto">
            <div class="bg-gray-800 rounded-b-lg"></div>
            <img
              class="max-w-full h-auto rounded-b-lg"
              src={imgApp9}
              alt="App Screenshot"
            />
          </figure>
        </div>
      </div>
      <div class="mt-7 w-full justify-center flex align-middle">
        <a
          offset="100"
          class="uppercase rad inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-emerald-500 hover:to-green-500 border border-transparent text-sm lg:text-base text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-32 dark:focus:ring-offset-gray-800"
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
  );
}

export default SinglePoint;
