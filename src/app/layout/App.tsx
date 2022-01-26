import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ducks } from "../../demo";
// import Duckitem from "../../Duckitem";
import Main from "./Component/Main";

function App() {
  return (
    <div className="App">
      {/* {ducks.map((item) => (
        <Duckitem item={item} key={item.id} />
      ))} */}
      {/* <ul>
        {employee.map((item: any) => (
          <li key={item.email}>{item.email}</li>
        ))}
      </ul> */}
      <Main></Main>
    </div>
  );
}

export default App;
