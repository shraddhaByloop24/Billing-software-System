import React, { useState, useEffect } from 'react';
import Header from './dashboard/Header';
import axios from 'axios';

const Payment = () => {
    const [products, setProducts] = useState([]);
    const [addorder, setAddorder] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://77b5-2405-201-301d-f871-bdf1-d128-4cf7-e4f4.ngrok-free.app/api/getproducts', {
                    headers: {
                        'ngrok-skip-browser-warning': '69420'
                    }
                });
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []);

    const handleAddProduct = async (productId) => {
        const product = products.find(prod => prod._id === productId);
        if (!product) {
            console.error('Product not found');
            return;
        }

        const quantity = 1; 
        const baseprice = product.baseprice;
        try {
            const response = await axios.post('https://77b5-2405-201-301d-f871-bdf1-d128-4cf7-e4f4.ngrok-free.app/api/createorder', {
                items: [{ 
                    product_id: productId,
                    quantity
                }]
            }, {
                headers: {
                    'ngrok-skip-browser-warning': '69420'
                }
            });
            
            const order = response.data.order;
            const newAddorder = [...addorder, ...order.items];
            setAddorder(newAddorder);
            setTotalAmount(totalAmount + (product.baseprice * quantity));
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = (index) => {
        const updatedOrder = [...addorder];
        const removedItem = updatedOrder.splice(index, 1)[0];
        setAddorder(updatedOrder);
        setTotalAmount(totalAmount - (removedItem.baseprice * removedItem.quantity));
    };

    return (
        <>
            <div
                id="main-wrapper"
                data-layout="vertical"
                data-navbarbg="skin5"
                data-sidebartype="full"
                data-sidebar-position="absolute"
                data-header-position="absolute"
                data-boxed-layout="full"
            >
                <Header />
                <div className="page-wrapper">
                    <div className="container-fluid mt-5 pt-5 bg-white">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    {Array.isArray(products) && products.map((product) => (
                                        <div className="col-lg-4" key={product._id}>
                                            <div className="payment-card">
                                                <div className="image-wrapper">
                                                    <img alt="traveller" src={product.image} />
                                                    <div className="content">
                                                        <p>Id: {product._id}</p>
                                                        <p><b>Name:</b> {product.itemname}</p>
                                                        <p><b>Baseprice:</b> {product.baseprice}</p>
                                                        <p><b className="bolder">Description:</b> {product.description}</p>
                                                        <div className="text-center">
                                                            <button className="custom-btn btn-13 mt-3" onClick={() => handleAddProduct(product._id)}>Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6 d-block">
                                <div className="w-100 shadow d-block">
                                    <h5 className="pt-2 bg-light p-3">Billing here</h5>
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
                                                    <td>{item.productname}</td>
                                                    <td>{item.baseprice}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.baseprice * item.quantity}</td>
                                                    <td>
                                                       <i className="fa-solid fa-trash text-danger" onClick={() => handleDeleteProduct(index)}></i>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <th scope="row" colSpan="4">Total</th>
                                                <td>{totalAmount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;
