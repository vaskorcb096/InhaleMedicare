import React, { useContext } from 'react';
import { Button, Image, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';
import {
    Link,
    useHistory,
    useLocation,
  } from "react-router-dom/cjs/react-router-dom.min";


const ProfilePopper = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [
        loggedInUser,
        setLoggedInUser,
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
      ] = useContext(UserContext);

    const signOut = () => {
        setLoggedInUser({});
        toast.error('Logged Out!');
         history.push(from);
         
    }

    return (
        <OverlayTrigger
            trigger="click"
            rootClose
            key="bottom"
            placement="bottom"
            overlay={
                <Popover id="popover-positioned-bottom">
                    <div className="d-flex justify-content-center mt-1">
                        <Image style={{ maxWidth: "60px" }} src={loggedInUser.image} roundedCircle />
                    </div>
                    <Popover.Content>
                        <strong className="text-center d-block">{loggedInUser.user_name}</strong>
                        <strong className="text-center d-block">{loggedInUser.email}</strong>
                        <div className="d-flex justify-content-center mt-1">
                            <Button onClick={signOut}
                                variant="outline-danger"
                                className="py-0 px-1"
                                size="sm">Logout</Button>
                        </div>
                    </Popover.Content>
                </Popover>
            }
        >
            <Nav.Link className="p-0">
                <Image
                    src={loggedInUser.image}
                    width="40"
                    height="40"
                    roundedCircle
                    className="d-inline-block align-top"
                    alt="Profile"
                />
            </Nav.Link>
        </OverlayTrigger>
    );
};

export default ProfilePopper;