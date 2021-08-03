import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState,useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import Sidebar from "../../Sidebar/Sidebar";
import "./OrderList.css";
import OrderDetails from "./OrderDetails";
import { UserContext } from "../../../../App";

const OrderList = () => {
  const [loggedInUser,setLoggedInUser,currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData]=useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [editOrders, setEditOrders] = useState({});


  useEffect(() => {
    try {
      if(loggedInUser.admin===true){
        axios.get("/getOrders").then((res) => {
          setOrders(res.data);
        });
      }
      else {
        axios.get("/getOrders").then((res) => {
        const val = res.data;
        console.log("bkkkk",val);
        var result = val.filter((da) => {
          return da.loggedInEmail === loggedInUser.email;
        });
        setOrders(result);
      });
      }
     
    } catch (err) {
      console.log(err);
    }
  }, []);

///searching by date
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");
const handleFilter = (event) => {
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  const newFilter = orders.filter((value) => {
    return value.orderTime.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
  console.log(searchWord, "  sf  ", filteredData);
};




  console.log(orders);

  return (
    <div className="container-fluid row ">
      <div className=" vxx col-md-2 col-sm-12 col-lg-2 jx ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 col-sm-12 col-lg-10 d-flex justify-content-center">
        <div className="container container-fluid">
          <h4>Order Details</h4>
          {editOrders._id? (
            <OrderDetails  editOrders={editOrders} setEditOrders={setEditOrders}>
             

            </OrderDetails>
          ) : (
            <>
            {
              loggedInUser.admin?(
                <div className="text-center search">
                <input
                  type="search"
                  placeholder="Date"
                  autoFocus
                  id="date"
                  className="searchTerm2"
                ></input>

                <span className="pl-2 search2">
                  <input
                    type="search"
                    placeholder="Filter By Customer"
                    autoFocus
                    id="customer"
                    className="searchTerm"
                  ></input>

                  <button className="searchButton" type="button">
                    Filter
                  </button>
                </span>
              </div>
              ):(
                <div className="text-center search">
                <span className="pl-2 search2">
                  <input
                    type="search"
                    placeholder="Date"
                    autoFocus
                    id="date"
                    value={wordEntered}
                  onChange={handleFilter}
                    className="searchTerm"
                  ></input>

                  <button className="searchButton" type="button">
                    Filter
                  </button>
                </span>
              </div>
              )
            }
             
              <table class="contentTable sticky">
                <thead>
                  <tr>
                    <th>Customer Email</th>

                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Customer</th>
                    <th>Customer Id</th>
                    <th>Purchased On</th>
                    <th>Customer Address</th>
                    <th>Customer Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {wordEntered.length>0 ?(
                  <>
                   {filteredData.map((pro) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{pro.shipment[0].email}</td>

                        <td>{pro.productPrice}</td>

                        <td>
                          <span class="badge badge-dot">
                            <i class="bg-success"></i>
                            <span class="status">completed</span>
                          </span>
                        </td>
                        <td>{pro.shipment[0].name}</td>
                        <td>{pro.shipment[0]._id}</td>
                        <td>{pro.orderTime}</td>
                        <td>{pro.shipment[0].address}</td>
                        <td>{pro.shipment[0].phone}</td>
                        <td className="text-center">
                          <Button
                            variant="outline-info"
                            className="p-1 mr-1 mb-0"
                            onClick={() => setEditOrders(pro)}
                          >
                            Details
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              className="mx-1"
                            />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
                  </>
                ):(
                  <>
                   {orders.map((pro) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{pro.shipment[0].email}</td>

                        <td>{pro.productPrice}</td>

                        <td>
                          <span class="badge badge-dot">
                            <i class="bg-success"></i>
                            <span class="status">completed</span>
                          </span>
                        </td>
                        <td>{pro.shipment[0].name}</td>
                        <td>{pro.shipment[0]._id}</td>
                        <td>{pro.orderTime}</td>
                        <td>{pro.shipment[0].address}</td>
                        <td>{pro.shipment[0].phone}</td>
                        <td className="text-center">
                          <Button
                            variant="outline-info"
                            className="p-1 mr-1 mb-0"
                            onClick={() => setEditOrders(pro)}
                          >
                            Details
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              className="mx-1"
                            />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
                  </>
                )

                }
            
              </table>
            </>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default OrderList;
