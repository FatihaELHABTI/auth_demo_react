import axios from "axios";

const API_URL = "http://localhost:3000";

export const registerUser = async (userData) => {
  // Vérifier si l'utilisateur existe déjà avec le login
  const existingUsers = await axios.get(
    `${API_URL}/users?login=${userData.login}`
  );

  if (existingUsers.data.length > 0) {
    throw new Error("User already exists");
  }

  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  try {
    // Rechercher par login
    const response = await axios.get(
      `${API_URL}/users?login=${credentials.login}`
    );

    // Vérifier si un utilisateur a été trouvé
    if (response.data.length === 0) {
      throw new Error("Invalid credentials");
    }

    // Vérifier le mot de passe manuellement
    const user = response.data.find(
      (user) => user.password === credentials.password
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    // Améliorer la gestion des erreurs
    if (error.message === "Invalid credentials") {
      throw error;
    }

    // Si l'erreur est liée au réseau
    if (error.message.includes("Network Error") || !error.response) {
      throw new Error("Network error: Please check if json-server is running");
    }

    throw new Error("Login failed: " + error.message);
  }
};
