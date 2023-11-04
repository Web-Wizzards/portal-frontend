/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
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
import MessagePopup from "../../ui-elements/messagePopup/messagePopup";
// import { AuthContext } from "../../utils/authProvider";
// import errorSound from "../../assets/sounds/error.mp3";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers"

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>();
  const [passError, setPassError] = useState<boolean>(false);
  // const [passSuffixIcon, setPassSuffixIcon] = useState<string>(showEye);

  // const errorEffect = new Audio(errorSound);

  const navigate = useNavigate();
  // const [loginUser, { loading, error, data }] = useLoginUserMutation();
  // const { refetch } = useContext(AuthContext);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onLogin();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    setPassError(false);
  };

  // useEffect(() => {
  //   if (data) {
  //     sessionStorage.setItem("user", JSON.stringify(data.loginUser));
  //     refetch();
  //     navigate("/");
  //   }
  // }, [data]);

  const onLogin = async () => {
    if (
      email === "" ||
      email === null ||
      email === undefined ||
      !ValidateEmail(email)
    ) {
      setTimeout(() => {
        // errorEffect.play();
        setEmailError(true);
      }, 800);
    } else if (pass === "" || pass === null || pass === undefined) {
      setTimeout(() => {
        // errorEffect.play();
        setPassError(true);
      }, 800);
    } else {
      try {
        // await loginUser({
        //   variables: {
        //     data: {
        //       email,
        //       password: pass,
        //     },
        //   },
        // });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onShowPassword = () => {
    var passInput = document.getElementById("password") as HTMLInputElement;
    if (passInput.type === "password") {
      passInput.type = "text";
      // setPassSuffixIcon(Hidden);
    } else {
      passInput.type = "password";
      // setPassSuffixIcon(showEye);
    }
  };

  const { device } = useSelector((state: RootState) => state.windowSize);

  return (
    <div className="page login">
      {/* {loading && ( */}
        {/* <MessagePopup
          message={"Loading..."}
          position={"top-center"}
          category={"info"} */}
        {/* /> */}
      {/* )} */}
      {/* {error && ( */}
        {/* <MessagePopup
          message={"Invalid Credentials"}
          position={"top-center"}
          category={"warning"}
          delay={3} */}
        {/* /> */}
      {/* )} */}

      <div className="page-content">
        <div className={`page-heading ${device}`}>Login to your account</div>

        <div className={`form-container ${device}`}>
            <div className="form">
              <div className={`email-input ${device}`}>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onEmailChange(e)
                  }
                  type="text"
                  placeholder="Enter your email here"
                  autoFocus={true}
                  // prefixIcon={UsernameIcon}
                  edges="round"
                  label="Email"
                  required
                  error={emailError}
                  errorMsg={"Please enter a valid email address"}
                />
              </div>

              <div className={`pass-input ${device}`}>
                <InputFields
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onPassChange(e)
                  }
                  type="password"
                  id="password"
                  placeholder="Enter your password here"
                  // prefixIcon={PasswordIcon}
                  // suffixIcon={passSuffixIcon}
                  edges="round"
                  label="Password"
                  onSuffixClick={onShowPassword}
                  required
                  error={passError}
                  errorMsg="Please enter the password"
                />
              </div>

              <Link to={"/forgotPass"} className={`forgot-pass ${device}`}>
                Forgot Password
              </Link>

              <Button onClick={onLogin} text="Login" edges="round" />

              <div style={{paddingBottom: '20px'}}>
                New here?
                <Link className="link" to={"/register"}>
                  Create Account
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
