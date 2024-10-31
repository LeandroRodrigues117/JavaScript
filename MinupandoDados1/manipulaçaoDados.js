const nomesCurtidos = JSON.parse(localStorage.getItem('nomesCurtidos')) || [];
const resultado = document.getElementById('resultado');

atualizarResultado();

document.getElementById('curtir').addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();

    if (nome && !nomesCurtidos.includes(nome)) {
        nomesCurtidos.push(nome);
        salvarNomes();
        atualizarResultado();
        document.getElementById('nome').value = ''; 
    } else if (nome) {
        alert('Esse nome já curtiu!');
    }
});

document.getElementById('limpar').addEventListener('click', () => {
    localStorage.removeItem('nomesCurtidos'); 
    nomesCurtidos.length = 0; 
    atualizarResultado(); 
});

function atualizarResultado() {
    if (nomesCurtidos.length === 0) {
        resultado.textContent = 'Ninguém curtiu';
    } else if (nomesCurtidos.length === 1) {
        resultado.textContent = `${nomesCurtidos[0]} curtiu`;
    } else if (nomesCurtidos.length === 2) {
        resultado.textContent = `${nomesCurtidos[0]} e ${nomesCurtidos[1]} curtiram`;
    } else {
        resultado.textContent = `${nomesCurtidos[0]}, ${nomesCurtidos[1]} e mais ${nomesCurtidos.length - 2} pessoas curtiram`;
    }
};

function salvarNomes() {
    localStorage.setItem('nomesCurtidos', JSON.stringify(nomesCurtidos));
};

