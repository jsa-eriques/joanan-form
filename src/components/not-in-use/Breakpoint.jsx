import React from "react";
import breakPointImg1 from "../assets/mz/clientes/Vector 1.svg";
import breakPointImg2 from "../assets/mz/clientes/Vector 2.png";
// import breakPointImg3 from "../assets/mz/clientes/Vector 3.png";
// import breakPointImg4 from "../assets/mz/clientes/Vector 4.png";
import breakPointImg5 from "../assets/mz/clientes/Vector 5.png";

function Breakpoint() {
  return (
    <div class="w-full h-auto flex justify-center align-middle mb-32 dark:border-sub-white">
      <img
        class="-z-10 absolute object-cover w-screen"
        src={breakPointImg1}
        alt="Javascript"
      />
      <img
        class="-z-10 absolute object-cover w-screen"
        src={breakPointImg2}
        alt="Javascript"
      />
      {/* <img
        class="-z-10 absolute object-cover w-screen"
        src={breakPointImg3}
        alt="Javascript"
      /> */}
      {/* <img
        class="-z-10 absolute object-cover w-screen"
        src={breakPointImg4}
        alt="Javascript"
      /> */}
      <img
        class="-z-10 absolute object-cover w-screen"
        src={breakPointImg5}
        alt="Javascript"
      />
    </div>
  );
}

export default Breakpoint;
