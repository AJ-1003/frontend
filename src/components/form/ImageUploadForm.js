import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';

const ImageUploadForm = () => {

  const { addImage } = useAppContext();

  const [inputState, setInputState] = useState({
    name: '',
    description: ''
  });
  const [image, setImage] = useState();

  const { name, description } = inputState;

  const handleInput = (name) => e => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const submitImage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', image);
    formData.append('description', image);
    formData.append('image', image);

    addImage(formData);

    setInputState({
      name: '',
      description: ''
    });
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <form onSubmit={submitImage}>
        <input type='text' value={name} placeholder='name' onChange={handleInput('name')}></input>
        <input type='text' value={description} placeholder='description' onChange={handleInput('description')}></input>
        <input type='file' accept='image/*' onChange={onInputChange}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
