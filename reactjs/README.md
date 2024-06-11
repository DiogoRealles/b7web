![ReactJS](./cover.png)

# ReactJS

│src
├───app
│ ├───layout
│ ├───page
│ └───contexts
│ │ ├───contextUser.tsx
└───components

<details>
  <summary>O que é ReactJS</summary>
  É uma library / caixa de ferramenta para construção de UI.<br>
  Principais conceitos: componentes, props, states, hooks.<br>
  <b>npx create-next-app@latest</b>
</details>
<br>

<details>
  <summary>Componentes</summary>
  São bloco de códigos que podem ser reutilizados em diferentes partes do projeto para montar o projeto junto com outros componentes.<br>
  São funções que retornam <b>JSX</b>.<br>
</details>
<br>

<details>
  <summary>JSX</summary>
  São funções que retornam HTML + JS + CSS in JS.<br>
  <pre>
    <code>
      const component01 = () => {
        return (
          &lt;button style={{'color: red;'}} onClick={() setCount(count => count + 1)}>
          + 1
          &lt;/button>
        )
      }
    </code>
  </pre>
</details>
<br>

<details>
  <summary>Props</summary>
  São propriedades / valores que os componentes enviam de suas instâncias para os componentes classes para renderizar valores.<br>
  <pre>
    <code>
      &lt;h1 text="Title Section"/>
      const component01 = (props) => {
        return (
          &lt;h1>{text}&lt;/h1>
        )
      }
    </code>
  </pre>
</details>
<br>

<details>
  <summary>States</summary>
  São variáveis especiais no ReactJS que ao sofrerem uma atualização, atualizam valos no componente.<br>
  <b>state:</b> Variável especial que armazena um valor.<br>
  <b>setStater:</b> Função que atribui e atualiza o valor no state.<br>
  <pre>
    <code>
      const component01 = () => {
        import {state} from 'react';
        const [count, setCount] = useState(0);
        return (
          &lt;button style={{'color: red;'}} onClick={() setCount(count => count + 1)}>
          + 1
          &lt;/button>
        )
      }
    </code>
  </pre>
</details>
<br>

<details>
  <summary>Hooks</summary>
  São funções expeciais no ReactJS.<br>
  Possuem uma funcionalidade específica.</br>
  <pre>
    <code>
      import {useEffect} from 'react;
      const component02 = () => {
        useEffect(() => {
          fecth(..)
          ...
        }, []);
        return (
          &lt;ul>
            &lt;li>
            data.map(() => (
              ...
            ))
            &lt;/li>
          &lt;/ul>
        )
      }
    </code>
  </pre>
</details>
<br>

# ReactJS

<details>
  <summary>O que é ReactJS</summary>
É uma lib JS usada no desenvolvimento de UI em SPAs, seu princípio é de componentização, ou seja, pedaços de códigos formando um sistema maior. <br />

</details>

<details>
  <summary>Starting project ReactJS</summary>
`npm create vite@latest`
</details>

<details>
  <summary>Componentes</summary>

São blocos de códigos que executam determinado processo e podem ser reutilizados, diminuindo sua complexidade e permitindo que cada componente empregado seja focado em apenas uma funcionalidade ou um conjunto de funcionalidades semelhantes. <br />
É uma função que retorna **JSX**. <br />
`JSX / TSX`: São arquivos que misturam HTML + JS + CSS in JS. Processam propriedades e geram um resultado. <br />

</details>

# Props

São valores / funções passados de um componente instanciado para um componente classe / model. <br />

# hooks

São funções especiais do ReactJS. Existem diversos hooks: para guardar e atualizar valores, iniciar componentes, atualizar componentes. contextos e muito mais. <br />

# States

São "variáveis" especiais do ReactJS que guardam e atualizam valores e atualizam componentes. <br />

`states`: Gurda um determinado valor inicialmente. <br />
`setters`: Atualiza o valor do state inicial. <br />

# useEffect

Hook que inicial um processo, e pode atualizar o componente quando states no array de dependências são atualizados. <br />

`useEffect`: Hook que inicia ou atualiza o componente. <br />
`função de callback`: Onde executa o processo quando Effect é iniciado. <br />
`array de dependência`: Valores que o Effect monitora para atualizar o componente. <br />
`cleanUp`: Retorno do Effect, pode ser usado para finalizar um processo do Effect. <br />

# children

Indica que o componente poderá receber um componente interno. <br />

```js
{childred}: React.ReactNode;
```

# Renderização condicional

Utilizando `&&` para renderizar ou não um componente, a depender do valor booleano. <br />

```js
{
  loading && <p>Loading...</p>;
}
```

# Renderização de listas

Percorrendo um array dentro de um trecho / bloco de código JS com `{ }`. É necessário indicar uma key com valor único para o ReactJS saber a ordem da renderização. <br />

```js
<ul>
  {
    arr.map((item, index) => <li key={index}>{item.name}</li>);
  }
</ul>
```

# Eventos

`onClick`: Dispara um evento ao clicar em algum elemento monitorado. <br />

```js
<button onClick={() => setCountPlus((count) => count + 1)}>+ 1</button>
```

`onChange`: Dispara um evento na alteração dos valores do elemento. <br />

```js
<input onChange={({ target }) => setName(target.value)} />
```

# Reducers

`action`: . <br />
`type`: . <br />
`payload`: . <br />

# Context

É uma forma de compartilhar / prover dados globalmente pela aplicação entre componentes e sub-componentes, evitando **drop drill**. <br />

`createContext()`: Cria o contexto. <br />
`useContext()`: Usa o contexto onde chamado, recebe ocontexto desejado como parâmetro. <br />
`.Provider`: Compartilha / Provê os os dados para os componnetes filhos. <br />

# custom hooks

São hooks customizados. Usados para DRY - D'nt Repeat Yourself , ou seja, não repetir o código várias vezes em vários locais diferentes. <br />

# Requisições no React

Requisição é uma funcionalidade que consulta algum dado em algum serviço externo API / DB. <br />
Ex: Consultar nota de filmes no TMDB e adicionar ao meu projeto. <br />

# Métodos HTTP

São diretrizes para comunicação entre máquinas. <br />

`GET`: Pega dados.<br />
`POST`: Insere dados.<br />
`PUT`: Atualiza conjunto de dados.<br />
`PATCH`: Atualiza dado expecífico.<br />
`DELETE`: Deleta dados.<br />
`fetch`: Funcionalidade JS que pega os dados do servidor / endpoint.<br />

`req.params`: São parâmetros da URL / endpoint. <br />
`req.body`: São dados enviados pelo corpo / form. <br />
`req.query`: São parametros de consulta da URL / endpoint. <br />

# Axios

É uma lib JS que facilita uso de requisições. Permite centralizar configuração de requisições do projeto. <br />
`npm i axios`

```js
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
```

# TanStack Query / React Query

É uma lib que auxilia no fetching, cache, sincronizar e atualizar dados de state. Cria um provider para compartilhar e sincronizar states. <br />
Ex: Ao acessar página de usuários, o sistema faz fetch dos dados, indo para outra página qualquer e voltando o sistema faz novamente uma request. Com **TanStack Query** é feito um cache dos dados dos usuários e ao acessar pela segunda vez, não é feito uma nova request. Caso algum dado tenha sido atualizado o TanStack Query identifica sincroniza e atualiza. <br />

# Provider

Provider do **TanStack Query** deve estar no componente de maior hierarquia da página. <br />

# TanStack Query / React Query (DevTools)

É uma ferramenta auxiliar que mostra mais dados. <br />
`<ReactQueryDevtools />`: É um componente que pode ir no root das páginas ou após o children de providers. <br />

# React Rook Form

É um gerenciado de formulários.<br>
Possui diversos hook para lidar com states e valores dos campos de formulário.<br>
Permite aplica validação para cada campo do formulário.<br>
<b>handleSubmit:</b> Faz validação dos dados.<br>
<b>register:</b> Registra / "associa" um campo nomeado com um tipo.<br>
<b>control:</b> Associa um campo com o useForm do componente.<br>
<b>SubmitHandler:</b> Lida com os valores dos inputs ao serem validados pelo handleSubmit.<br>
<b>formState:</b> Possui bjetos como: {errors}, indicando qual campo precisa de atenção do usuário.<br>
<b>useController:</b> Ajuda a lidar com os valores dos inputs componentizados recebendo as props do componente.<br>

# ZOD

É uma lib / ferramenta de schema validation, ou seja, agrupa em um schema a validação dos campos.<br>
Valida os tipos e padrões que um campo pode ter: campo deve ser string e ter n# tal de characteres.<br>
