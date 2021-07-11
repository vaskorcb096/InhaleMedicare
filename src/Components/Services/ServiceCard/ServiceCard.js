
import { NavLink } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
  console.log("props",props);
    return (
        <>
        <div className="col-md-4 col-10 mx-auto py-3">
       
          <div style={{borderStyle:'outset'}} className="card ">
              <img style={{height:'210px' ,width:'320px'}}src={`http://localhost:3000/${props.pro.image}`} className="card-img-top"alt="sdfv"/>
              <div className="card-body">
                  <h5 className="card-title font-weight-bold">{props.pro.title}</h5>
                  <p className="card-text">{props.pro.description}.</p>
                  <NavLink  to=""  className="btx  btn-primary">
                     More Details
                  </NavLink>
              </div>
              </div>  
        </div>
      
            
        </>
    );
};

export default ServiceCard;