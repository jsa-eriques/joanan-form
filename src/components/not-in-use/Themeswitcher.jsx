import React, { useContext } from "react";
import GlobalContext from "../../context/GloblalContext";

function Themeswitcher() {
  const shirt = useContext(GlobalContext);

  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme })
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });

  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes = document.querySelectorAll(
      "[data-hs-theme-switch]"
    );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value"),
          true,
          $item
        )
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });
  return (
    <div className="flex items-center">
      <a
        class="hs-dark-mode-active:hidden hs-dark-mode group flex items-center text-violet-950 hover:text-purple-800 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        href="#!"
        data-hs-theme-click-value="dark"
        onClick={() => {
          shirt.toggleTheme();
        }}
      >
        <svg
          class="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" />
          <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" />
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        </svg>
      </a>
      <a
        class="hs-dark-mode-active:block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-100 dark:hover:text-gray-500"
        href="#!"
        data-hs-theme-click-value="light"
        onClick={() => {
          shirt.toggleTheme();
        }}
      >
        <svg
          class="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <g>
                <path
                  d="M256.001,129.374c-69.823,0-126.627,56.805-126.627,126.626S186.179,382.626,256,382.626
				c69.822,0.001,126.626-56.803,126.626-126.626C382.626,186.179,325.822,129.374,256.001,129.374z"
                />
                <path
                  d="M256,95.553c10.793,0,19.543-8.75,19.543-19.543V19.543C275.543,8.75,266.793,0,256,0
				c-10.793,0-19.543,8.75-19.543,19.543V76.01C236.457,86.803,245.207,95.553,256,95.553z"
                />
                <path
                  d="M383.272,148.272c5,0,10.003-1.909,13.818-5.725l39.929-39.929c7.632-7.631,7.632-20.005,0-27.638
				c-7.63-7.632-20.004-7.632-27.638,0l-39.929,39.927c-7.632,7.632-7.632,20.005,0,27.638
				C373.269,146.363,378.271,148.272,383.272,148.272z"
                />
                <path
                  d="M492.457,236.457H435.99c-10.793,0-19.543,8.75-19.543,19.543c0,10.793,8.75,19.543,19.543,19.543h56.467
				c10.793,0,19.543-8.75,19.543-19.543C512,245.207,503.251,236.457,492.457,236.457z"
                />
                <path
                  d="M397.091,369.453c-7.631-7.632-20.005-7.632-27.638,0c-7.632,7.632-7.632,20.005,0,27.638l39.929,39.927
				c3.816,3.816,8.818,5.725,13.818,5.725c5,0,10.003-1.907,13.818-5.725c7.632-7.632,7.632-20.005,0-27.638L397.091,369.453z"
                />
                <path
                  d="M256,416.447c-10.793,0-19.543,8.75-19.543,19.543v56.467c0,10.793,8.75,19.543,19.543,19.543
				c10.793,0,19.543-8.75,19.543-19.543V435.99C275.543,425.197,266.793,416.447,256,416.447z"
                />
                <path
                  d="M114.91,369.453l-39.929,39.929c-7.632,7.631-7.632,20.005,0,27.638c3.816,3.816,8.816,5.725,13.818,5.725
				c5,0,10.003-1.909,13.818-5.725l39.929-39.927c7.632-7.632,7.632-20.005,0-27.638S122.542,361.821,114.91,369.453z"
                />
                <path
                  d="M95.553,256c0-10.793-8.75-19.543-19.543-19.543H19.543C8.75,236.457,0,245.207,0,256
				c0,10.793,8.75,19.543,19.543,19.543H76.01C86.803,275.543,95.553,266.793,95.553,256z"
                />
                <path
                  d="M114.91,142.547c3.816,3.816,8.818,5.725,13.819,5.725c5,0,10.003-1.909,13.818-5.723c7.632-7.632,7.632-20.005,0-27.638
				l-39.926-39.93c-7.632-7.632-20.005-7.631-27.638,0c-7.632,7.632-7.632,20.005,0,27.638L114.91,142.547z"
                />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
}

export default Themeswitcher;
