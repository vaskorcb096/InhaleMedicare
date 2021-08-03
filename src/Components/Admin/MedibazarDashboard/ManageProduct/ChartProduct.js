import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const ChartProduct = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'User',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: '#172b4d',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'Products',
            data: [1, 2, 1, 1, 2, 2],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      };

 
const data2 = {
    labels: ['Product', 'Sell', 'CountInStock', 'User', 'Admin'],
    datasets: [
      {
        label: '# of Votes',
        data: [40, 19, 60, 5, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
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
                        <h3 class="card-title">Product Overview</h3>
                        <h6 class="card-subtitle">User Vs Product</h6>
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
                              Product
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
                          backgroundColor: "#172b4d",
                        }}
                      >
                        <Line
                          data={data}
                          options={options}
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
                <h3 class="card-title">Products  ✔✔ </h3>

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
                    <Pie data={data2} />
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

export default ChartProduct;
