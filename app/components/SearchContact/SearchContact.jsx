"use client";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from "./SearchContact.module.css";
import { getPersonByName } from "@/app/api/person";

export default function SearchContact() {
  const [worker, setWorker] = useState();
  const [searchName, setSearchName] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setSearchName(value);
  };

  const submitSearch = async () => {
    const response = await getPersonByName(searchName);
    if (response) {
      setWorker(response.data["$values"][0]);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.titleSearch}>Buscar Contato</h1>
      <div className={styles.containerSearch}>
        <Input onChange={onChange} value={searchName} />
        <button
          className={styles.buttonSearch}
          onClick={submitSearch}
          type="button"
        >
          PESQUISAR
        </button>
      </div>
      {worker && (
        <div className={styles.containerResults}>
          <div className={styles.containerResultsPerson}>
            <span className={styles.name}>{worker?.nome}</span>
            <div></div>
            <span className={styles.cpf}>
              {" "}
              <strong>CPF: </strong> <p>{worker?.cpf}</p>
            </span>
            <span className={styles.birthday}>
              <strong>Data de Nascimento: </strong>
              <p>{worker?.dataDeNascimento}</p>
            </span>
            <span className={styles.isActive}>{worker?.estaAtivo}</span>
          </div>
          <div className={styles.containerResultsPerson}>
            <p className={styles.phones}>Telefones:</p>
            <div></div>
            {worker?.telefones["$values"].map((phone) => (
              <div key={phone["$id"]}>
                <div className={styles.phoneType}>{phone.tipo}</div>
                <div className={styles.phoneNumber}>{phone.numero}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
