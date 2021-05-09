import React from "react";
import NavBar from "../../Components/Molecules/NavBar";

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <h3>Dashboard</h3>
        </div>
    );
};

export default Dashboard;

{/* <div clasName="container mt-5">
            <h3>Dashboard</h3>
            <div className="col-6">
            <p>Product Name</p>
            <input className="form-control" placeholder="Type your product name" />
            <p> Category</p>
            <input className="form-control" placeholder="Type the category" />
            <p>Price</p>
            <input className="form-control" placeholder="Type the price" />
            <br />
            <button className="btn btn-primary">Save</button>
            </div>
            <hr />
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        </div> */}