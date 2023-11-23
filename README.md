<h1 align="center"><img src="/assets/img/full.jpeg" width="100px"></h1>

<h3 align="center">DDD - Modelagem Tática e Patterns</h3>

<p align="center">“Software developers are students forever 🧠”</p>

<p align="center">
  <a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#context">Contexto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#struct">Como foi estruturado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Stacks</a>
</p>

## :speech_balloon: Sobre <a name="about"></a>

> Como modelar um software utilizando DDD e como aplicar os principais patterns que estão envolta do conceito de modelagem, o estudo foi realizado através da plataforma de cursos da [Full Cycle](https://curso.fullcycle.com.br/curso-fullcycle/).


## :bookmark: Contexto <a name="context"></a>

Aplicação que possibilita um consumer gerar uma ordem de serviço com uma lista de itens, aplicando os conceitos:
> Domain Events e Factory


## :construction_worker: Como foi estruturado <a name="struct"></a>

```bash
# Agregados:
- Customer => Address value object
- Order    => OrderItem
- Product

```

```bash
# A relação entre order e OrderItem é pelo proprio objeto, porque eles fazer parte do mesmo agregado.

# A relação de Order e Customer é por ID porque ele só faz um apontamento para Customer pois eles estão em agregados diferentes.

# A relação de OrderItem para Product vai ser por ID, porque eles estão em agregados diferentes.

```


## :warning: Instalação <a name="install"></a>

Instalação dos pacotes

```bash
$ npm install
```

## :exclamation: Testes <a name="test"></a>

```bash
$ npm test
```


## :heavy_check_mark: Stacks <a name="technologies"></a>

- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)

---

by [Gisele Trizotte](https://www.github.com/GiseleTrizotte) ❤️



