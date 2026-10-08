## Como correr

Então para correr a app React é necessário executar na pasta correta os seguintes comandos no Git Bash:
- cd client
- npm install
- npm run server

## Respostas

### Onde é que o HTML foi construído em cada um? Como é que sabes?

O Express abre na porta 3000, no caso aqui o HTML é construído no servidor, sei disto porque ao abrir o View Source, todo o código HTML estruturado com as cartas e dados da página já vem preenchido diretamente no documento enviado pelo servidor.
Já o React abre na porta 5173 e o HTML é construído no próprio cliente e sei isto porque o View Source exibe apenas um esqueleto de página praticamente vazio (uma <div id="root">).

##  Quantos requests faz cada um dos sites quando filtras as cartas ou mudas de página? Porquê essa
diferença?

O Express faz apenas 1 request de cada vez ao servidor cada vez que filtramos ou mudamos a página sendo uma Multi-Page Application, o browser descarta a página atual e recarrega todo o documento do servidor.
Já o React nem sequer faz requests ao filtrar as cartas, sendo uma Single Page Application, todos os dados já se encontram carregados na memória do browser no array de objetos. A filtragem é executada localmente via código com JavaScript (cards.filter), alterando o estado e atualizando o ecrã instantaneamente sem comunicar com o servidor.

Está tudo correto.
