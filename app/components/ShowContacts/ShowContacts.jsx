"use client";
import { useEffect, useState } from "react";
import styles from "./ShowContacts.module.css";
import { getAllPeople, deletePersonById } from "@/app/api/person";
import Image from "next/image";
import remove from "../../assets/remove.png";

export default function ShowContacts() {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  const getPeople = async () => {
    try {
      const response = await getAllPeople();
      if (response) {
        setPeople(response.data["$values"]);
      } else {
        throw new Error("No response from API");
      }
    } catch (err) {
      setError("Não foi possível carregar os dados da API.");
    }
  };

  const deletePerson = async (id) => {
    try {
      const response = await deletePersonById(id);
      if (response.status === 204) {
        setPeople((prevPeople) =>
          prevPeople.filter((person) => person.pessoaId !== id)
        );
      } else {
        throw new Error("Erro ao excluir a pessoa.");
      }
    } catch (err) {
      setError("Não foi possível excluir a pessoa.");
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Todos os Contatos:</h1>
      <div className={styles.containerSearch}></div>
      {error && <div className={styles.error}>{error}</div>}
      {people?.map((person) => (
        <div key={person.pessoaId} className={styles.containerResults}>
          <button
            className={styles.removeButton}
            type="button"
            onClick={() => deletePerson(person.pessoaId)}
          >
            <Image src={remove} alt="remove icon" width={32} height={32} />
          </button>
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
