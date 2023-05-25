<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://currency-exchange-tau-ten.vercel.app/">
    <img src="overall.gif" alt="Logo" width="700" height="370">
  </a>
  
  <p align="center" style="color:#8FBC8B; font-size:25px">
    Bem-vindos ao Super Trunfo Card Game! 🎲
    <br />
  </p>
</p>

<hr>

<p align="center">
<a href="https://currency-exchange-tau-ten.vercel.app/" style="color:#66FF00; font-size:25px">
    Teste o projeto! Link do deploy
  </a>
   </p>

<br>

# Sobre o projeto

<div style="font-size:16px">

Trata-se de um jogo de cartas ao estilo Super Trunfo, onde é possível cadastrar suas próprias cartas!
<br>
Para jogar, basta cadastrar pelo menos 4 cartas, com todos os campos e imagem preenchidos, e clicar em `Play`.
<br>
Depois é só escolher o atributo ou raridade que acha mais forte daquela carta e vencer todas as cartas do oponente!
<br>
As instruções detalhadas podem ser lidas no botão `Instructions` do jogo.
<br>
O jogo foi criado inteiramente em `React`, com a vantagem de não possuir carregamento entre páginas!
<br>
<br>
O projeto inicial, criado durante o curso de front-end na `Trybe`, tinha apenas como funcionalidades o cadastro das cartas e o filtro de consulta. Posteriormente, implementei o modo `Play` e diversas outras funcionalidades.

### Algumas delas:
- Embaralha as cartas quando inicia o modo `play`, quando vence a carta do oponente ou quando empata;
- Limite do valor dos atributos e da quantidade de caracteres nos campos de cadastro;
- Imagens ficam salvas no Local Storage mesmo após fechar o navegador e sair da aplicação;
- Filtro de busca funciona com letras maísculas e minúsculas;
- Libera certos botões (Salvar e Play) mediante o preenchimento correto dos campos e após ter um número jogável de cartas;
- Empate ao escolher um atributo ou raridade de valor igual ao da carta do oponente faz com que as cartas sejam embaralhadas para evitar outro empate;
- Super Trunfo ganha 2 cartas de uma vez caso vença a rodada;
- Impossibilita criar cartas com o mesmo nome ou Super Trunfo caso já exista um Trunfo no baralho;

</div>
<br>


<br>

# Tecnologias utilizadas

Essas foram as tecnologias utilizadas durante o desenvolvimento do projeto:

* <span style="color:#58a6ff">HTML</span>
* <span style="color:#58a6ff">CSS</span>
* <span style="color:#58a6ff">Javascript</span>
* <span style="color:#58a6ff">React</span>
* <span style="color:#58a6ff">ESLint</span>

<br>

# Rodando localmente

### Iniciando o projeto:
1. Clone o repositório em uma pasta de seu computador:
```sh
git clone git@github.com:mathlaza/frontend-Super-Trunfo.git
```
2. Entre na pasta raiz do projeto:
```sh
cd frontend-Super-Trunfo
```
3. Instale as dependências:
```sh
npm install
```
4. Inicie a aplicação:
```sh
npm start
```
