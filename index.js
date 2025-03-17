async function dados() {
  var payload = document.querySelector('#selecionado').innerText.toLowerCase()
  if (payload =='nenhum'){
    alert('Selecione o País')
    return 
  }
  var inputEmailEl = document.querySelector('#inputEmail')
  var inputName = document.querySelector('#inputName')
  var inputUsername = document.querySelector('#inputUsername')
  var inputPicture = document.querySelector('#picture')
  var inputCPF = document.querySelector('#cpf')
  var inputCidade = document.querySelector('#cidade')
  var inputEstado = document.querySelector('#estado')
  var inputPais = document.querySelector('#pais')

  const response = await fetch(`https://randomuser.me/api/?nat=${payload}`)
  const data = await response.json()
  const persona = data.results[0]

  const name = persona.name.first + " " + persona.name.last
  const cidade = persona.location.city
  const estado = persona.location.state
  const pais = persona.location.country
  const age = persona.age
  const telefone = persona.cell // numero
  const cpf = persona.id.value // numero
  const email = persona.email // numero
  const username = persona.login.username // numero
  const picture = persona.picture.large

  inputName.value = name
  inputEmailEl.value = email
  inputUsername.value = username
  inputPicture.src = picture
  inputCPF.value = cpf
  inputCidade.value = cidade
  inputEstado.value = estado
  inputPais.value = pais

  statusEl.innerText = response.status == 200 ? 'Sucesso' : 'Erro'

}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function(event) {
      event.preventDefault(); // Evita comportamento padrão do link

      let valorSelecionado = this.getAttribute("data-value"); // Pega o valor do atributo data-value
      document.getElementById("selecionado").innerText = valorSelecionado; // Atualiza o texto na tela
      
      document.getElementById("dropdownMenuButton").innerText = this.innerText; // Atualiza o botão do dropdown
    });
  });
});
