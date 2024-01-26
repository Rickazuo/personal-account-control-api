"use client";
import { useEffect, useState } from "react";
import styles from "./ShowContacts.module.css";
import { getAllPeople } from "@/app/api/person";

export default function ShowContacts() {
  const [people, setPeople] = useState([]);
  const getPeople = async () => {
    const response = await getAllPeople();
    if (response) {
      setPeople(response.data["$values"]);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Todos os Contatos:</h1>
      <div className={styles.containerSearch}></div>
      {people?.map((person) => (
        <div className={styles.containerResults}>
          <div className={styles.containerResultsPerson}>
            <span className={styles.name}>{person?.nome}</span>
            <div></div>
            <span className={styles.cpf}>
              <strong>CPF: </strong> <p>{person?.cpf}</p>
            </span>
            <span className={styles.birthday}>
              <strong>Data de Nascimento: </strong>
              <p>{person?.dataDeNascimento}</p>
            </span>
            <span className={styles.isActive}>{person?.estaAtivo}</span>
          </div>
          <div className={styles.containerResultsPerson}>
            <p className={styles.phones}>Telefones:</p>
            <div></div>
            {person?.telefones["$values"].map((phone) => (
              <div key={phone["$id"]}>
                <div className={styles.phoneType}>{phone.tipo}</div>
                <div className={styles.phoneNumber}>{phone.numero}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
