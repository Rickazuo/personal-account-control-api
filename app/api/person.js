import axios, { AxiosResponse } from "axios";
export const baseUrl = "https://localhost:7045/api";


export const getAllPeople = async (
  ) => {
    const response = await axios.get(
      `${baseUrl}/Pessoas/`
    );
    return { data: response.data };
};

export const getPersonByName = async (
    id
    ) => {
      const response = await axios.get(
        `${baseUrl}/Pessoas/${id}`
      );
      return { data: response.data };
  };

export const deletePersonById = async (
    id
    ) => {
      const response = await axios.delete(
        `${baseUrl}/Pessoas/${id}`
      );
      return  response;
  };
