import axios from "axios";

const baseUrl = "http://localhost:3000/api";

const API = async (url, method = "POST", data = null) => {
  const storedAuth = JSON.parse(localStorage.getItem("auth"));
  const token = storedAuth?.token;

  try {
    const res = await axios({
      method,
      url: baseUrl + url,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      data
    });

    return res.data;
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
    throw error; // ✅ let caller handle it
  }
};

export default API;