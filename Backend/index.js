const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Employee = require('./models/Employee');
const Food = require('./models/Food');
const addfood = require('./models/Addfood');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Define routes

// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        const { name, password, email, mobile, role, address } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const employee = await Employee.create({
            name,
            email,
            password: hashedPassword,
            mobile,
            role,
            address
        });
        res.json(employee);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const employee = await Employee.findOne({ email });
        if (employee) {
            // Compare hashed password
            const passwordMatch = await bcrypt.compare(password, employee.password);
            if (passwordMatch) {

                res.json('Success');
            } else {

                res.status(400).json('The password is incorrect');
            }
        } else {

            res.status(404).json('No record exists');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});



// Create a new food item
app.post('/food', async (req, res) => {
    try {
        const { name, price, foodtype, foodcategory, subcategorys, description, discount,foodimg } = req.body;
        const food = new Food({
            name,
            price,
            foodtype,
            foodcategory,
            subcategorys,
            description,
            discount,
            foodimg
        });
        await food.save();
        res.status(201).json({ message: 'Food item created successfully', data: food });
    } catch (error) {
        console.error('Error creating food item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get all food items
app.get('/food', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get a single food item by ID
app.get('/food/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(food);
    } catch (error) {
        console.error('Error fetching food item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update a food item by ID
app.put('/food/:id', async (req, res) => {
    try {
        const { name, price, description, foodtype, foodcategory,subcategorys, foodimg } = req.body;
        const food = await Food.findByIdAndUpdate(req.params.id, {
            name,
            price,
            description,
            foodtype,
            foodcategory,
            subcategorys,
            discount,
            foodimg
        }, { new: true });
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json({ message: 'Food item updated successfully', data: food });
    } catch (error) {
        console.error('Error updating food item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Delete a food item by ID
app.delete('/food/:id', async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json({ message: 'Food item deleted successfully', data: food });
    } catch (error) {
        console.error('Error deleting food item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }





});

  
app.get('/addfood', async (req, res) => {
    try {
      const newFood = await addfood.find();
      res.json(newFood);
    } catch (error) {
      console.error('Error fetching food items:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.post('/addfood', async (req, res) => {
    try {
      console.log(req.body); 
      const { foodname } = req.body;
      const newFood = await addfood.create({
        foodname: foodname
      });
      res.json(newFood);
    } catch (error) {
      console.error('Error adding food:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.put('/addfoods/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { foodname } = req.body;
      const updatedFood = await addfood.findByIdAndUpdate(id, { foodname }, { new: true });
      res.json(updatedFood);
    } catch (error) {
      console.error('Error updating food item:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.delete('/addfoods/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await addfood.findByIdAndDelete(id);
      res.json({ message: 'Food item deleted successfully' });
    } catch (error) {
      console.error('Error deleting food item:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
//   app.listen(3001, () => {
//     console.log('Server is running on port 3000');
//   });
  

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


