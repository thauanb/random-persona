# Random-Persona API Mini-Projeto

Este mini-projeto consome a API RandomUser para gerar e exibir perfis de usuários aleatórios. Ele permite praticar o consumo de APIs, manipulação de dados em JavaScript e exibição dinâmica de informações na interface.

## Funcionalidades

- Buscar e exibir perfis de usuários aleatórios
- Exibir informações como nome, idade, localização e foto
- Atualizar os dados ao pressionar um botão

## Tecnologias Utilizadas

- `HTML`
- `CSS`
- `JavaScript (Fetch API)`

## Como Usar

Clone este repositório:

```sh
git clone https://github.com/seu-usuario/random-persona.git
```

Acesse a pasta do projeto:

```sh
cd random-persona
```

Abra o arquivo `index.html` em um navegador.

## Exemplo de Código

```js
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    console.log(`Nome: ${user.name.first} ${user.name.last}`);
  })
  .catch(error => console.error('Erro ao buscar usuário:', error));
```

## Referências

[RandomUser API](https://randomuser.me/)

