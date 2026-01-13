import axios from "axios";

const API_URL = import.meta.env.VITE_API; // <-- Vite syntax

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response || error.message);
    throw error.response?.data || { message: "Something went wrong!" };
  }
};
