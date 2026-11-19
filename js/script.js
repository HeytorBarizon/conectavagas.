document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const btnAnterior = document.getElementById("btnAnterior");
  const btnProximo = document.getElementById("btnProximo");
  let indiceAtual = 0;

  function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("ativo", i === indice);
    });
  }

  if (btnAnterior && btnProximo && slides.length > 0) {
    btnAnterior.addEventListener("click", () => {
      indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
      mostrarSlide(indiceAtual);
    });

    btnProximo.addEventListener("click", () => {
      indiceAtual = (indiceAtual + 1) % slides.length;
      mostrarSlide(indiceAtual);
    });
  }

  const botoesDetalhes = document.querySelectorAll(".botao-detalhes");
  botoesDetalhes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const idAlvo = botao.getAttribute("data-alvo");
      const descricao = document.getElementById(idAlvo);
      if (descricao) {
        if (descricao.hidden) {
          descricao.hidden = false;
          botao.textContent = "Ocultar detalhes";
        } else {
          descricao.hidden = true;
          botao.textContent = "Ver detalhes";
        }
      }
    });
  });

  const anoAtual = document.getElementById("anoAtual");
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }
});
