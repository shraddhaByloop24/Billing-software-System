import React, { useState } from 'react';
import axios from 'axios';
const Editmenu = () => {
  const [id, setId] = useState('');
  const [itemname, setItemname] = useState('');
  const [description, setDescription] = useState('');
  const [baseprice, setBaseprice] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [discount, setDiscount] = useState('');
  const [quantityavailable, setQuantityavailable] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [customizations, setCustomizations] = useState('');
  const [filters, setFilters] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('itemname', itemname);
    formData.append('description', description);
    formData.append('baseprice', baseprice);
    formData.append('category', category);
    formData.append('subcategory', subcategory);
    formData.append('discount', discount);
    formData.append('quantityavailable', quantityavailable);
    formData.append('cuisine', cuisine);
    formData.append('foodtype', foodtype);
    formData.append('customizations', customizations);
    formData.append('filters', filters);
    if (image) {
      formData.append('image', image);
    }
    try {
      const response = await axios.put(`https://d6e7-2405-201-301d-f872-794d-acaa-e3ff-b6e8.ngrok-free.app/api/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };



  return (
    <div>
      <h6>Edit Food</h6>
      <form onSubmit={handleSubmit}>

        <div className="row">
          <label className='w-100 col-lg-6'>
            Id
            <input
              className="form-control border"
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <label className='w-100 col-lg-6'>
            Item Name:
            <input
              className="form-control border"
              type="text"
              name="itemname"
              value={itemname}
              onChange={(e) => setItemname(e.target.value)}
            />
          </label>
          </div>
          
          <div className="row">
          <label className='w-100 col-lg-6'>
            Base Price:
            <input
              className="form-control border"
              type="number"
              name="baseprice"
              value={baseprice}
              onChange={(e) => setBaseprice(e.target.value)}

              required
            />
          </label>
          <label className='w-100 col-lg-6'>
            category
            <input
              className="form-control border"
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}

            />
          </label>
        </div>

        <div className="row">
          <label className='w-100 col-lg-6'>
            Subcategory
            <input
              className="form-control border"
              type="text"
              name="subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              required
            />
          </label>
          <label className='w-100 col-lg-6'>
            Discount
            <input
              className="form-control border"
              type="number"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="row">
          <label className='w-100 col-lg-6'>
            Quantityavailable
            <input
              className="form-control border"
              type="number"
              name="quantityavailable"
              value={quantityavailable}
              onChange={(e) => setQuantityavailable(e.target.value)}
              required
            />
          </label>
          <br />
          <label className='w-100 col-lg-6'>
            Subcategory
            <input
              className="form-control border"
              type="file"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="row">
          <label className='w-100 col-lg-6'>
            Cuisine
            <input
              className="form-control border"
              type="text"
              name="cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              required
            />
          </label>
          <br />
          <label className='w-100 col-lg-6'>
            Foodtype
            <input
              className="form-control border"
              type="text"
              name="foodtype"
              value={foodtype}
              onChange={(e) => setFoodtype(e.target.value)}
              required
            />
          </label>

          <label className='w-100 col-lg-6'>
            Description
            <input
              className="form-control border"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>



        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
        </div>

      </form>
    </div>
  )
}

export default Editmenu