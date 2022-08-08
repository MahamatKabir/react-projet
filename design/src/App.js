import {useState} from "react";

function App(){

//state 
const [fruits, setFruit] = useState([
  {id :1 , nom : "orange"},
  {id :2 , nom : "banane"},
  {id :3 , nom : "avocat"},
])
//comportement
const handledelete = (id) => {
  console.log(id)

  //copie d state

 // const fruitsCopy = fruits.slice();
  const fruitsCopy = [...fruits];
  //manupulation

   const fruitUpdate = fruitsCopy.filter(fruit => fruit.id !== id)
  //modifier mon state avec le setter
  setFruit(fruitUpdate);
}
const handlesubmit = (event) => {
    event.preventDefault();
    alert("ajouter");
}
//affichage 
return (
  <div>
    <h1>List des fruits</h1>
    <ul>
      {fruits.map((fruit) => (
        <li key= {fruit.id}>
        {fruit.nom} 
        <button onClick={() => handledelete(fruit.id)}>X</button>
        </li>
      ))}
    </ul>

    <form  action="submit" onSubmit ={handlesubmit}>
      <input type="text"  placeholder = "ajouter des fruits"/>
      <button>Ajouter + </button>
    </form>
  </div>
)
}





export default App;

//gestion des formulaire
//1.creation des formulaires
//2.soumission des formulaires
//3.collecte du donneé du formulaire
