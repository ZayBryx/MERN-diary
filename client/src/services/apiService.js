import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchDiary = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/diary`);

    console.log(`URL: ${baseUrl}/diary`);
    if (!data) {
      alert("failed request");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

export const createDiary = async ({ title, content, date }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/diary`, {
      title,
      content,
      date,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

export const fetchOneDiary = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/diary/${id}`);

    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

export const updateDiary = async ({ title, content, date, id }) => {
  try {
    const { data } = await axios.patch(`${baseUrl}/diary/${id}`, {
      title,
      content,
      date,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

export const deleteDiary = async (id) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/diary/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};
