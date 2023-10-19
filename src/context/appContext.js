import React, { useContext, useState } from 'react';
import axios from 'axios';
// import multer, { diskStorage } from 'multer';

const baseUrl = 'http://localhost:5000/api/v1/';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

  const [exercises, setExercises] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [weight, setWeight] = useState([]);
  const [error, setError] = useState(null);

  // Exercise
  const addExercise = async (income) => {
    const response = await axios.post(`${baseUrl}add-exercise`, income)
      .catch((err) => {
        setError(err.response.data.message)
      });
    getExercises();
  };

  const getExercises = async () => {
    const response = await axios.get(`${baseUrl}get-exercises`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    setExercises(response.data);
  };

  const deleteExercise = async (id) => {
    const response = await axios.delete(`${baseUrl}delete-exercise/${id}`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExercises();
  };

  // Exercise Data
  const addExerciseData = async (exerciseData) => {
    const response = await axios.post(`${baseUrl}add-exercise-data`, exerciseData)
      .catch((err) => {
        setError(err.response.data.message)
      });
    getExerciseData();
  };

  const getExerciseData = async () => {
    const response = await axios.get(`${baseUrl}get-exercise-data`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    setExerciseData(response.data);
  };

  const deleteExerciseData = async (id) => {
    const response = await axios.delete(`${baseUrl}delete-exercise-data/${id}`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExerciseData();
  };

  // Measurement
  const addMeasurement = async (measurement) => {
    const response = await axios.post(`${baseUrl}add-measurement`, measurement)
      .catch((err) => {
        setError(err.response.data.message)
      });
    getMeasurements();
  };

  const getMeasurements = async () => {
    const response = await axios.get(`${baseUrl}get-measurements`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    setMeasurements(response.data);
  };

  const deleteMeasurement = async (id) => {
    const response = await axios.delete(`${baseUrl}delete-measurement/${id}`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getMeasurements();
  };

  // Weight
  const addWeight = async (weight) => {
    const response = await axios.post(`${baseUrl}add-weight`, weight)
      .catch((err) => {
        setError(err.response.data.message)
      });
    getWeight();
  };

  const getWeight = async () => {
    const response = await axios.get(`${baseUrl}get-weight`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    setWeight(response.data);
  };

  const deleteWeight = async (id) => {
    const response = await axios.delete(`${baseUrl}delete-weight/${id}`)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getWeight();
  };

  // Images
  // var storage = diskStorage({
  //   destination: (req, file, cb) => {
  //     return cb(null, '/backend/uploads/');
  //   },
  //   filename: (req, file, cb) => {
  //     return cb(null, file.fieldname + '-' + Date.now());
  //   }
  // });
  
  // const upload = multer({ storage: storage });

  // const addImage = async (formData) => {
  //   const response = await axios.post(`${baseUrl}upload`, upload.single('image'), formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //   .then((res) => {

  //   })
  //   .catch((err) => {
  //     setError(err.response.data.message);
  //   });
  // };

  return (
    <AppContext.Provider
      value={{
        addExercise,
        getExercises,
        deleteExercise,
        exercises,
        addExerciseData,
        getExerciseData,
        deleteExerciseData,
        exerciseData,
        addMeasurement,
        getMeasurements,
        deleteMeasurement,
        measurements,
        addWeight,
        getWeight,
        deleteWeight,
        weight
      }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => {
  return useContext(AppContext);
};