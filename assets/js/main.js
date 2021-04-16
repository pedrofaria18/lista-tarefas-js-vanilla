const inputTarefa = document.querySelector('#inputTarefa');
const buttonTarefa = document.querySelector('#buttonTarefa');
const tarefas = document.querySelector('#tarefas');

inputTarefa.addEventListener('keydown', function(e) {
  if(e.keyCode === 13) {
    e.preventDefault();
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
  }
})

buttonTarefa.addEventListener('click', function(e) {
  e.preventDefault();

  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value)
})


function criarLi() {
  const li = document.createElement('li');
  return li
}

function criaBotaoApagar(li) {
  li.innerHTML += ' ';

  const buttonApagar = document.createElement('button');
  buttonApagar.innerText = 'Apagar';
  buttonApagar.setAttribute('class', 'apagar');
  li.appendChild(buttonApagar);
}

document.addEventListener('click', function(e) {
  const elemento = e.target;
  if(elemento.classList.contains('apagar')) {
    elemento.parentElement.remove();
    salvarTarefa()
  }
})

function limparInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function salvarTarefa() {
  const tarefas = document.querySelectorAll('li')
  const listaDeTarefas = [];

  for (let tarefa of tarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const listaDeTarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', listaDeTarefasJSON);
}

function criaTarefa(tarefa) {
  const li = criarLi();
  li.innerHTML = tarefa;
  tarefas.appendChild(li);
  criaBotaoApagar(li);

  limparInput();
  salvarTarefa();
}





