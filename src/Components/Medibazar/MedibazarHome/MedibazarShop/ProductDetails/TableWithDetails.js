import React,{useState,useContext, useEffect}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Ratting from '../Ratting/Ratting';
import {Col, Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import toast,{ Toaster } from "react-hot-toast";
import axios from 'axios';
import { UserContext } from '../../../../../App';
import ProductReviewPage from './ProductReviewPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TableWithDetails(props) {

    

    const [
        loggedInUser,
        setLoggedInUser,
        currentStep,
        cuStep,
        sStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        totalAmount,
        setTotalAmount
      ] = useContext(UserContext);
    const { register ,reset } = useForm();
    console.log(props);
  const classes = useStyles();
  const {oneItem}=props;
  const [value, setValue] = useState(0);
  const [info, setInfo] = useState({});
  const [updateId,setUpdateId]=useState(oneItem);
  const [load,setLoad]=useState(false);
  const [reviewProduct,setReviewProduct]=useState([]);
  const handleBlur = (event) => {
    const newInfo = { ...info };
    console.log(event.target.name, event.target.value);
    newInfo[event.target.name] = event.target.value;
    //console.log(event.target.value);

    setInfo(newInfo);
  };

  const handleSubmitted =(event) => {
    console.log("event",event);
    setLoad(true);
    event.preventDefault();
   

    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    if(mes===1)mes="Januray";
    else if(mes===2)mes="February";
    else if(mes===3)mes="March";
    else if(mes===4)mes="April";
    else if(mes===5)mes="May";
    else if(mes===6)mes="June";
    else if(mes===7)mes="July";
    else if(mes===8)mes="Auguest";
     else if(mes===9)mes="September";
      else if(mes===10)mes="Octobor";
      else if(mes===11)mes="November";
      else if(mes===12)mes="December";
      console.log(mes);
    var dia = today.getDate();
    var fecha = dia +" " +mes +" " + year;


    let newUserInfo;

    console.log(info);
  
    var imageData = new FormData();
    imageData.append("post", info.post);
 

    imageData.append("date",fecha);

    imageData.append("email",loggedInUser.email);
   
    imageData.append(
        "image",
        loggedInUser.image || "https://i.ibb.co/5GzXkwq/user.png"
      );
      imageData.append("user_name", loggedInUser.user_name);
    console.log(oneItem._id);
    finalData.value=imageData;
    console.log(finalData,"drgdfg");
    setInfo(()=>{});
   
    axios.patch(`productUpdateOne/${oneItem._id}`, imageData).then((res)=>{
        if(res.data) {
     
        return toast.success("POst Are Succesfully");
        }
        
        swal("Failed!", "Something went wrong! Please try again.", "error", {
            dangerMode: true,
          });

    }).catch(error => {
      
        
        console.log(error);
        swal("Failedfdh !", "Something went wrong! Please try again.", "error", { dangerMode: true });
    });;
   
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Information" {...a11yProps(1)} />
          <Tab label="Review"{...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        
      <h5>{oneItem.name}</h5>
      <p class="mb-2 text-muted text-uppercase small">{oneItem.Category}</p>
     <Ratting numReviews={oneItem.numReviews}></Ratting>
      <p><span class="mr-1"><strong>${oneItem.price}</strong></span></p>
      <p class="pt-1">Availabe {oneItem.name} are {oneItem.countInStock}</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Brand</strong></th>
              <td>{oneItem.brand}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
              <td>Black</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
              <td>USA, Europe</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr></hr>
      <div class="table-responsive mb-2">
       
      </div>
      <p>{oneItem.description}</p>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
     
      <h5>Additional Information</h5>
      <table class="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th scope="row" class="w-150 dark-grey-text h6">Weight</th>
            <td><em>0.3 kg</em></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="w-150 dark-grey-text h6">Dimensions</th>
            <td><em>50 × 60 cm</em></td>
          </tr>
        </tbody>
      </table>
    
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Form  className="w-100">
            <div
              className="mx-auto bg-white form-main"
             
            >
              <Form.Row className="justify-content-center">
                
              
                <Form.Group as={Col} md={11} sm={12} >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    
                  </Form.Label>
                  <Form.Control
                    style={{ height: "10rem" }}
                    type="text"
                    as="textarea"
                    {...register("post", { required: true })}
                    placeholder="Enter Your Message Here"

                    name="post"
                    onBlur={handleBlur}
                   
                  />
                </Form.Group>

               {load?(
                   <Button style={{align:'right'}}type="submit" variant="outlined" color="primary"  onClick={handleSubmitted}
                   >
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <strong>POST</strong> 
                 </Button>
               ):(
                <Button style={{align:'right'}}type="submit" variant="outlined" color="primary"  onClick={handleSubmitted}
                >
               <strong>POST</strong> 
              </Button>
               )}
              
                
              
                
                
              </Form.Row>
              <div className="justiy-content-center">
              <ProductReviewPage load={load} setLoad={setLoad} id={oneItem._id}></ProductReviewPage>

              </div>
              
              
            </div>
            
          </Form>
      
      </TabPanel>
    </div>
  );
}