import axios from "axios";

const API_KEY = import.meta.env.VITE_GEOLOCATION_API_KEY;

export const getIp = async (ip) => {
  try {
    const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.error("Erro ao obter detalhes do IP: ", error);
  }
};

