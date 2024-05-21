import React, { useState } from 'react';
import axios from 'axios';

const Demofood = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://4d3f-2405-201-301d-f83a-1c4e-a8c7-8874-5739.ngrok-free.app/products', {
        name,
        price,
        categoryId,
        discount,
        description,
        image
      });
      console.log('Food item created successfully:', response.data);
      setName('');
      setPrice('');
      setCategoryId('');
      setDiscount('');
      setDescription('');
      setImage('');
      setError('');
    } catch (error) {
      console.error('Error creating food item:', error);
      setError('Failed to create food item. Please try again later.');
    }
  };

  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center'>
    {/* <div className='container   '> */}
    
      <form onSubmit={handleSubmit}  className="contact-form row p-0">
        <div className=" form-field col-lg-6">
          <input type="text" className=" input-text js-input" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="name" className="label" >Name</label>
        </div>
        <div className=" form-field col-lg-6">
          <input type="number" className=" input-text js-input" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <label htmlFor="price" className="label">Price</label>
        </div>
        <div className="form-field col-lg-4">
          <input type="text" className=" input-text js-input" id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
          <label htmlFor="categoryId" className="label">Category</label>
        </div>
        <div className=" form-field col-lg-4">
          <input type="number" className="input-text js-input" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} />
          <label htmlFor="discount" className="label">Discount</label>
        </div>
        <div className="form-field col-lg-4">
          <input type="file"  className="form-control " id="image" value={image} onChange={(e) => setImage(e.target.value)} />
          {/* <label htmlFor="image" className="input-text js-input">Image</label> */}
        </div>
        <div className="form-field col-lg-12">
          <textarea className="input-text js-input" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <label htmlFor="description" className="label">Description</label>
        </div>
        
        <div className="form-field">
                        <button
                          className="btn bg-gradient-danger text-white px-5"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
      </form>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
    {/* </div> */}
    
    </>
  );
};

export default Demofood;
