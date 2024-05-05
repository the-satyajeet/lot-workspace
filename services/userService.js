import api from './api';

const userService = {
  // Function to register a new user
  registerUser: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Function to login a user
  loginUser: async (email, password) => {
    try {
      const response = await api.post('/users/login', { email, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Function to fetch user profile data
  getUserProfile: async (token) => {
    try {
      const response = await api.get('/users/profile', {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Function to update user profile data
  updateUserProfile: async (token, userData) => {
    try {
      const response = await api.put('/users/profile', userData, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  
  
};

export default userService;