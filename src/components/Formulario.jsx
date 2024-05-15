import React, { useState } from "react";
import img from '../assets/mz/logo/megazap-hover.svg'

function Form() {
  // Estado para armazenar o valor do comentário
  const [comment, setComment] = useState("");

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Configuração da requisição para a API
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mz-authorization": "b7d92abd-f806-44be-8542-4ace008a751c", // Token de autorização
      },
      body: JSON.stringify({
        comment: comment, // Envia o comentário como parte do corpo da requisição
      }),
    };

    try {
      const response = await fetch(
        "https://backend.apidoc.com.br/subir-lead",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Response not ok");
      }
      const data = await response.json();
      console.log(data); // Trate a resposta conforme necessário
      alert("Comment submitted successfully!"); // Feedback para o usuário
    } catch (error) {
      console.error("Failed to submit comment:", error);
      alert("Failed to submit comment."); // Feedback de erro para o usuário
    }
  };

  return (
    <div className="w-full h-screen overscroll-y-none overscroll-x-none">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center items-center justify-center flex">
            <img src={img} alt="img" className="w-20 h-20" />
            <h2 className="text-xl text-black font-bold sm:text-3xl dark:text-white">
              Repositório de Leads
            </h2>
          </div>

          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="hs-feedback-post-comment-textarea-1"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Repositório
                </label>
                <div className="mt-1">
                  <textarea
                    id="hs-feedback-post-comment-textarea-1"
                    name="hs-feedback-post-comment-textarea-1"
                    rows="25"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Insira os dados aqui..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} // Atualiza o estado com o valor do comentário
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
