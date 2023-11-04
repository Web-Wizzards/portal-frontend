/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.scss";
import Button from "../../ui-elements/buttons/buttons";
import InputFields from "../../ui-elements/inputfields/labeledInput/inputFields"
// import UsernameIcon from "../../assets/icons/username.svg";
// import PasswordIcon from "../../assets/icons/Password.svg";
// import Hidden from "../../assets/icons/hidden.svg";
// import showEye from "../../assets/icons/eye.svg";
// import { useLoginUserMutation } from "../../generated/graphql";
import ValidateEmail from "../../utils/emailValidation"
// import { AuthContext } from "../../utils/authProvider";
// import errorSound from "../../assets/sounds/error.mp3";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers"
import ValidateMobile from "../../utils/mobileValidation";
import ValidatePin from "../../utils/pinValidation";
import Collapsable from "../components/collapsable/collapsable";

type RegisterProps = {
    
};

const Register:React.FC<RegisterProps> = () => {

    const navigate = useNavigate()
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [mobile, setMobile] = useState<string>()
    const [createPass, setCreatePass] = useState<string>()
    const [confirmPass, setConfirmPass] = useState<string>()
    const [address, setAddress] = useState<string>()
    const [pincode, setPincode] = useState<string>()
    // const [createPassSuffixIcon, setCreatePassSuffixIcon] = useState<string>(showEye)
    // const [confirmPassSuffixIcon, setConfirmPassSuffixIcon] = useState<string>(showEye)

    // const [registerUser, { loading, error,data }] = useRegisterUserMutation()
    const [emptyError, setEmptyError] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>("Please fill all the required fields")

    // useEffect(() => {
    //     if(data) {
    //         sessionStorage.setItem('user', JSON.stringify(data.registerUser))
    //         navigate('/otp')
    //     }
    // }, [data]);

    const onRegister = async () => {
        if (!name || !email || !mobile || !address || !pincode ||  !createPass || !confirmPass || createPass !== confirmPass) {
            setEmptyError(true)
            setTimeout(()=>{setEmptyError(false)},4000)
            return 
        }

        if(!ValidateEmail(email)){
            setEmptyError(true)
            setTimeout(()=>{setEmptyError(false)},4000)
            setErrorMsg("Please enter a valid email address")
            return
        }

        if(!ValidateMobile(mobile)){
            setEmptyError(true)
            setTimeout(()=>{setEmptyError(false)},4000)
            setErrorMsg("Please enter a valid mobile number")
            return
        }

        if(!ValidatePin(pincode)){
            setEmptyError(true)
            setTimeout(()=>{setEmptyError(false)},4000)
            setErrorMsg("Please enter a valid Pin Code")
            return
        }
        // try {
        //     await registerUser({
        //         variables: {
        //             data: {
        //                 name,
        //                 email,
        //                 password: confirmPass,
        //                 mobile,
        //                 address,
        //                 pincode,
        //             }
        //         }
        //     })
        // } catch (e: any) {
        //     console.log(e);
        //     if(e.message === "User already created. Login to continue") {
        //         setErrorMsg("User already created. Login to continue")
        //     } else setErrorMsg('Error in Registering. Try again')

        //     setEmptyError(true)
        //     setTimeout(()=>{setEmptyError(false)},4000)
        // }
    }

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                onRegister();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
        document.removeEventListener('keydown', keyDownHandler);
        };
    });

    const onShowCreatePassword = () => {
        var passInput = document.getElementById('createPass') as HTMLInputElement
        if(passInput.type === 'password'){
            passInput.type = 'text'
            // setCreatePassSuffixIcon(Hidden)
        }else{
            passInput.type = 'password'
            // setCreatePassSuffixIcon(showEye)
        }
    }

    const onShowConfirmPassword = () => {
        var passInput = document.getElementById('confirmPass') as HTMLInputElement
        if(passInput.type === 'password'){
            passInput.type = 'text'
            // setConfirmPassSuffixIcon(Hidden)
        }else{
            passInput.type = 'password'
            // setConfirmPassSuffixIcon(showEye)
        }
    }

    const {device} = useSelector((state: RootState) => state.windowSize)
    
    return (
        <div className='page'>
            {/* { emptyError && <MessagePopup message={errorMsg} category='warning' position='bottom-center'/>}
            { loading && <MessagePopup message={'Loading...'} position={'top-center'} category={'info'} /> }
            { error && <MessagePopup message={'Error in Registering'} position={'top-center'} category={'warning'} delay={3}/> } */}

            <div className='page-content'>
                <div className={`page-heading ${device}`}>Create an Account</div>

                <div className={`form-container ${device}`}>
                        <div className='form signUp-box'>
                            <div className={`collapsable-box ${device}`}>
                                {/* <Collapsable heading='Personal Details'  */}
                                {/* // prefixIcon={PersonalDetails} */}
                                {/* > */}
                                    <div className='questions'>
                                        <InputFields label='Name' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} edges='round' placeholder='Enter your name here' required/>
                                        <InputFields label='Email' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type='email' edges='round' placeholder='Enter your email here' required/>
                                        <InputFields label='Mobile no' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)} type='number' edges='round' placeholder='Enter your mobile here' required/>
                                        <InputFields 
                                            label='Create Passowrd'
                                            id='createPass'
                                            theme='dark' 
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {setCreatePass(e.target.value)}} 
                                            edges='round' 
                                            placeholder='Create a new password' 
                                            required 
                                            // suffixIcon={createPassSuffixIcon}
                                            onSuffixClick={onShowCreatePassword} 
                                            type='password'   
                                        />
                                        <InputFields 
                                            label='Confirm Passowrd'
                                            id='confirmPass'
                                            theme='dark' 
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => {setConfirmPass(e.target.value)}} 
                                            edges='round' 
                                            placeholder='Confirm your password' 
                                            required 
                                            // suffixIcon={confirmPassSuffixIcon}
                                            onSuffixClick={onShowConfirmPassword}  
                                            type='password'
                                        />
                                    </div>
                                {/* </Collapsable> */}
                            </div>
                            <div className={`collapsable-box ${device}`}>
                                {/* <Collapsable 
                                  heading='Address' 
                                  // prefixIcon={Address}
                                > */}
                                    <div className='questions'>
                                        <InputFields label='Address' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} placeholder='Enter your address here' edges='round' required/> 
                                        <InputFields label='Pin Code' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPincode(e.target.value)} type='number' placeholder='Enter your pincode here' edges='round' required/> 
                                    </div>
                                {/* </Collapsable> */}
                            </div>
                        </div>
                </div>

                <div className={`buttons-row ${device}`}>
                    <div className='login-link'>
                        Already have an account?
                        <Link className='link' to={'/login'}>Login here</Link>
                    </div>
                    <div className='create-account'>
                        <Button text='Create Account' onClick={onRegister} fill='solid' edges='round'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;