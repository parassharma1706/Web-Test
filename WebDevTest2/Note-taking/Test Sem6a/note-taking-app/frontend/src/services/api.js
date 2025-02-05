import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Backend URL

export const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
});

// Authentication APIs
export const signup = (userData) => api.post("/auth/signup", userData);
export const login = (userData) => api.post("/auth/login", userData);

// Notes APIs
export const getNotes = (userId) => api.get(`/notes/${userId}`);
export const createNote = (noteData) => api.post("/notes", noteData);
export const deleteNote = (noteId) => api.delete(`/notes/${noteId}`);
