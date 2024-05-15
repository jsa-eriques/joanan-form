import React, { useState, useEffect } from "react";
import NoScript from "../components/not-in-use/NoScript";

function OnClick() {
  // const [timer, setTimer] = useState(60 * 0.05);
  // const [display, setDisplay] = useState(formatTime(timer));

  // function formatTime(time) {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time % 60;
  //   const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //   const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //   return `${formattedMinutes}:${formattedSeconds}`;
  // }

  const [timer, setTimer] = useState(1);
  const [display, setDisplay] = useState(formatTime(timer));

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(
      window,
      document,
      "script",
      "dataLayer",
      process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID
    );

    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", process.env.REACT_APP_META_PIXEL_ID);
    window.fbq("track", "PageView");
    // window.fbq("track", process.env.REACT_APP_TRACKER_EVENT_NAME);
    // window.fbq("track", process.env.REACT_APP_TRACKER_EVENT_NAME2);

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 1) {
          // Verifique se o timer é maior que 1, não igual a 0
          const newDisplay = formatTime(prevTimer - 1); // Atualiza o display
          setDisplay(newDisplay); // Define o novo valor do display
        } else {
          clearInterval(interval);
          // Executar alguma ação quando o timer chegar a zero
          window.location.href =
            // https://web.whatsapp.com/send?phone=553197569620&text=Ol%C3%A1%2C+SMBOT%21+Tenho+interesse+em+conhecer+mais.&type=phone_number&app_absent=0
            "https://api.whatsapp.com/send?phone=5513997020038&text=Ol%C3%A1%2C+MegaZap%21+Tenho+interesse+em+conhecer+mais.&type=phone_number&app_absent=0%27";
        }
        return prevTimer - 1;
      });
    }, 1000);
  }, []);

  return (
    <>
      <NoScript />
      <div class="flex justify-center items-center flex-col m-auto">
        <p id="timer">{display}</p>
        <h1>Você será redirecionado!</h1>
      </div>
    </>
  );
}

export default OnClick;
