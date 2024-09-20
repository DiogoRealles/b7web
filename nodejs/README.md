![NodeJS](./cover.png)

# NodeJS

<details>
  <summary>O que é NodeJS</summary>
  É um ambiente que utiliza <b>V8 Engine</b> para executar aplicações back-end em JavaScript no server-side. <br />
  Como: Envio de email, conexões a banco de dados, web sever, api, chatbots, e muito mais. <br />
  <a href="https://nodejs.org/en/download/"><b>Download NodeJS</b></a>
  <img src="./nodejs.png" />
  Utiliza Módulos / Packages para construir aplicações. <br />
</details>
<br />

<details>
  <summary>O que são Módulos / Packages</summary>
  São conjuntos de códigos e arquivos com determinada responsabilidade, são instaladas via NPM. <br />
  <b>Módulos Internos:</b> São módulos desenvolvidos no e para o próprio projeto. É preciso exporta-los e importa-los. <br />
  <b>Módulos Terceiros:</b> São módulos desenvolvidos por terceiros e disponibilizados via NPM. É preciso somente importa-los. <br />
  <b>Módulos Core:</b> São módulos incorporados e disponibilizados pelo próprio NodeJS, não é preciso exportar nem instalar, somente importa-los. <br />
</details>
<br />

<details>
  <summary>O que é NPM (Node Package Manager / Gerenciador de Pacotes do Node)</summary>
  É o gerenciador de pacotes do NodeJS, permite instalar, atualizar e remover pacotes do projeto. <br />
  Permite ainda escrever scripts/comandos para execução de módulos. <br />
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
  <summary>O que são Verbos HTTP</summary>
  São protocolos de comunicação entre cliente e servidor. <br />
  <b>GET:</b> É responsável por solicitar dados. <br />
  <b>POST:</b> É responsável por inseris dados. <br />
  <b>PUT:</b> É responsável por atualizar conjunto de dados. <br />
  <b>PATCH:</b> É responsável por atualizar um dado expecífico. <br />
  <b>DELETE:</b> É responsável por remover dados. <br />
</details>
<br />

<details>
  <summary>O que são Status Code</summary>
  São respostas do API. <br />
  <b>100 - 199:</b> Informativo. <br />
  <b>200 - 299:</b> Sucesso. <br />
  <b>300 - 399:</b> Redirecionamento. <br />
  <b>400 - 499:</b> Erro no Cliente. <br />
  <b>500 - 599:</b> Erro no Servidor. <br />
</details>
<br />

<details>
  <summary>O que API</summary>
  Application Programing Interface / Interface de Programação da Aplicação. <br />
  É o sistema sem a parte visual. Possui toda a regra de negócio e processos da aplicação. <br />
  Utiliza servidor de aplicação como <b>ExpressJS</b> e <b>NextJS</b> para comunicação entre cliente e servidor com verbos HTTP (GET, POST, PUT, PATCH e DELETE). <br />
  As requisições são retornadas em Text/JSON. <br />
  Exemplo: WhatsApp usa API de lista de contatos do telefone. <br />
</details>
<br />

<details>
  <summary>O que JSON JS Object Notation</summary>
  É o meio de comunicação mais utilizado atualmente. <br />
</details>
<br />

<details>
  <summary>Express</summary>
  É um framework back-end que criar servidor web. <br />
  Permite criar rotas e padrão MVC. <br />
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
  <summary>O que são body, params e query</summary>
  Os dados podem ser transportados de diferentes amneiras. <br />
  <b>params:</b> São os parêmetros da requisição, são utilizados para solicitar alguma informação expecífica, com ID dos usuários ou produtos. <br />
  <b>body:</b> São os dados do formulário, geralmente para inserir dados no DB. <br />
  <b>query:</b> São os dados da URL. geralmente para filtrar informações.<br />
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
  São variáveis que devem armazenar valores sensíveis (keys DBs, tokens, ip DBs, etc.). <br />
  *Não deve ir para o github. <br />
  <b>.env-local:</b> Utilizado em ambiente local. <br />
  <b>.env:</b> Utilizado em todos ambientes (local / prod). <br />
  O script <b>--env-file=.env</b> disponibiliza .env para o NodeJS. É preciso instalar definições de tipos do NodeJS. <b>npm i @types/node -D</b>. <br />
  É necessário iniciar arquivo de config do TypeScript <b>tsc --init</b>. <br />
</details>
<br />

<details>
  <summary>O que são Middlewares</summary>
  São funções que ficam entre a requisição do usuário e a resposta da aplicação. Ou seja, é um intermediador que faz uma checagem e redireciona de acordo com as informações recebidas. <br />
  Exemplo: Segurança de bar verifica se cliente tem mais de 18 anos para deixar entrar ou não. <br />
</details>
<br />
