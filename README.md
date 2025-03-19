# Random-Persona API Mini-Projeto

## Este mini-projeto consome a API RandomUser para gerar e exibir perfis de usuários aleatórios. Ele permite praticar o consumo de APIs, manipulação de dados em JavaScript e exibição dinâmica de informações na interface

### **Aviso:** As informações contidas neste repositório devem ser utilizadas exclusivamente para fins éticos. Qualquer uso indevido, com a intenção de prejudicar ou violar normas éticas, não

## Funcionalidades

- Buscar e exibir perfis de usuários aleatórios
- Exibir informações como nome, idade, localização e foto
- Atualizar os dados ao pressionar um botão

## Tecnologias Utilizadas

![Tecnologias](https://skillicons.dev/icons?i=html,css,js,bootstrap)

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
