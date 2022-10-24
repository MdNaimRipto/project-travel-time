import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import fbIcon from "../../Assets/icons/fb.png"
import googleIcon from "../../Assets/icons/google.png"
import { UserContext } from '../../ContextProvider/UserProvider';

const Login = () => {
    const { signInWithFaceBook } = useContext(UserContext);

    const handleFacebookSignIn = () => {
        signInWithFaceBook()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="d-flex align-items-center justify-content-center"
            style={{ width: "30%", margin: "auto" }}>
            <div className="fw-semibold">
                <Form className="w-100 mx-auto border border-secondary pt-5 pb-5 mt-5 px-3 rounded bg-white">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="py-2" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="py-2" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="w-100 my-4 fw-semibold" variant="warning" type="submit">
                        Login
                    </Button>
                    <p className='text-center fw-semibold'>Don't Have an Account?
                        <Link to="/registration" className='text-warning ms-2'>Create an Account</Link>
                    </p>
                </Form>
                <p className="horizontal-line my-4 text-white">
                    Or
                </p>
                <div className='bg-white py-4 px-3 rounded'>
                    <Button
                        className="w-100 my-2 fw-semibold border border-secondary rounded-5 position-relative" variant="light" type="submit">
                        <img
                            style={{ height: "30px", marginLeft: "4px", top: "3px" }} className="me-3 position-absolute start-0" src={googleIcon} alt="" />
                        Continue With Google
                    </Button>
                    <Button
                        onClick={handleFacebookSignIn}
                        className="w-100 my-2 fw-semibold border border-secondary rounded-5 position-relative" variant="light" type="submit">
                        <img
                            style={{ height: "30px", marginLeft: "4px", top: "3px" }} className="me-3 position-absolute start-0" src={fbIcon} alt="" />
                        Continue With Facebook
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;