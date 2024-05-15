import React, { useState } from "react";
// import a from "react-anchor-link-smooth-scroll";
import Themeswitcher from "./Themeswitcher";
import Tilt from "react-parallax-tilt";
import LogoMZ from "../assets/mz/logo/megazap.png";
// import { Link } from "react-router-dom";

function Header() {
  const [scale] = useState(3);
  const wppVerify = "https://i.imgur.com/IWme0wg.png";
  // const redirect = "https://megazap.com/ads/redirect/redirectnew";
  const clienteArea = "https://app.mzworkspace.com/";

  const handleClick = () => {
    // Substitua 'NomeDoEvento' pelo nome do evento que você deseja rastrear
    // window.fbq("init", process.env.REACT_APP_META_PIXEL_ID);
    // window.fbq('track', process.env.REACT_APP_TRACKER_EVENT_NAME);
    window.open('https://app.mzworkspace.com/api/links/mz/siteoficial');

  }

  return (
    <header class="sticky top-0 flex  flex-wrap md:flex-nowrap md:justify-start md:flex-col z-50 w-full text-sm pb-4 bg-white h-20 border-b-sub-blue dark:bg-slate-950 dark:border-sub-blue">
      <div className="flex container max-w-screen-xl px-3 mt-2 mb-2 mr-auto ml-auto justify-between">
        <div className="hidden md:flex items-center">
          <a
            class="mr-2 hs-dark-mode group flex items-center text-gray-700 hover:text-blue-800 font-medium dark:text-gray-400 dark:hover:text-blue-500"
            href="mailto:vendas@mzworkspace.com"
            rel="noreferrer"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 5.5L12 13L4 5.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-semibold text-base ml-1 dark:font-normal">
              contato@megazap.com
            </p>
          </a>
          <button
            // to="/OnClick"
            class=" mr-2 hs-dark-mode group flex items-center text-gray-700 hover:text-blue-800 font-medium dark:text-gray-400 dark:hover:text-blue-500"
            // href="https://wa.me/13997020038"
            onClick={handleClick}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
                fill="currentColor"
              />
              <path
                d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"
                fill="currentColor"
              />
            </svg>
            <p className="font-semibold text-base ml-2 dark:font-normal">
              (13) 4042-3489
            </p>
          </button>
          <p
            class=" mr-2 hs-dark-mode group flex items-center text-gray-700 hover:text-blue-800 font-medium dark:text-gray-400 dark:hover:text-blue-500"
            href="https://wa.me/13997020038"
            target="_blank"
            rel="noreferrer"
          >
            <img class="w-6 h-6" src={wppVerify} alt="Javascript" />
          </p>
        </div>
        <div className="flex justify-center sm:justify-end w-full md:w-fit ">
          <div class="hs-dropdown relative inline-flex [--placement:top-left] mr-3 z-50">
            <button
              id="footer-language-dropdown"
              type="button"
              class="hs-dropdown-toggle py-1 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-sub-blue dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <svg
                class="w-4 h-4 rounded-full"
                version="1.1"
                id="flag-icon-css-us"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <circle cx="256" cy="256" r="256" fill="#009541" />
                <path
                  fill="#FFF046"
                  d="M246.207,103.892L28.673,248.915c-5.241,3.495-5.241,11.196,0,14.69l217.534,145.022
	c5.93,3.954,13.656,3.954,19.586,0l217.534-145.022c5.241-3.495,5.241-11.196,0-14.69L265.793,103.892
	C259.863,99.938,252.137,99.938,246.207,103.892z"
                />
                <circle fill="#4B82E1" cx="256" cy="256" r="105.931" />
                <path
                  fill="#FFFFFF"
                  d="M165.515,201.127c-3.47,5.709-6.403,11.761-8.758,18.111c49.205-3.345,128.166,5.419,197.503,76.211
	c2.472-6.151,4.404-12.57,5.692-19.229C292.095,211.143,216.738,199.457,165.515,201.127z"
                />
              </svg>
              Português (pt-BR)
              <svg
                class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-950 dark:border dark:border-sub-blue dark:divide-gray-700"
              aria-labelledby="footer-language-dropdown"
            ></div>
          </div>
          <div className="flex">
            {/* <a
              class=" mr-2  hs-dark-mode group flex items-center text-blue-800 hover:text-violet-950 font-medium dark:text-white dark:hover:text-blue-500"
              href="https://www.linkedin.com/in/megazapbusiness?originalSubdomain=br"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 504.4 504.4"
              >
                <path
                  d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
			C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8
			c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6
			c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"
                />
              </svg>
            </a> */}
            <a
              class=" mr-2  hs-dark-mode group flex items-center text-blue-800 hover:text-violet-950  font-medium dark:text-white dark:hover:text-blue-500"
              href="https://www.instagram.com/mz.megazap/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-271 273 256 256"
              >
                <path
                  d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7
	v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7
	c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1
	C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2
	c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z"
                />
              </svg>
            </a>
          </div>
          <Themeswitcher />
        </div>
      </div>
      <nav
        class="max-w-screen-xl w-full mm:w-5/6 mm:py-0 bg-white border border-sub-blue rounded-[36px] mx-auto py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-slate-950 dark:border-sub-blue"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <a
            className="flex items-center"
            href="#root"
            aria-label="Megazap Business"
          >
            <Tilt scale={scale} transitionSpeed={2000}>
              <img class="w-16 h-auto" src={LogoMZ} alt="Javascript" />
            </Tilt>
          </a>
          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-sub-blue dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <a
              offset="140"
              className="font-semibold text-gray-500 hover:text-blue-700 md:py-6 dark:text-gray-400 dark:hover:text-gray-200"
              href="#cover"
              aria-current="page"
            >
              Home
            </a>
            <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
              <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                <button
                  // to="/OnClick"
                  onClick={handleClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5.0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                  </svg>
                </button>
                <div class="grow">
                  <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                    <span class="inline ml-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
                      Seja nosso Parceiro
                    </span>
                  </span>
                  How you get the most accurate and up-to-date data
                </div>

                <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                <button
                  // to="/OnClick"
                  onClick={handleClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                  <div class="grow">
                    <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
                      <span class="inline ml-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
                        Demonstração
                      </span>
                    </span>
                    Solicite uma demonstração e conheça o que podemos fazer pela
                    sua empresa.
                  </div>
                </button>
              </div>
            </div>
            {/* <a
              offset="80"
              className="font-semibold text-gray-500 hover:text-blue-700 md:py-6 dark:text-gray-400 dark:hover:text-gray-200"
              href="#projetos"
            >
              Parceiros
            </a> */}
            <button
              // to="/OnClick"
              onClick={handleClick}
              offset="100"
              className="font-semibold text-gray-500 hover:text-blue-700 md:py-6 dark:text-gray-400 dark:hover:text-gray-200"
              // href={redirect}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demonstração
            </button>
            <a
              offset="100"
              className="font-semibold text-gray-500 hover:text-blue-700 md:py-6 dark:text-gray-400 dark:hover:text-gray-200"
              href={clienteArea}
              target="_blank"
              rel="noopener noreferrer"
            >
              Área do Cliente
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
