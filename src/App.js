import './App.css';
import charicon from './pics/sorcerer_char_pic.png';
import classicon from './pics/sorcerer_icon.png';
import CharSheet from './components/CharSheet/CharSheet';

function App() {
  const char_object = {
    charpic: charicon,
    name: "Scottishwarlord",
    sex: "Male",
    race: "Earth Genasi",
    level: 3,
    classpic: classicon,
    class: "Sorcerer",
    subclass: "Draconic Bloodline",
    CurrentExp: 900,
    LevelUp: 2700
  };

  const stats = [
    {ID: 1, StatName: "INT", StatNum: "12", Modifier: "+1"},
    {ID: 2, StatName: "STR", StatNum: "14", Modifier: "+2"},
    {ID: 3, StatName: "CON", StatNum: "10", Modifier: "+0"},
    {ID: 4, StatName: "CHA", StatNum: "15", Modifier: "+2"},
    {ID: 5, StatName: "DEX", StatNum: "10", Modifier: "+0"},
    {ID: 6, StatName: "WIS", StatNum: "14", Modifier: "+2"},
  ];
  return (
    <div className="App">
      <CharSheet stats={stats} char_object={char_object}/>
    </div>
  );
}

export default App;
