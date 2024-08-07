import React, { useState, useEffect } from 'react';
import Header from '../dashboard/Header';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './payment.css';


const Payment = () => {
    const [products, setProducts] = useState([]);
    const [addorder, setAddorder] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://e12e-2405-201-301d-f871-18c-12d1-8ce-4b44.ngrok-free.app/api/getproducts', {
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

    const handleAddProduct = (product) => {
        const existingProductIndex = addorder.findIndex(item => item._id === product._id);
        let updatedOrder;
        if (existingProductIndex >= 0) {
            updatedOrder = [...addorder];
            updatedOrder[existingProductIndex].quantity += 1;
        } else {
            updatedOrder = [...addorder, { ...product, quantity: 1 }];
        }
        setAddorder(updatedOrder);
        console.log(updatedOrder);
        setTotalAmount(totalAmount + parseFloat(product.baseprice));
    };

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
    const handleGenerateBill = () => {
        const tableData = addorder.map((item) => ({
            product_id: item._id,
            itemname: item.itemname,
            amount: item.baseprice,
            quantity: item.quantity,
            total: item.baseprice * item.quantity,
        }));


        axios.post('https://e12e-2405-201-301d-f871-18c-12d1-8ce-4b44.ngrok-free.app/api/createorder', { items: tableData })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const tableColumn = ["S no", "Itemname", "Amount", "Quantity", "Total"];
        const tableRows = [];

        addorder.forEach((item, index) => {
            const itemData = [
                index + 1,
                item.itemname,
                item.baseprice,
                item.quantity,
                (item.baseprice * item.quantity).toFixed(2),
            ];
            tableRows.push(itemData);
        });

        const totalRow = ["", "", "", "Total", totalAmount.toFixed(2)];
        tableRows.push(totalRow);

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
        });

        doc.save('order_summary.pdf');
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
                                        <div className="col-lg-4 my-5" key={product._id}>
                                            <div className="payment-card pb-0">
                                                <div className="image-wrapper text-white ">
                                                    <img alt="traveller" src={product.image} />
                                                    <div className="content">
                                                        {/* <p>Id: {product._id}</p> */}
                                                        <p className='text-white'><b> Name:</b>  {product.itemname}</p>
                                                        <p className=' text-white'><b>Baseprice:</b> {product.baseprice}</p>
                                                        <p className=' text-white'><b>Discount:</b> {product.discount}%</p>
                                                        <p className=' text-white'><b className="bolder">Description:</b> {product.description}</p>
                                                        <div className="text-center ">
                                                            <button className="custom-btn btn-13 mt-3" onClick={() => handleAddProduct(product)}>Add</button>
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
                                    <h5 className="pt-2 Billing-here text-white p-3">BILLING HERE</h5>
                                    <table className="table">
                                        <thead>
                                            <tr className=''>
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
                                                    <td><input type="text" className='border-none' value={item.baseprice} /></td>
                                                    <td>
                                                        <i className="fa-solid fa-minus p-2 bg-danger border  text-white" onClick={() => decrement(index)}></i>
                                                        <input type="text" className='counter-border   text-center' value={item.quantity}

                                                        />
                                                        <i className="fa-solid fa-plus p-2  bg-danger border text-white" onClick={() => increment(index)}></i>
                                                    </td>
                                                    <td>
                                                        <input type="text" className='border-none text-center'
                                                            value={item.baseprice * item.quantity} /></td>
                                                    <td>
                                                        <i className="fa-solid fa-trash text-danger" onClick={() => handleDeleteOrder(item._id, index)}></i>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <th scope="row" colSpan="4">Total</th>
                                                <td>
                                                    <input type="text" className='border-none text-center'
                                                        value={totalAmount} />
                                                </td>

                                            </tr>

                                        </tbody>
                                        <div className='text-right mx-3'>

                                        </div>
                                    </table>
                                    <div>
                                        <section className="section section--valo py-3">
                                            {/* <h2 class="section__title">
      Valo
    </h2> */}
                                            <div className="toggle-button toggle-button--valo">
                                                <input id="toggleButton1" name="radio1" type="radio" />
                                                <label for="toggleButton1" data-text="Cash"></label>
                                                <div className="toggle-button__icon"></div>
                                            </div>
                                            <div className="toggle-button toggle-button--valo">
                                                <input id="toggleButton2" name="radio1" type="radio" />
                                                <label for="toggleButton2" data-text="UPI"></label>
                                                <div className="toggle-button__icon"></div>
                                            </div>
                                            <div className="toggle-button toggle-button--valo">
                                                <input id="toggleButton3" name="radio1" type="radio" />
                                                <label for="toggleButton3" data-text="Card"></label>
                                                <div className="toggle-button__icon"></div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className=' mx-3'>
                                        <button className="btn custom-btn bg-info text-white px-2" onClick={handleGenerateBill}>Generate Bill</button>
                                        <button className="btn custom-btn bg-danger text-white  px-2 mx-2" onClick={handleDownloadPDF}>Download Bill</button>
                                    </div>
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
