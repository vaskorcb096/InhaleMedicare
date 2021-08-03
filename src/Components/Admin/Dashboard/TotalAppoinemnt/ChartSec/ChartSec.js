import React from "react";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Pie, Doughnut } from "react-chartjs-2";

const ChartSec = (props) => {
  const [pendingStatus, setPendingStatus] = useState(0);
  const [onGoingStatus, setOnGoingStatus] = useState(0);
  const [doneStatus, setDoneStatus] = useState(0);
  const [vv, setV] = useState(0);
  const [dateString, setDateString]= useState([]);
  const [month, setMonth]= useState([]);
  const [MonthVal, setMonthVal]= useState([]);
  console.log(props);
  const { appointmentResult } = props;
  const [value, setValue] = useState([]);
  const duplicate = appointmentResult.map((user) => user.email);
  const labels = new Set(duplicate);
  const leb = Array.from(labels);
 
  useEffect(() => {
   
    appointmentResult.map((res) => {
      if (res.status === "Pending") {
        setPendingStatus((pendingStatus) => pendingStatus + 1);
      } else if (res.status === "Done") {
        setDoneStatus((doneStatus) => doneStatus + 1);
      } else {
        setOnGoingStatus((onGoingStatus) => onGoingStatus + 1);
      }
    
       setDateString((dateString)=>[...dateString,res.date]);
       
      


    });

    appointmentResult.map((res) => {
      const words = res.date.split(' ');
      console.log(words[1]);
     
      setMonth((month)=>[...month,words[1]])
     
      

    });
    for (let val of labels) {
      let result = appointmentResult.filter((currentValue) => {
        return currentValue.email === val;
      });
      const len = result.length;
      console.log("drg", len);
      setValue((ch) => [...ch, len]);
    }

  }, [appointmentResult]);


 
 

 
  const Barstate = {
    labels: leb,
    datasets: [
      {
        label: "User Appointment",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: value,
        // data: [65, 59, 80, 81, 56]
      },
    ],
  };


  


  const Piestate = {
    labels:['May','June','July','Auguest','September'],
    datasets: [
      {
        label: "Stauts Appointment",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
         
        ],
        data: [4,5,2,7,13]
        ,
      },
    ],
  };
  console.log(Piestate);
  console.log(dateString);
  console.log("month",month);
  console.log("value",MonthVal);
  console.log("value",value);
  return (
    <>
      <div>
        {/* straing chart */}

        <div class="pt-3 row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h3 class="card-title">Appointment Overview</h3>
                        <h6 class="card-subtitle">User Vs Appointment</h6>
                      </div>
                      <div class="ms-lg-auto mx-sm-auto mx-lg-0">
                        <ul class="list-inline d-flex">
                          <li class="me-4">
                            <h6 class="text-success">
                              <i class="fa fa-circle font-10 me-2 "></i>User
                            </h6>
                          </li>
                          <li>
                            <h6 class="pl-1 text-info">
                              <i class="fa fa-circle font-10 me-2"></i>
                              Appointment
                            </h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="amp-pxl" style={{ height: "360px" }}>
                      <div
                        style={{
                          backgroundColor: "antiquewhite",
                        }}
                      >
                        <Bar
                          data={Barstate}
                          options={{
                            title: {
                              display: true,
                              text: "Average Rainfall per month",
                              fontSize: 20,
                            },
                            legend: {
                              display: true,
                              // position: "right",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">💖Status ✔✔ </h3>

                <div
                  id="visitor"
                  style={{
                    height: "270px",
                    width: "100%",
                    maxHeight: "270px",
                    position: "relative",
                  }}
                  class="c3"
                >
                  <div
                    class="c3-tooltip-container"
                    style={{
                      position: "absolute",
                    }}
                  >
                    <Doughnut
                      data={Piestate}
                      options={{
                        title: {
                          display: true,
                          text: "Appointment",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <hr class="mt-0 mb-0" />
              </div>
              <div class="card-body text-center ">
                <ul class="list-inline d-flex justify-content-center align-items-center mb-0">
                  <li class="me-4">
                    <h6 class="text-info">
                      <i class="fa fa-circle font-10 me-2 "></i>Done
                    </h6>
                  </li>
                  <li class="me-4">
                    <h6 class=" text-primary">
                      <i class="fa fa-circle font-10 me-2"></i>Ongoing
                    </h6>
                  </li>
                  <li class="me-4">
                    <h6 class=" text-success">
                      <i class="fa fa-circle font-10 me-2"></i>Pending
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ending chart */}
      </div>
    </>
  );
};

export default ChartSec;
