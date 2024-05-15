import React from "react";
import Breakpoint from "./Breakpoint";
// import Tilt from "react-parallax-tilt";
import RDStation from "../assets/mz/icons/RDSTATIONCRM.jpg";
import RDStationMRK from "../assets/mz/icons/RDSTATIONMKT.jpg";
import Asaas from "../assets/mz/icons/ASAAS.jpg";
import Pipedrive from "../assets/mz/icons/PIPEDRIVE.jpg";
import Hubspot from "../assets/mz/icons/HUBSOPT.jpg";
import Moskit from "../assets/mz/icons/MOSKIT.jpg";
import SendPulse from "../assets/mz/icons/SENDPULSE.jpg";
// import Radius4all from "../assets/mz/icons/RADIUSNET.jpg";
import Nimbly from "../assets/mz/icons/NIMBLY.jpg";
// import Astrea from "../assets/mz/icons/ASTREA.jpg";
import HubSoft from "../assets/mz/icons/HUBSOFT.jpg";
import GoogleCalendar from "../assets/mz/icons/GOOGLEAGENDA.jpg";
// import Skills from "./Skills";

export default function Integrations() {
  // const [scale] = useState(1.6);

  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-32">
      <Breakpoint />
      <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 class="text-xl font-semibold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          INTEGRAÇÕES COM AS MELHORES PLATAFORMAS
        </h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={RDStation}
              alt="Javascript"
            />
        </div>

        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={RDStationMRK}
              alt="Javascript"
            />
        </div>

        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Asaas}
              alt="Javascript"
            />
        </div>

        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Pipedrive}
              alt="Javascript"
            />
        </div>

        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={HubSoft}
              alt="Javascript"
            />
        </div>

        {/* <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Astrea}
              alt="Javascript"
            />
        </div> */}

        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Nimbly}
              alt="Javascript"
            />
        </div>

        {/* <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Radius4all}
              alt="Javascript"
            />
        </div> */}

        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={SendPulse}
              alt="Javascript"
            />
        </div>
        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Moskit}
              alt="Javascript"
            />
        </div>
        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={GoogleCalendar}
              alt="Javascript"
            />
        </div>
        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Hubspot}
              alt="Javascript"
            />
        </div>
        {/* <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Hubspot}
              alt="Javascript"
            />
        </div>
        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Hubspot}
              alt="Javascript"
            />
        </div>
        <div class="p-1 md:p-5 flex justify-center items-center bg-white rounded-lg dark:bg-white">
            <img
              class="py-3 lg:py-1 w-16 h-auto md:w-30 lg:w-36 mx-auto"
              src={Hubspot}
              alt="Javascript"
            />
        </div> */}
      </div>
      <br />
      <br />
    </div>
  );
}
