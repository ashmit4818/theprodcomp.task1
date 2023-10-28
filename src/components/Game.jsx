import { useState } from "react";

export default function Game() {
  const [hormov, sethormov] = useState(0);
  const [vermov, setvermov] = useState(0);
  return (
    <div class="main_container">
      <button
        class="horizontalbtn"
        onClick={() => setvermov(vermov - 50)}
        disabled={vermov === 0}
      >
        Up
      </button>
      <div class="container">
        <button
          class="verticalbtn"
          onClick={() => sethormov(hormov - 50)}
          disabled={hormov === 0}
        >
          Left
        </button>
        <div class="main">
          <div class="gamebox" style={{ left: hormov, top: vermov }}></div>
        </div>
        <button
          class="verticalbtn"
          onClick={() => sethormov(hormov + 50)}
          disabled={hormov === 450}
        >
          Right
        </button>
      </div>
      <button
        class="horizontalbtn"
        onClick={() => setvermov(vermov + 50)}
        disabled={vermov === 450}
      >
        Bottom
      </button>
    </div>
  );
}
