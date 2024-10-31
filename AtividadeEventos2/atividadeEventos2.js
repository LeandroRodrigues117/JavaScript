const tarefas = [];

        document.getElementById('adicionar').addEventListener('click', () => {
            const descricao = document.getElementById('descricao').value.trim();
            if (descricao) {
                tarefas.push({ descricao, status: false });
                document.getElementById('descricao').value = ''; // Limpar o campo
                atualizarLista();
            }
        });

        function atualizarLista() {
            const listaTarefas = document.getElementById('lista-tarefas');
            listaTarefas.innerHTML = ''; // Limpar a lista atual

            tarefas.forEach((tarefa, index) => {
                const tarefaDiv = document.createElement('div');
                tarefaDiv.className = 'tarefa';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = tarefa.status;
                checkbox.addEventListener('change', () => {
                    tarefa.status = checkbox.checked;
                    atualizarLista();
                });

                const descricaoTarefa = document.createElement('span');
                descricaoTarefa.textContent = tarefa.descricao;
                descricaoTarefa.className = tarefa.status ? 'concluida' : 'nao-concluida';

                tarefaDiv.appendChild(checkbox);
                tarefaDiv.appendChild(descricaoTarefa);
                listaTarefas.appendChild(tarefaDiv);
            });
        };