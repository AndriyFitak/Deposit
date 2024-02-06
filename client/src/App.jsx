// App.jsx
import React from "react";
import { useDispatch } from "react-redux";  
// import DepositForm from "./Components/DepositForm";
import DepositList from "./Components/DepositList";
import DepositModal from "./Components/DepositModal.jsx"; 
import { openModal } from "./redux/modalReducer";  

const App = () => {
  const dispatch = useDispatch();  // Make sure to declare useDispatch

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <DepositModal />
      {/* <DepositForm /> */}
      <DepositList />
      
    </div>
  );
};

export default App;

