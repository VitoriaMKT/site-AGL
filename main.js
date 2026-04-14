// =========================
// NAVBAR SCROLL
// =========================
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});


// =========================
// ANIMAÇÃO CARDS
// =========================
const cards = document.querySelectorAll('.card-dif');

function animarScroll() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const bottom = card.getBoundingClientRect().bottom;

    if (top < trigger && bottom > 0) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);


// =========================
// TROCAR CONTEÚDO
// =========================
function trocarConteudo(tipo) {
  const box = document.getElementById("conteudo-grande");

  box.classList.add("animar");

  setTimeout(() => {

    if (tipo === 1) {
      box.innerHTML = `
        <h2>SEM AUMENTAR SUA <span>PARCELA</span></h2>
        <p>Você pode liberar um valor extra ou melhorar seu contrato sem pagar mais por mês, mantendo o mesmo desconto.</p>
      `;
    }

    if (tipo === 2) {
      box.innerHTML = `
        <h2><span>DINHEIRO</span> DIRETO NA CONTA</h2>
        <p>Após a aprovação, o valor é liberado diretamente na sua conta, de forma rápida e segura.</p>
      `;
    }

    if (tipo === 3) {
      box.innerHTML = `
        <h2>SEM NENHUMA <span>COMPLICAÇÃO</span></h2>
        <p>Processo simples, sem burocracia e sem precisar sair de casa  tudo feito pelo celular.</p>
      `;
    }

    box.classList.remove("animar");

  }, 300);
}


// =========================
// SIMULADOR
// =========================
function simular() {

  const tipo = document.getElementById("tipo").value;
  const margem = parseFloat(document.getElementById("margem").value) || 0;

  // ✅ VALIDAÇÕES
  if (!tipo || tipo === "Tipo de cliente") {
    alert("Selecione o tipo de cliente");
    return;
  }

  if (margem <= 0) {
    alert("Digite um valor válido de margem");
    return;
  }

  // 🔥 COEFICIENTE POR TIPO (MAIS REAL)
  let coeficiente;

  if (tipo === "INSS") coeficiente = 28;
  else if (tipo === "CLT") coeficiente = 22;
  else if (tipo === "Servidor") coeficiente = 30;
  else coeficiente = 25;

  // 🔥 CÁLCULO DIRETO
  const valorLiberado = margem * coeficiente;

  // 🔥 PEGAR ELEMENTOS
  const box = document.getElementById("resultado");
  const valorElemento = document.getElementById("valorResultado");

  // 🔥 MOSTRAR BLOCO (COM ANIMAÇÃO)
  box.style.display = "block";

  setTimeout(() => {
    box.classList.add("ativo");
  }, 50);

  // 💰 ANIMAÇÃO DO VALOR
  animarValor(valorElemento, valorLiberado);
}

function animarValor(elemento, valorFinal) {
  let valorAtual = 0;
  const duracao = 800;
  const incremento = valorFinal / (duracao / 16);

  const intervalo = setInterval(() => {
    valorAtual += incremento;

    if (valorAtual >= valorFinal) {
      valorAtual = valorFinal;
      clearInterval(intervalo);
    }

    elemento.innerText = valorAtual.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  }, 16);
}

  // 🔥 CÁLCULO MAIS REAL
  if (tipo === "INSS") {
    coeficiente = 28;
  } else if (tipo === "CLT") {
    coeficiente = 22;
  } else if (tipo === "Servidor") {
    coeficiente = 30;
  } else {
    coeficiente = 25;
  }

  const base = margem;
  const valorLiberado = base * coeficiente;

  const box = document.getElementById("resultado");
  const valorElemento = document.getElementById("valorResultado");

  box.style.display = "block";
  box.classList.add("ativo");

  // 💰 ANIMAÇÃO
 function simular() {

  const tipo = document.getElementById("tipo").value;
  const margem = parseFloat(document.getElementById("margem").value) || 0;

  if (!tipo || tipo === "Tipo de cliente" || (margem === 0)) {
    alert("Preencha os campos corretamente");
    return;
  }

  let coeficiente = 0;

  if (tipo === "INSS") coeficiente = 28;
  else if (tipo === "CLT") coeficiente = 22;
  else if (tipo === "Servidor") coeficiente = 30;
  else coeficiente = 25;

  const base = margem;
  const valorLiberado = base * coeficiente;

  const box = document.getElementById("resultado");
  const valorElemento = document.getElementById("valorResultado");

  box.style.display = "block";
  box.classList.add("ativo");

  animarValor(valorElemento, valorLiberado);
}

function animarValor(elemento, valorFinal) {
  let valorAtual = 0;
  const duracao = 1000;
  const incremento = valorFinal / (duracao / 16);

  const intervalo = setInterval(() => {
    valorAtual += incremento;

    if (valorAtual >= valorFinal) {
      valorAtual = valorFinal;
      clearInterval(intervalo);
    }

    elemento.innerText = valorAtual.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  }, 16);
}

document.querySelectorAll('a[href="#simulador"]').forEach(link => {
  link.addEventListener('click', function() {
    setTimeout(() => {
      const box = document.getElementById("simulador");
      box.classList.add("highlight");

      setTimeout(() => {
        box.classList.remove("highlight");
      }, 1500);
    }, 500);
  });
});

function falarAnalista() {

  const valor = document.getElementById("valorResultado").innerText;
  const tipo = document.getElementById("tipo").value;
  const margem = document.getElementById("margem").value;

  const msg = `Olá! Acabei de fazer uma simulação na Ágille.

💰 Valor estimado: ${valor}

Tipo: ${tipo}
Margem: R$ ${margem}

Quero falar com um analista para liberar esse valor agora.`;

  // 🔥 LISTA DE ANALISTAS
  const analistas = [
    "5519981160403",
    "5519953223276",
    "5519953220473"
  ];

  // 🎯 ESCOLHE UM ALEATÓRIO
  const indice = Math.floor(Math.random() * analistas.length);
  const numero = analistas[indice];

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");
}

document.querySelectorAll('a[href="#simulador"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const alvo = document.getElementById("simulador");

    alvo.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    // destaque visual
    setTimeout(() => {
      alvo.classList.add("highlight");

      setTimeout(() => {
        alvo.classList.remove("highlight");
      }, 1500);
    }, 600);
  });
});

document.querySelectorAll('a[href="#simulador"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const alvo = document.getElementById("simulador");

    alvo.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    setTimeout(() => {
      alvo.classList.add("highlight");

      setTimeout(() => {
        alvo.classList.remove("highlight");
      }, 1500);
    }, 600);
  });
});

function enviarFormulario() {
  const nome = document.getElementById("nome").value;
  const valor = document.getElementById("valor").value;
  const celular = document.getElementById("celular").value;

  const msg = `Olá, sou ${nome}.
Quero simular um crédito de R$ ${valor}.
Meu telefone: ${celular}`;

  window.open(`https://wa.me/5519981160403?text=${encodeURIComponent(msg)}`);
}