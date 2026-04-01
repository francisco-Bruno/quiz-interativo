let perguntas = []
let indice = 0
let pontuacao = 0
let pontuacaoTotal = 0

const quizJS = [
    {
        pergunta: "Qual resultado de 3 + 2?",
        opcoes: ["4", "5", "6"],
        correta: 1
    },
    {
        pergunta: "Qual símbolo usamos para comparação?",
        opcoes: ["=", "==", "+"],
        correta: 1
    }
]

const quizHTML = [
    {
        pergunta: "Qual tag cria um parágrafo?",
        opcoes: ["&lt;p&gt;", "&lt;h1&gt;", "&lt;div&gt;"],
        correta: 0
    },
    {
        pergunta: "Qual tag é usada para links?",
        opcoes: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;"],
        correta: 0
    }
]

const quizCSS = [
    {
        pergunta: "Qual propriedade muda a cor do texto?",
        opcoes: ["background", "color", "font"],
        correta: 1
    },
    {
        pergunta: "Como selecionamos uma classe?",
        opcoes: ["#", ".", "*"],
        correta: 1
    }
]

function iniciarQuiz(tipo) {
    if (tipo === "js") perguntas = quizJS
    if (tipo === "html") perguntas = quizHTML
    if (tipo === "css") perguntas = quizCSS

    indice = 0
    pontuacao = 0

    document.getElementById("menu").style.display = "none"
    document.getElementById("quiz").style.display = "block"

    mostrarPergunta()
}

function mostrarPergunta() {
    const p = perguntas[indice]
    document.getElementById("pergunta").innerText = p.pergunta;

    const opcoesDiv = document.getElementById("opcoes")
    opcoesDiv.innerHTML = ""

    for (let i = 0; i < p.opcoes.length; i++) {
        opcoesDiv.innerHTML += `
            <label>
                <input type="radio" name="opcao" value="${i}">
                ${p.opcoes[i]}
            </label><br>
        `;
    }
}

function proximaPergunta() {
    const selecionada = document.querySelector('input[name="opcao"]:checked')

    if (selecionada) {
        if (parseInt(selecionada.value) === perguntas[indice].correta) {
            pontuacao++;
        }
    }

    indice++;

    if (indice < perguntas.length) {
        mostrarPergunta()
    } else {
        finalizarQuiz()
    }
}

function finalizarQuiz() {
    pontuacaoTotal += pontuacao

    alert("Você fez " + pontuacao + " pontos.\nTotal acumulado: " + pontuacaoTotal)

    document.getElementById("quiz").style.display = "none"
    document.getElementById("menu").style.display = "block"

    mostrarPontuacaoTotal()
}

function mostrarPontuacaoTotal() {
    let div = document.getElementById("pontuacaoTotal")

    if (!div) {
        div = document.createElement("div")
        div.id = "pontuacaoTotal"
        document.getElementById("menu").appendChild(div);
    }

    div.innerText = "Pontuação total: " + pontuacaoTotal;
}
