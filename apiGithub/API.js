(() => {
    const botaoBuscar = document.getElementById('carrega-us');
    const listaUsuarios = document.getElementById('lista-usuarios');
    const usuarioInput = document.getElementById('busca');

    botaoBuscar.addEventListener('click', carregaUs);

    async function carregaUs() { 
        const nomeUsuario = usuarioInput.value.trim();

        if(!nomeUsuario){
            alert ("Não foram encontrados usuários para esta pesquisa");
            return;
    }

        try { 
            const response = await fetch(`https://api.github.com/user?q=${nomeUsuario}`);
            if(!response.ok) {
                throw new Error('Usuario nao encontrado');
                
            }
            const usuario = await response.json();
            exibirUsuarios([usuario]);
        }
        catch (error) {
            console.error('Erro ao buscar usuario:', error);
            alert(error.message);
        }

    function exibirUsuarios(usuario) {
        listaUsuarios.innerHTML = '';
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = usuario.login; 
            listaUsuarios.appendChild(li);
    
        });
    }
    }    
    botaoBuscar.addEventListener('click', carregaUs);

})();
