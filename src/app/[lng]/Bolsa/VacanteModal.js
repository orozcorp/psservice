"use client";
import { useState } from "react";
import Modal from "../../components/atoms/Modal";
import VacanteData from "./VacanteData";
import VacanteForm from "./VacanteForm";
export default function VacanteModal({ display, setDisplay, vacanteActive }) {
  const [apply, setApply] = useState(false);

  if (!vacanteActive?._id) {
    return;
  }
  return (
    <Modal
      display={display}
      setDisplay={setDisplay}
      title={vacanteActive?.nombreVacante}
    >
      {apply ? (
        <VacanteForm
          setDisplay={setDisplay}
          vacanteActive={vacanteActive}
          setApply={setApply}
        />
      ) : (
        <VacanteData
          apply={apply}
          setApply={setApply}
          vacanteActive={vacanteActive}
        />
      )}
    </Modal>
  );
}
