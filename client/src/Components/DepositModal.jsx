// DepositModal.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalReducer";
import DepositForm from "./DepositForm";

const DepositModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.showModal);
    console.log(isModalOpen)
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={handleCloseModal}>Close Modal</button>
            <DepositForm />
          </div>
        </div>
      )}
    </>
  );
};

export default DepositModal;
