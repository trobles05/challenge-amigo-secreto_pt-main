let amigos = [];


function adicionarAmigo() {

    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!isNaN(nome)) {
        alert("Números não são permitidos. Digite um nome válido.");
        return;
    }

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 participantes para o sorteio.");
        return;
    }

    let sorteio = {};
    let sorteados = [...amigos];
    let embaralhado = [...amigos].sort(() => Math.random());


    for (let i = 0; i < amigos.length; i++) {
        if (embaralhado[i] === amigos[i]) {
            [embaralhado[i], embaralhado[(i + 1) % amigos.length]] = [embaralhado[(i + 1) % amigos.length], embaralhado[i]];
        }

        sorteio[amigos[i]] = embaralhado[i];
    }


    exibirResultado(sorteio);
}


function exibirResultado(sorteio) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (const [amigo, sorteado] of Object.entries(sorteio)) {
        const li = document.createElement("li");
        li.textContent = `${amigo}`;
        resultadoLista.appendChild(li);
    }
}

function exibirResultado(sorteio) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const [amigo, sorteado] = Object.entries(sorteio)[0];
    const li = document.createElement("li");
    li.textContent = ` Seu amigo sorteado foi: ${amigo}`;
    resultadoLista.appendChild(li);
}
