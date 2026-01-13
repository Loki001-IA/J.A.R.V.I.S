async function enviar() {
  const texto = document.getElementById("entrada").value;
  const modo = document.getElementById("modo").value;

  // rota da API (chat, math ou image)
  const rota = `/api/${modo}`;

  try {
    const resposta = await fetch(rota, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ texto })
    });

    const dados = await resposta.json();

    document.getElementById("resposta").innerText =
      dados.resposta || "";

    if (dados.imagem) {
      document.getElementById("imagem").src = dados.imagem;
    }

  } catch (erro) {
    document.getElementById("resposta").innerText =
      "Erro ao conectar com o servidor.";
  }
}
