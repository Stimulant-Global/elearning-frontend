import axios from "axios";
import { toast } from "react-toastify";
import { renderValidUrl } from "../utils/constants";
import {
  CREATE_COURSE,
  FETCH_COURSES,
  FETCH_COURSE,
  CREATE_TRANSACTION,
  UPLOAD_FILE,
  USER_SIGNUP,
  USER_LOGIN,
  FETCH_TRANSACTION,
  FETCH_TRANSACTIONS
} from './actionTypes';

export const createCourse = (courseData) => async (dispatch) => {
  try {
    const response = await axios.post(renderValidUrl('/api/courses/create'), courseData);
    dispatch({ type: CREATE_COURSE, payload: response.data });
    toast.success("Course created successfully!");
  } catch (error) {
    toast.error("Failed to create course.");
  }
};

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await axios.get(renderValidUrl('/api/courses'));
    dispatch({ type: FETCH_COURSES, payload: response.data });
  } catch (error) {
    toast.error("Failed to fetch courses.");
  }
};

export const fetchCourse = (id) => async (dispatch) => {
  try {
    const response = await axios.get(renderValidUrl(`/api/courses/${id}`));
    dispatch({ type: FETCH_COURSE, payload: response.data });
  } catch (error) {
    toast.error("Failed to fetch course.");
  }
};

export const createTransaction = (transactionData) => async (dispatch) => {
  try {
    const response = await axios.post(renderValidUrl('/api/transactions/create'), transactionData);
    dispatch({ type: CREATE_TRANSACTION, payload: response.data });
    toast.success("Transaction created successfully!");
  } catch (error) {
    toast.error("Failed to create transaction.");
  }
};

export const uploadFile = (fileData) => async (dispatch) => {
  try {
    const response = await axios.post(renderValidUrl('/api/uploads/upload'), fileData);
    dispatch({ type: UPLOAD_FILE, payload: response.data });
    toast.success("File uploaded successfully!");
  } catch (error) {
    toast.error("Failed to upload file.");
  }
};

export const userSignup = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(renderValidUrl('/api/users/signup'), userData);
    dispatch({ type: USER_SIGNUP, payload: response.data });
    toast.success("User signed up successfully!");
  } catch (error) {
    toast.error("Failed to sign up user.");
  }
};

export const userLogin = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(renderValidUrl('/api/users/login'), userData);
    dispatch({ type: USER_LOGIN, payload: response.data });
    toast.success("User logged in successfully!");
  } catch (error) {
    toast.error("Failed to log in user.");
  }
};

export const fetchTransaction = (id) => async (dispatch) => {
  try {
    const response = await axios.get(renderValidUrl(`/api/transactions/${id}`));
    dispatch({ type: FETCH_TRANSACTION, payload: response.data });
  } catch (error) {
    toast.error("Failed to fetch transaction.");
  }
};

export const fetchTransactions = () => async (dispatch) => {
  try {
    const response = await axios.get(renderValidUrl('/api/transactions'));
    dispatch({ type: FETCH_TRANSACTIONS, payload: response.data });
  } catch (error) {
    toast.error("Failed to fetch transactions.");
  }
};