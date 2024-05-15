import React, { useContext } from "react";
import GlobalContext from "../../context/GloblalContext";
import darkteste from "../assets/mz/logo/megazap-hover.svg";
import teste from "../assets/mz/logo/megazap-hover.svg";
// import a from "react-anchor-link-smooth-scroll";

function Sobre() {
  const theme = useContext(GlobalContext);
  console.log(theme, "teste de context api 😁");

  return (
    <>
      <div class="relative">
        <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-5 mx-auto">
          <div class="lg:grid lg:grid-cols-6 lg:gap-8">
            <div
              class="hidden lg:block lg:col-span-2 overflow-auto w-3/4"
              onClick={() => {
                theme.toggleTheme();
              }}
            >
              {theme.theme === "dark" ? (
                <img className="rounded-xl" src={darkteste} alt="none" />
              ) : (
                <img className="rounded-xl" src={teste} alt="none" />
              )}
            </div>

            <div class="lg:col-span-4" id="sobre">
              <blockquote>
                <p class=" text-2xl font-medium text-gray-800 lg:leading-normal dark:text-gray-200 pt-10">
                  Em uma única tela, você responde às mensagens que recebe dos
                  seus clientes e oferece a eles toda a comodidade de se
                  comunicarem de onde, como e quando quiserem.
                  <br /> <br />
                  Aumente suas vendas, tenha uma boa reputação e faça seu
                  negócio crescer, comece agora mesmo a ter relacionamentos mais
                  duradouros com seus clientes e mais eficiência no seu negócio.
                </p>
              </blockquote>
              <div class="mt-10 w-full justify-center flex align-middle pb-10">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
