import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Molecules/NavBar";
import firebase from '../../Config/Firebase';

const Dashboard = () => {

    const [productName, setProductName] = useState ("");
    const [category, setCategory] = useState ("");
    const [price, setPrice] = useState ("");

    const [product, setProduct] = useState ([]);

    const [button, setButton] = useState("save");
    const [selectProduct, setSelectProduct] = useState ({});

    useEffect(() => {
        firebase
        .database()
        .ref("products")
        .on("value", (res) => {
            if (res.val()) {
                //change to array object
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map(item => {
                    //console.log(item) //testing
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    });
                });
                // console.log(productArr); //testing
                setProduct(productArr);
            }
        });
    }, []);

    const resetForm = () => {
        setProductName ("");
        setCategory ("");
        setPrice ("");
        setButton("Save")
        setSelectProduct("")
    };

    const onSubmit = () => {
        const data = {
            productName: productName,
            category: category,
            price: price,
        };
        if(button=== 'save'){
            firebase.database().ref("products").push(data)
        }else{
            firebase.database().ref(`products/${selectProduct.id}`).set(data);
        }
        // console.log(data);
        
        resetForm();
    };

    const onUpdateData = (item) => {
        setProductName(item.productName)
        setCategory(item.category)
        setPrice(item.price)
        setButton("Update")
        setSelectProduct(item)

    }
    
    const onDeleteData = (item) => {
        firebase.database().ref(`products/${item.id}`).remove();
    }

    return (
        <div >
            <NavBar />
            <div clasName="container mt-5">
            <h3>Etalase</h3>
            <hr />
            <div className="col-6">
            <p>Voucher Name</p>
            <input 
                className="form-control" 
                placeholder="Type your voucher name" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)}/>
            <p> Category</p>
            <input 
                className="form-control" 
                placeholder="Type the category *example:Pulsa / Data*" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}/>
            <p>Price</p>
            <input 
                className="form-control" 
                placeholder="Type the price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}/>
            <br /> 
            <button className="btn btn-primary" onClick={onSubmit}>{button}</button>
            {
                button === 'Update' && (
                    <button className="btn btn-danger" onClick={resetForm}>Cancel</button>
                )
            }
            </div>
            <hr />
            <table class="table table-striped table-hover"> 
                <thead>
                    <tr> 
                        <th>Voucher Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(item => (
                            <tr key={item.id}> 
                                <td>{item.productName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => onUpdateData(item)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => onDeleteData(item)}>Sell</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Dashboard;



{/* <div>
            <NavBar />
            <h3>Etalase</h3>
            <br/>
            <button type="button" class="btn btn-primary" onClick={onsubmit}>Stock Voucher</button>
        </div> */}