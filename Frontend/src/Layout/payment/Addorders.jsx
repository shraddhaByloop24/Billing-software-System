
import React, { useState } from 'react';

const Addorders = () => {
    const [addorder, setAddorder] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);



    const increment = (index) => {
        const updatedOrder = [...addorder];
        updatedOrder[index].quantity += 1;
        setAddorder(updatedOrder);
        setTotalAmount(totalAmount + parseFloat(updatedOrder[index].baseprice));
    };

    const decrement = (index) => {
        const updatedOrder = [...addorder];
        if (updatedOrder[index].quantity > 1) {
            updatedOrder[index].quantity -= 1;
            setAddorder(updatedOrder);
            setTotalAmount(totalAmount - parseFloat(updatedOrder[index].baseprice));
        }
    };

    const handleDeleteOrder = (id, index) => {
        const updatedOrder = addorder.filter((item, idx) => idx !== index);
        const deletedProduct = addorder[index];
        setAddorder(updatedOrder);
        setTotalAmount(totalAmount - (deletedProduct.baseprice * deletedProduct.quantity));
    };





    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S no</th>
                        <th scope="col">Itemname</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {addorder.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <input type="text" className='border-none'
                                    value={item.itemname}
                                />
                            </td>
                            <td>{item.baseprice}</td>
                            <td>
                                <i className="fa-solid fa-minus p-2 bg-danger text-white mx-2" onClick={() => decrement(index)}></i>
                                {item.quantity}
                                <i className="fa-solid fa-plus p-2 mx-2 bg-danger text-white" onClick={() => increment(index)}></i>
                            </td>
                            <td>{item.baseprice * item.quantity}</td>
                            <td>
                                <i className="fa-solid fa-trash text-danger" onClick={() => handleDeleteOrder(item._id, index)}></i>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th scope="row" colSpan="4">Total</th>
                        <td>{totalAmount}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Addorders