const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Employee = require('./models/Employee');
const Food = require('./models/Food');
const Addfood = require('./models/Addfood');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
app.post('/food',  async (req, res) => {
    try {
      const { name, price, foodtype, foodcategory, subcategorys, description, discount,foodimg, customFields } = req.body;
    //   const foodimg = req.file ? req.file.filename : '';
      const newFood = new Food({
        name,
        price,
        foodtype,
        foodcategory,
        subcategorys,
        description,
        discount,
        foodimg,
        customFields: JSON.parse(customFields)
      });
      await newFood.save();
      res.status(201).json(newFood);
    } catch (error) {
      res.status(400).json({ message: error.message });
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
        const { name, price, description, foodtype, foodcategory, subcategorys, discount, foodimg, customFields } = req.body;
        const food = await Food.findByIdAndUpdate(req.params.id, {
            name,
            price,
            description,
            foodtype,
            foodcategory,
            subcategorys,
            discount,
            foodimg,
            customFields 
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

// Get all food categories for dropdown
app.get('/addfood', async (req, res) => {
    try {
        const newFood = await Addfood.find();
        res.json(newFood);
    } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).json({ error: 'Server error' });
        
        
    }
});

// Add a new food category
app.post('/addfood', async (req, res) => {
    try {
        const { foodname } = req.body;
        const newFood = await Addfood.create({ foodname });
        res.json(newFood);
    } catch (error) {
        console.error('Error adding food:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a food category by ID
app.put('/addfoods/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { foodname } = req.body;
        const updatedFood = await Addfood.findByIdAndUpdate(id, { foodname }, { new: true });
        res.json(updatedFood);
    } catch (error) {
        console.error('Error updating food item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a food category by ID
app.delete('/addfoods/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Addfood.findByIdAndDelete(id);
        res.json({ message: 'Food item deleted successfully' });
    } catch (error) {
        console.error('Error deleting food item:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
