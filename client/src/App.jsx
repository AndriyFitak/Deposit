// App.js
import React from "react";
import DepositForm from "./Components/DepositForm";
import DepositList from "./Components/DepositList";


const App = () => {
  return (
    <div>
      <DepositForm />
      <DepositList />
    </div>
  );
};

export default App;
