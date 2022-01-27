import React, { useEffect } from "react";
import "./quizStyle.css";
import { useState } from "react";
import { quizData } from "./quizData";
import Pokedex from "../../Components/Pokedex/Pokedex";
import DragDrop from "../../Components/DragDrop/DragDrop";

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [done, setDone] = useState(false);

  const [score, setScore] = useState(0);

  //Nhận dữ liệu để chuẩn bị gửi cho component con là DragDrop.js và Pokedex.js.
  const [getArray, setGetArray] = useState([]);
  const [getRandomArray, setGetRandomArray] = useState();

  //Xử lý re-render pokemon và đáp án khi câu hỏi thay đổi.
  useEffect(() => {
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const pokemon1 = random(1, 30);
    const pokemon2 = random(31, 60);
    const pokemon3 = random(61, 90);
    const pokemon4 = random(91, 120);
    const pokemon5 = random(121, 150);
    const pokemon6 = random(151, 180);

    const pokemonArray = [
      pokemon1,
      pokemon2,
      pokemon3,
      pokemon4,
      pokemon5,
      pokemon6,
    ];

    const randomPokemonArray =
      pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

    setGetArray(pokemonArray);
    setGetRandomArray(randomPokemonArray);
  }, [currentQuestion]);

  //Xử lý nhận dữ liệu (id của pokemon sau khi drop) từ component con là Pokedex.js
  const [message, setMessage] = useState();

  const callbackFunction = (childData) => {
    setMessage(childData);
  };
  //===============================================================================

  //Xử lý next câu hỏi
  const handleNextQuestion = () => {
    const next = currentQuestion + 1;

    //set điều kiện câu hỏi hiện tại không được lớn hơn độ dài mảng
    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      setDone(!done);
    }

    //Cộng điểm cho người chơi khi chọn đáp án đúng.
    if (Number(message) === getRandomArray) {
      setScore(score + 1);
    }

    //Xử lý di chuyển hình pokemon về trạng thái ban đầu sau khi next câu hỏi.
    const abc1 = document.getElementById(`${getArray[0]}`);
    const abc2 = document.getElementById(`${getArray[1]}`);
    const abc3 = document.getElementById(`${getArray[2]}`);
    const abc4 = document.getElementById(`${getArray[3]}`);
    const abc5 = document.getElementById(`${getArray[4]}`);
    const abc6 = document.getElementById(`${getArray[5]}`);

    const dragElement1 = document.querySelector(".empty1");
    const dragElement2 = document.querySelector(".empty2");
    const dragElement3 = document.querySelector(".empty3");
    const dragElement4 = document.querySelector(".empty4");
    const dragElement5 = document.querySelector(".empty5");
    const dragElement6 = document.querySelector(".empty6");

    dragElement1.appendChild(abc1);
    dragElement2.appendChild(abc2);
    dragElement3.appendChild(abc3);
    dragElement4.appendChild(abc4);
    dragElement5.appendChild(abc5);
    dragElement6.appendChild(abc6);
  };

  //Reset trò chơi.
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="header">
        <h2>
          {!done
            ? quizData[currentQuestion].question
            : `You answered ${score}/${quizData.length} questions correctly`}
        </h2>

        {!done ? (
          <div>
            <DragDrop pokemonArray={getArray} />
            <Pokedex
              pokemonArray={getArray}
              randomPokemonArray={getRandomArray}
              parentCallback={callbackFunction}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Nếu hết câu hỏi thì hiện nút Reload */}
      {!done ? (
        <button onClick={handleNextQuestion}>Submit</button>
      ) : (
        <button onClick={handleReload}>Reload</button>
      )}
    </div>
  );
}

export default Quiz;
