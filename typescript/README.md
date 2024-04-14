![TypeScript](./cover.png)

# TypeScript

<details>
  <summary>O que é TypeScript</summary>
  É um superset / conjunto de ferramentas para JavaScript, ou seja, adiciona tipagem estática em variáveis, em parâmetros de funções, em retorno de funções e adiciona features extras. Browsers e NodeJS não compreendem TS, é preciso compilar TS para JS.<br />
</details>
<br />

<details>
  <summary>Vantagens</summary>
  Ajuda na inteligência da IDE em projetos com TS, indicando quais são as opções de variáveis e métodos para determinado código. Evitar erros já em ambiente de desenvolvimento, capturando erros de tipos de váriáveis inexperados.<br />
</details>
<br />

<details>
  <summary>Config. TS</summary>
  Intalando TS no projeto / global e checando versão do TS.<br>
  <pre>
    <code>
      npm i typescript -g
      tsc -v
    </code>
  </pre>
  Comando para gerar o arquivo de config. do TS.<br>
  <pre>
    <code>
      npm init -y
      tsc --init
    </code>
  </pre>
  <b>module:</b> Indica o tipo de export e import (module.exports e require / export e import).<br>
  <b>rootDir: './src':</b> Indica onde se encontra o arquivo inicial.<br>
  <b>outDir: './dist':</b> Indica onde será gerado os arquivos compilados.<br>
  <b>target</b>: Qual versão do JS será compilado (ES5, ES6, ESNext).<br>
  <b>lib []:</b> Qual library TS irá utilizar.<br>
  <b>noEmmitOnError:</b> Não compila caso tenha algum erro em algum arquivo TS.<br>
  <b>removeComments:</b> Remove comnentários na hora de compilar o JS.<br>
  Executando TS no NodeJS com <b>TSX</b>.<br>
  <pre>
    <code>
      npm i tsx
      "server-ts": "tsx --no-warnings --watch src/server.ts"
    </code>
  </pre>
</details>
<br />

<details>
  <summary>Adoção</summary>
  Principais frameworks como Angular, Vue, React e NodeJS já adotaram TS como uso padrão no futuro.<br />
  Também tem sido adotado pela comunidade de desenvolvedores e grandes empresas da tecnologia como: <b>MANGUS</b> - <b>Microsoft,  Amazon, Nextflix, Google, Uber, Spotify</b> e muitas outras.<br>
</details>
<br />

<details>
  <summary>Tipagem estática & Tipagem por inferência</summary>
  TS permite tipar as variáveis explicitamente determinando os tipos de dados.<br>
  É possível deixar o próprio TS tipar as variáveis através dos tipos informados.<br>
  <pre>
  <code>
    const firstname: string = "Diogo"
    console.log(fullname); Diogo
    console.log(typeof fullname); string
    const brandCar = "Ford";
    console.log(brandCar); // Ford 
    console.log(typeof brandCar); string
  </code>
  </pre>
</details>
<br />

<details>
  <summary>Tipos Primitivos</summary>
  <small>Number</small>
  <pre>
  <code>
    const age: number = 34;
    const cold: number = -16;
    const price: number = 19.75;
    const balance: number = -247.03;
    console.log(age); // 34
    console.log(cold); // -16
    console.log(price); // 19.75
    console.log(balance); // -247.03
  </code>
  </pre>
  <small>String</small>
  <pre>
  <code>
    const lastname: string = "Realles";
    console.log(lastname); // Realles
  </code>
  </pre>
  <small>Boolean</small>
  <pre>
  <code>
    const isOpen: boolean = false;
    const door: boolean = isOpen ? true : false;
    console.log(isOpen); // false
    console.log(door); // false
  </code>
  </pre>
  <small>Array (number, string, boolean) e Tupla</small>
  <pre>
  <code>
    const arrNumber: number[] = [54, 5.7, -192, -7.9];
    const arrString: string[] = ["Gears", "Forza", "Son of Rome"]
    const arrBoolean: boolean[] = [10 > 5, false, true];
    const arrTuple: [number, string, boolean] = [2002, "Halo 5", true];
    console.log(arrNumber); // false
    console.log(arrString); // true
    console.log(arrBoolean); // true
    console.log(arrTuple); // [2002, "Halo 5", true]
  </code>
  </pre>
</details>
<br />

<details>
  <summary>Funções (parâmetros e retornos)</summary>
  TS permite tipar os parâmetros das funções e seu retono, ou seja, quais tipos vão entrar e qual tipo de saída.<br>
  <pre>
  <code>
    function sum(n1: number, n2: number): number {
      return n1 + n2;
    }
    console.log(sum(7, 9)); // 16
    function greeting(greet: string, name: string = "convidado"): string {
      return greet + name;
    }
    console.log(greeting("Seja bem vindo sr: ", "Diogo")); // Seja bem vindo sr: Diogo
    function isLoading(statusLoading: boolean) {
      if (statusLoading) {
        return "Loading...";
      } else {
        return "Loaded.";
      }
    }
    console.log(isLoading(false)); // Loaded
  </code>
  </pre>
</details>
<br />
