import React from 'react';

const ReviewList = (props) => {
    return (
        <div>
            <div className="p-1">
                    

                    <div class="row">
                      <div class="col-md-12">
                        <div class="card">
                            <div className="d-flex justify-content-between">
                            <img className="p-1 rounded-circle" src={props.pro.image}  alt="" width="50"/>
                            <p className="pr-2"><strong>{props.pro.date}</strong></p>
                            </div>
                            
                        <h6 className="pl-2 text-primary">{props.pro.user_name}</h6>
                          <p className="pl-2">{props.pro.post}</p>
                          
                       
                        </div>
                      </div>
                     
                    </div>
                  
                  
                  
                  
                  
                                  </div>
        </div>
    );
};

export default ReviewList;