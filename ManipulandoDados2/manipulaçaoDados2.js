const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

        document.getElementById('adicionar').addEventListener('click', () => {
            const descricao = document.getElementById('descricao').value.trim();
            if (descricao) {
                tarefas.push({ descricao, status: false });
                document.getElementById('descricao').value = ''; 
                atualizarLista();
                salvarTarefas();
            }
        });

        function atualizarLista() {
            const listaTarefas = document.getElementById('lista-tarefas');
            listaTarefas.innerHTML = ''; 

            tarefas.forEach((tarefa, index) => {
                const tarefaDiv = document.createElement('div');
                tarefaDiv.className = 'tarefa';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = tarefa.status;
                checkbox.addEventListener('change', () => {
                    tarefa.status = checkbox.checked;
                    atualizarLista();
                    salvarTarefas();
                });

                const descricaoTarefa = document.createElement('span');
                descricaoTarefa.textContent = tarefa.descricao;
                descricaoTarefa.className = tarefa.status ? 'concluida' : 'nao-concluida';

                tarefaDiv.appendChild(checkbox);
                tarefaDiv.appendChild(descricaoTarefa);
                listaTarefas.appendChild(tarefaDiv);
            });
        };

        function salvarTarefas() {
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        }
        document.getElementById('limpar').addEventListener('click', () => { 
            localStorage.removeItem('tarefas');
            tarefas.length = 0;
            atualizarLista();
        }); 

        atualizarLista();