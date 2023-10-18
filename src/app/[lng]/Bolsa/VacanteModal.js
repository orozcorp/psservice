"use client";
import { useState } from "react";
import Modal from "../../components/atoms/Modal";
import VacanteData from "./VacanteData";
import VacanteForm from "./VacanteForm";
import VacanteThankYou from "./VacanteThankYou";
export default function VacanteModal({ display, setDisplay, vacanteActive }) {
  const [apply, setApply] = useState("info");

  if (!vacanteActive?._id) {
    return;
  }
  return (
    <Modal
      display={display}
      setDisplay={setDisplay}
      title={vacanteActive?.nombreVacante}
    >
      {{
        info: () => (
          <VacanteData
            apply={apply}
            setApply={setApply}
            vacanteActive={vacanteActive}
          />
        ),
        candidate: () => (
          <VacanteForm
            setDisplay={setDisplay}
            vacanteActive={vacanteActive}
            setApply={setApply}
          />
        ),
        thankyou: () => (
          <VacanteThankYou setDisplay={setDisplay} setApply={setApply} />
        ),
      }[apply]?.()}
    </Modal>
  );
}
