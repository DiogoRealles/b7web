# NextJS 12

# O que é NextJS

NextJS é um framework baseado em ReactJS.
Agraga todas as funcionalidades da lib ReactJS com mais features. <br />
Alguns dos seus diferenciais é otimização de SEO pelo seu SSR (Server Side Rendering). <br />
Sistema de rotas embutido via diretórios (sem necessidade de libs de 3º). <br />

# Starting project NextJS

`npx create-next-app@latest`

# Dir pages

NextJS aplica rotas pelo nome dos arquivos/dir que estão detro do dir pages. <br />

```
pages
├─ about
└── index.tsx
├─ products
└── index.tsx

httsp://dominio.com/about
```

# Rotas dinâmicas

Páginas dinâmicas são criadas com [slug / id].tsx.
O parâmetro pode ser pego com hook query

```
App
├─ blog
| ├── [slug]
| └── index.tsx
├─ products
| ├── [slug]
| └── index.tsx
└── contact

```

`const router = useRouter();
const { slug } = router.query;`

# client-side & server-side

**server-side:** Gera o conteúdo (HTML, CSS, JS) no server e envia para o client. <br />

**client-side:** Dispositivo do usuário, que acessa a página. <br />

# CSR, SSR e SSG

**CSR Client-side Rendering:** Renderizações e operações são feitas no device do usuário.<br />

**SSR Server-side Rendering:** Permite trabalhar de 2 formas: <br />

- Ao fazer requisições gera o conteúdo (HTML, CSS e JS) no server e exibe o resultado no device. <br />
- Faz a requisição de conteúdos / componentes principais e exibe no device, conteúdos e componentes secundários é feito pelo device. <br />

Ex: Página de filme, carrega o componente player e o vídeo no server e exibe no device. Logo depois carrega componente de comentários pelo device.
`getServerSideProps`: indica ao NextJS para gerar as páginas no server. <br />

**SSG Static-site Generation:** Usado para páginas estáticas, que não tem dados dinâmicos, São geradas no build do projeto com todos as infos e assets necessários. <br />
Ex: Página de marketing da Netflix. <br />
Ex²: Gera as páginas do blog, com base em uma lista do DB. <br />
`getStaticProps`: que dá acesso aos dados dentro do próprio componente. <br />
`getStaticPaths`: gera uma lista e cachea as páginas mapeadas. <br />
Ex: cada página de post/artigo de um blog. <br />
`fallback`: Possui 3 valores:. <br />
`false`: Caso não encontre a página especificada, manda para 404. <br />
`true`: Caso não encontre a página especificada, faz uma requisiçao no server e renderiza o componente (é possível exibir um loadin...) e exibe a página buscada, caso realmente não exista redirecina para 404. <br />
`bloking`: Caso não encontre a página especificada, faz uma requisiçao no server e renderiza o componente (não é possível exibir um loadin...) e exibe a página buscada, caso realmente não exista redirecina para 404.

# Variáveis de ambiente

São variáveis utilizadas para guardar keys, ip de DB, user, passwors, etc. <br />
Por serem dados sensíveis, devem ficar fora de arquivos públicos. <br />
NextJS já aceita variáveis de ambiente por default em RSC (Reaact Server Component). Que são arquivos com SSG / SSR getStaticPaths, getStaticProps, etc. Poís são funções que pegam dados do server. <br />
Para usar em RCC (React Client Component) é necessário usar pré-fixo: `NEXT_PUBLIC_NAMEVARIABLE=value`

`.env.local`: É o mais priorizado. São keys, dados de acesso que serão usados na máquina local expecífica. Deve ser ignorado no `.gitignore` <br />

`.env.development`: Usados em ambiente de desenvolvimento. <br />

`.env.production`: Usados em ambiente de produção. <br />

`.env`: Serve para todos os tipos de ambiente. <br />

# Script externo

Para adicionar scrit externo no NexJS é necessário utilizar componente do NextJS `<Script src="https://google-analytics.co/analytics.js" />`. <br />
`strategy`: Define como o script ira se comportar, possuí dois valores. <br />
`affterInteractive`: Valor default, que indica que o script será carregado após o componente estar interativo, atribui script no final do body. <br />
`beforeInteractive`: Indica que o script será carregado antes do componente estar interativo, atribui script no inicio do documento com `defer`. <br />
`onLoad`: Executa uma callback function anônima após o carregamento do Script. <br />

# useRouter

Um dos usos é para pegar <br />
`.query`: Utilizado para pegar o parâmetro da URL. <br />
`.pathname`: Mostra a URL que está sendo acessada. <br />
`.isFallback`: Indica se a página (SSG, etc) está usando fallback. Permite adiciona um loading. <br />
`.push()`: Avança para rota indicada no 1º parâmetro, e adiciona no histórico do browser. <br />
`.replace()`: Avança para rota indicada no 1º parâmetro, não adiciona no histórico do browser. <br />

# Link

É um componente do NextJS que permite "carregar / renderizar" um componente e mantém os valores dos states. Também faz um pré-load para agilizar o carregamento do próximo componente. Seu uso é similar a tag âncora de link. <br />

# API - Application Programing Interface

É conjunto de código, de preferência em JSON, utilizado para transmissão e compartilhamento de dados. <br />
Ex: app lista de contato, compartilha dados dos contatos com WhatsApp. <br />

# CORS

É uma proteção, que todos sistemas que acessam uma API tem, permitindo os sistemas externos acessar somente o que é permitido pela API, impedindo que a API seja acessada por qualquer um. <br />
Em alguns casos é necessário uso de libs de 3º para liberar acesso a API por origens externas. <br />
NextJS possui config. internamente para liberação de acesso a API de origens externas e diversos métodos HTTP (GET, POST, PUT, DELETE, PATCH). <br />
`next.config.js`:

```js
headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, PATCH',
          },
        ],
      },
    ];
  },
```

`query`: São dados vindos pela URL do endpoint. <br />
`body`: São dados vindos do corpo / formulário. <br />
`params`: . <br />

# Status code API

`100 - 199`: Informativo. <br />
`200 - 299`: Sucesso. <br />
`300 - 399`: Redirecionamento. <br />
`400 - 499`: Erro no client. <br />
`500 - 599`: Erro no server. <br />
