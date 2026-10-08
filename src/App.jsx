// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Denis", type: "Toze", attack: 10, defense: 10 },
  { name: "Oligarca Russo", type: "Espião", attack: 5, defense: 8 },
  { name: "Raodrigo Araujo", type: "Sardinha", attack: 1, defense: 1 },
];

function App() {
  return (
    <ul>
      {cards.map((card) => (
        <Card key={card.name} {...card} />
      ))}
      <p>Tenho {cards.length} cartas</p>
    </ul>
    

  );
     <div>
        <button onClick={() => setFilter("Todas")}>Todas</button>
        <button onClick={() => setFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setFilter("Feitiço")}>Só feitiços</button>
      </div>
}

export default App;
