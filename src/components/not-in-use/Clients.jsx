import React from "react";
// import Tilt from "react-parallax-tilt";
import img1 from "../assets/mz/clientes/AMAZON.svg";
import img2 from "../assets/mz/clientes/Facebook-Meta-Background-PNG-(1).svg";
import img3 from "../assets/mz/clientes/Facebook.svg";
import img4 from "../assets/mz/clientes/KingHost.svg";
import img5 from "../assets/mz/clientes/google.svg";

function Clients() {
  // const [scale] = useState(1.6);
  return (
    <div class="max-w-[85rem] left-to-right">
      <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6 inline">
        <h2 class="text-slate-950 dark:text-gray-400 mm:text-center mm:text-sm">
          Da inovação à excelência, nossos parceiros representam o padrão ouro
          em suas respectivas indústrias.
        </h2>
      </div>

      <div class="grid mm:grid-cols-5 grid-cols-3 gap-x-6 pt-6">
          <img class="z-30 bottom-0 right-0" src={img2} alt="Javascript" />

          <img class="z-30 bottom-0 right-0" src={img3} alt="Javascript" />

          <img class="z-30 bottom-0 right-0" src={img1} alt="Javascript" />

          <img class="z-30 bottom-0 right-0" src={img4} alt="Javascript" />

          <img class="z-30 bottom-0 right-0" src={img5} alt="Javascript" />
      </div>
    </div>
  );
}

export default Clients;
