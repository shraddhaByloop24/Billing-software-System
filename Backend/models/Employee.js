const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: [' ', 'Admin', 'Owner', 'Manger'],
        default: ' ', 
        required: true
      },  
    address: {
        type: String,
        required: true
    },
});

const Employee = mongoose.model('employee', EmployeeSchema); 
module.exports = Employee;
