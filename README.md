--------------------------------------------------------------------------------
<h1>Se��o 01 - Introdu��o</h1>

* Foram feitas as instala��es do MongoDB, NodeJS, Cmder e VSCode como editor.
* Para executar o MongoDB � necess�rio colocar o diret�rio /bin do mongo db nas vari�veis de ambiente (windows), e criar os diret�rios data/db na raiz do sistema.

----------------------------------------------------------------------------------
<h1>Se��o 02 - Webpack</h1>

<h2>Vis�o Geral e Instala��o</h2>

* O Webpack � um bundler de m�dulo JavaScript de c�digo aberto. O Webpack utiliza m�dulos com depend�ncias e gera ativos est�ticos representando esses m�dulos.

<img src="imgs/01.PNG"/>

* O comando "npm init -y" cria o arquivo package.json, que � como o descritor do nosso projeto que ir� executar as dependencias para o node.

* Instalar a dependencia do webpack e do webpack-dev-server
npm i --save-dev webpack@1.14.0 webpack-dev-server@1.16.2

<h2>Testando a configura��o</h2>

```json
{
  
"name": "exercicios_webpack",
  
"version": "1.0.0",
  
"description": "",
  
"main": "index.js",
  
"scripts": {
    "dev": "webpack-dev-server --progress --colors --inline --hot"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.16.2"
  }
}


```
* O atributo scripts serve para inserir comando no npm para que sejam executados
	* --progress: mostra o progresso
	* --colors: colorido
	* --inline: 
	* --hot: sempre quando fizer uma atualiza��o ele atualiza ligado

* npm run dev

<h2>Usando o Sistema de M�dulos do CommonsJS</h2>

index.js
```js
const logger = require('./logger') // PONTO (.) PARA REFER�NCIAR ARQUIVOS FORA DO DIRET�RIO node_modules

logger.info('Usando o padr�o CommonsJS');

```

logger.js
```js
function info(text){
    console.log(`INFO: ${text}`);
}

//module.exports = {info : info}
module.exports = { info } // ECMAScript 6 - ELE PEGA O VALOR E A KEY DO OBJETO

```

<h2>Import�ncia da refer�ncia</h2>
* Para gerar o arquivo bundle.js � apenas necess�rio executar o .\node_modules\.bin\webpack
* O arquivo bundle.js sempre ir� pegar os arquivos que est�o sendo refer�nciados a partir do index.js.


<h2>Usando EcmaScript 2015 sem o Babel</h2>

```js
export default class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Pessoa: ${this.nome}`;
    }

}


import Pessoa from './pessoa';

const pessoa = new Pessoa('Gustavo');
console.log(pessoa.toString());
```

* Sem o Babel, o navegador n�o ir� compreender a sintaxe import e export, por conta disso um transpiler � necess�rio (Babel).

<h2>Usando o Sistema de M�dulos do ES2015 (Babel)</h2>

* No webpack.config.js

```js
const webpack = require('webpack')

//OBJETO QUE REPRESENTA TODA CONFIGURA��O
//QUE QUEREMOS NA APLICA��O
//FAZER TRANSPILE JAVASCRIPT, REACT, IR� ESTAR AQUI
//� NECESS�RIO CRIAR O DIRET�RIO ex PARA COLOCAR O ARQUIVO index.js
module.exports = {
    entry : './ex/index.js',
    output : {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.js:$/,
            loader: 'babel-loarder',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
}
```
