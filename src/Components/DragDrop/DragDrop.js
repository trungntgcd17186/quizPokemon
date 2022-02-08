import React from "react";
import "./style.css";

function DragDrop(props) {
  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
  console.log(props.pokemonArray);

  return (
    <div className="containerDrag">
      <div className="empty1" onDrop={(e) => drop(e)}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonArray[0]}.svg`}
          id={props.pokemonArray[0]}
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt=""
        />
      </div>
      <div className="empty2" onDrop={(e) => drop(e)}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonArray[1]}.svg`}
          id={props.pokemonArray[1]}
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt=""
        />
      </div>
      <div className="empty3" onDrop={(e) => drop(e)}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonArray[2]}.svg`}
          id={props.pokemonArray[2]}
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt=""
        />
      </div>
      <div className="empty4" onDrop={(e) => drop(e)}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonArray[3]}.svg`}
          id={props.pokemonArray[3]}
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt=""
        />
      </div>
      <div className="empty5" onDrop={(e) => drop(e)}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonArray[4]}.svg`}
          id={props.pokemonArray[4]}
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt=""
        />
      </div>
      <div className="empty6" onDrop={(e) => drop(e)}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonArray[5]}.svg`}
          id={props.pokemonArray[5]}
          draggable="true"
          onDragStart={(e) => drag(e)}
          alt=""
        />
      </div>
    </div>
  );
}

export default DragDrop;
