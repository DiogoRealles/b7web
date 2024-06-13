![NodeJS](./cover.png)

# NodeJS

<details>
  <summary>O que é NodeJS</summary>
  É um ambiente que utiliza <b>V8 Engine</b> para executar aplicações back-end em JavaScript no server-side. <br />
  Como: Envio de email, conexões a banco de dados, web sever, api, chatbots, e muito mais. <br />
  <a href="https://nodejs.org/en/download/"><b>Download NodeJS</b></a>
  <img src="./nodejs.png" />
</details>
<br />

<details>
  <summary>Import / Export</summary>
  NodeJS aceita duas formas de importar e exportar módulos. <br />
  <b>module.exports = {names_module} / require('names_module'):</b> É o commonJS, modo como NodeJS importa e exporta módulos. <br />
  <b>import / export:</b> É o ES6, modo como JS importa e exporta módulos. <br />
</details>
<br />

<details>
  <summary>Express</summary>
  É um framework back-end que criar servidor web. <br />
</details>
<br />

<details>
  <summary>Rotas</summary>
  São as URLs que são acessadas de uma site. <br />
  <b>https://website.com/:</b> URL principal do site.<br />
  <b>https://website.com/news:</b> Rota que mostra as notícias.<br />
  <b>https://website.com/news/1:</b> Rota dinâmica, que mostra uma noticia expecífica.<br />
  As rotas possuem lógica para dar uma resposta que foi requisitada pelo usuário. <br />
</details>
<br />

<details>
  <summary>Grupo de Rotas</summary>
  É uma técnica de agrupar as rotas do projeto em uma pasta e arquivo. <br />
  Na importação, usa-se com prefixo para identificar e evitar conflitos de rotas. <br />
</details>
<br />

<details>
  <summary>Arquivos Estáticos</summary>
  Express possui objetos que permitem aplicar e disponibilizar arquivos estáticos (CSS, JS, IMGs, etc) na aplicação. <br />
</details>
<br />

<details>
  <summary>Template Engines</summary>
  São libs que tornam as páginas HTML mais dinâmicas, inserindo variáveis do Back-end no Front-end. <br />
  Permite criar layouts que são reaproveitados. <br />
  É essencial em projetos com DBs. <br />
  Basicamente é:
  - Pegar os dados do DB. <br />
  - Organizat as informações. <br />
  - Enviar os dados para o template via engine. <br />
</details>
<br />

<details>
  <summary>Mustache</summary>
  É uma template engine muito popular. Permite criar condicionais, loops e muito mais nas páginas. <br />
  Os valores são renderizados dentro de <b>{{ valor_here }}</b>
</details>
<br />

<details>
  <summary>MVC</summary>
  É um padrão de arquitetura de projeto que visa separar a aplicação em partes, com suas respectivas responsábilidades. <br />
  <b>Models:</b> Responsável pela lógica e regras de negócio e tratar códigos relacionados a DBs, fazer conexão, modelar as tabelas e processar os dados. <br />
  <b>Views:</b> Responsável por exibir os dados no Front-end. <br />
  <b>Controllers:</b> Responsável por lidar com as rotas e repassar entrada e saída de dados. <br />
</details>
<br />

<details>
  <summary>Variáveis de Ambiente</summary>
  São variáveis que devem armazenar valores sensíveis (keys DBs, tokkens, ip DBs, etc.). <br />
  *Não deve ir para o github. <br />
  <b>.env-local:</b> Utilizado em ambiente local. <br />
  <b>.env:</b> Utilizado em todos ambientes (local / prod). <br />
</details>
<br />
