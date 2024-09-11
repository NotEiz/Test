import axios from "axios";

export const FindPsychologists = async () => {
  const response = await axios.get(`/psychologists`);
  return response.data;
};
