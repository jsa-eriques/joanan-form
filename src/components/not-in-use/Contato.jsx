// import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Tilt from "react-parallax-tilt";
import contactImg from "../assets/mz/criativo-vendas/FOTO-DEV-FORM.png";
import ReCAPTCHA from "react-google-recaptcha";
//import emailjs from "@emailjs/browser";

function Contato() {
  const [scale] = useState(1.2);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [segmentacao, setSegmentacao] = useState("");
  // const [recaptchaResponse, setRecaptchaResponse] = useState("");

  // window.handleRecaptchaResponse = setRecaptchaResponse;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };

  function sendEmail(e) {
    const body = new FormData();
    body.set("name", nome);
    body.set("email", email);
    body.set("phone", number);
    body.set("business_area", segmentacao);
    body.set("message", mensagem);
    // body.set("g-recaptcha-response", recaptchaResponse);

    fetch("https://backend.apidoc.com.br/contact-form", {
      body,
      method: "POST",
    }).then(
      (response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Seu email foi enviado! 😊",
            showConfirmButton: false,
            timer: 1500,
          });
          setNome("");
          setEmail("");
          setNumber("");
          setMensagem("");
          setSegmentacao("");
          // setRecaptchaResponse("");
        } else
          Swal.fire({
            icon: "error",
            title:
              "Verifique se está tudo preenchido corretamente e se o reCAPTCHA está verificado!",
            showConfirmButton: false,
            timer: 1500,
          });
      },
      (err) => {
        console.log("FAILED...", err);
        Swal.fire({
          icon: "error",
          title: "Algo deu errado, tente novamente 😢",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );

    /*const templateParams = {
      from_name: nome,
      email: email,
      number: number,
      message: mensagem,
      segmentacao: segmentacao,
    };
    emailjs
        .send(
          "service_9e17yiq",
          "template_z4ftgei",
          templateParams,
          "hoBpNjO8JUGIN3Mvw"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            Swal.fire({
              icon: "success",
              title: "Seu email foi enviado! 😊",
              showConfirmButton: false,
              timer: 1500,
            });
            setNome("");
            setEmail("");
            setNumber("");
            setMensagem("");
            setSegmentacao("");
          },
          (err) => {
            console.log("FAILED...", err);
            Swal.fire({
              icon: "error",
              title: "Algo deu errado, tente novamente 😢",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );*/
  }

  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto"
      id="contato"
    >
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
            Conecte-se Conosco
          </h1>
          <p class="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
            Estamos prontos para tirar suas dúvidas. <br /> Se você tiver alguma
            pergunta, feedback ou desejar iniciar uma conversa, preencha o
            formulario e entraremos em contato o mais breve possível.
          </p>

          <div class="mt-8">
            <Tilt scale={scale} transitionSpeed={2000}>
              <img
                class="z-30 bottom-0 right-0"
                src={contactImg}
                alt="Javascript"
              />
            </Tilt>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col  p-4 sm:p-6 lg:p-10 rounded-xl border border-sub-blue dark:border-sub-blue">
            <h2 className=" text-2xl text-left text-gray-800 dark:text-gray-200">
              Nos envie uma mensagem e<br /> responderemos o mais breve possivel
            </h2>
            <form onSubmit={handleSubmit(sendEmail)}>
              <div className="mt-6 grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Nome
                    </label>
                    <input
                      {...register("firstName", {
                        required: "Esqueceu seu nome? 🤔",
                      })}
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Como gostaria de ser chamado?"
                      onChange={(e) => setNome(e.target.value)}
                      value={nome}
                      className="py-3 px-4 block w-full border  border-sub-blue dark:border-sub-blue rounded-md text-sm focus:border-sub-blue focus:ring-sub-blue dark:bg-slate-900 dark:text-gray-400"
                    />
                    {errors.firstName && (
                      <span className="text-red-700 absolute">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Seu melhor Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Ops, email inválido. 🚫",
                    })}
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    placeholder="Digite seu E-mail mais ativo!"
                    className="py-3 px-4 block w-full border border-sub-blue dark:border-sub-blue rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:text-gray-400"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {errors.email && (
                    <span className="text-red-700 absolute">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    for="email"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Seu número de telefone
                  </label>
                  <input
                    {...register("number", {
                      required: "Ops, numero inválido. 🚫",
                    })}
                    type="text"
                    name="number"
                    id="number"
                    autocomplete="number"
                    placeholder="+55 (00) 0 0000-0000"
                    className="py-3 px-4 block w-full border border-sub-blue dark:border-sub-blue rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:text-gray-400"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                  />
                  {errors.number && (
                    <span className="text-red-700 absolute">
                      {errors.number.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    for="email"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Segmentação
                  </label>
                  <input
                    {...register("segmentacao", {
                      required: "Ops, segmentação inválida. 🚫",
                    })}
                    type="text"
                    name="segmentacao"
                    id="segmentacao"
                    autocomplete="segmentacao"
                    placeholder="Qual a segmentação do serviço que você oferece aos seus clientes?"
                    className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900  border-sub-blue dark:border-sub-blue dark:text-gray-400"
                    onChange={(e) => setSegmentacao(e.target.value)}
                    value={segmentacao}
                  />
                  {errors.segmentacao && (
                    <span className="text-red-700 absolute">
                      {errors.segmentacao.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    for="message"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Mensagem
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Vamos lá, solte as palavras!",
                    })}
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Aproveite esse espaço pra nos contar um pouco do que você precisa, entraremos em contato em breve!"
                    className="py-3 px-4 block w-full border  border-sub-blue dark:border-sub-blue rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900  dark:text-gray-400"
                    onChange={(e) => setMensagem(e.target.value)}
                    value={mensagem}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-700 absolute">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-6 grid">
                {/* <div
                  class="g-recaptcha"
                  data-sitekey="6LcLZekoAAAAABlPlwhJTBBzMh8K0H9XwmkQmRoK"
                  data-callback="handleRecaptchaResponse"
                ></div> */}
                <ReCAPTCHA sitekey="6LcLZekoAAAAABlPlwhJTBBzMh8K0H9XwmkQmRoK" onChange={onChange} />
              </div>
              {/* <script
                src="https://www.google.com/recaptcha/api.js"
                async
                defer
              ></script> */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-sub-blue hover:bg-green-500 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Enviar
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                Retornaremos o seu contato o mais breve possível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
