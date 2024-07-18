function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == "pista") { //função para recuperar o tipo pista e suas quantidades.
        comprarpista(qtd);
    } else if (tipo.value == "superior") {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarpista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (qtd > qtdPista) {
        alert("não existem mais ingressos disponíveis!");
    } else {
        qtdPista = qtdPista - qtd
        document.getElementById("qtd-pista").textContent = qtdPista
        alert("Compra efetuada com sucesso!");
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (qtd > qtdSuperior) {
        alert("não existem mais ingressos disponíveis!");
    } else {
        qtdSuperior = qtdSuperior - qtd
        document.getElementById("qtd-superior").textContent = qtdSuperior
        alert("Compra efetuada com sucesso!");
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (qtd > qtdInferior) {
        alert("não existem mais ingressos disponíveis!");
    } else {
        qtdInferior = qtdInferior - qtd
        document.getElementById("qtd-inferior").textContent = qtdInferior
        alert("Compra efetuada com sucesso!");
    }
}