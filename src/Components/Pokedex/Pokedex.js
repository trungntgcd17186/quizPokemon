import React from "react";
import { useEffect, useState } from "react";
import "./pokedexStyle.css";
import axios from "axios";

function Pokemon(props) {
  const [datas, setDatas] = useState([]);
  const [type, setTypes] = useState([]);

  const [id, setId] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.pokemonArray]);

  async function fetchData() {
    let response = await axios(
      `https://pokeapi.co/api/v2/pokemon/${props.randomPokemonArray}`
    );
    let datas = await response.data.forms;
    let dataType = await response.data.types[0].type.name;
    let dataId = await response.data.id;
    setDatas(datas);
    setTypes(dataType);
    setId(dataId);
  }

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

    const sendData = () => {
      props.parentCallback(data);
      console.log(data);
    };
    sendData();
  }

  //Xử lý truyền dữ liệu (id của pokemon nhận được sau khi người dùng drop)
  //sang component Cha là Quiz.js
  return (
    <div>
      <div className="poke-container">
        {datas?.map((pokemon, index) => (
          <div
            key={index}
            className="pokemon"
            style={{ backgroundColor: "rgb(222, 253, 224)" }}
          >
            <div
              className="img-container"
              onDrop={(e) => drop(e)}
              onDragOver={(e) => allowDrop(e)}
            ></div>

            <div className="info">
              <span className="number">#{id}</span>
              <h3 className="name">{pokemon.name}</h3>
              <small className="type">
                Type: <span key={index}>{type}</span>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
