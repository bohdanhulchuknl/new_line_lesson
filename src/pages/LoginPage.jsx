import React, { useState, useContext, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { UserContext } from "../App";

import { users } from "../utils/dateBase";
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";

const LoginPage = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

 //! USER INPUTS VALUE
  const [inputsValue, setInputsValue] = useState({
    nameValue: "",
    passValue: "",
  });

  const [errrs, setErrors] = useState({
    nameError: "",
    passError: "",
  });

  const [loginError, setLoginError] = useState("");

  const clearLoginError = () => {
    setLoginError("");
  };

  //! CHECK USER LOGIN
  const checkUserLogin = () => {
    const userInDB = users.find(
      (el) => el.name.trim() === inputsValue.nameValue.trim()
    );

    if (!userInDB) {
      setLoginError("User not found");
      return;
    }

    setUser(userInDB.name);
    localStorage.setItem("user", userInDB.name)
    navigate("/");
  };

  //! ON CHANGE INPUT
  const handleOnChange = (e) => {
    // e.target.value
    // e.target.name

    //clear loginError
    if (loginError.length) {
      clearLoginError();
    }
    //clear error NAME
    if (errrs.nameError.length) {
      setErrors((prev) => ({ ...prev, nameError: "" }));
    }
    //clear error PASS
    if (errrs.passError.length) {
      setErrors((prev) => ({ ...prev, passError: "" }));
    }

    setInputsValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //! ON SUBMIT EVENT
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // name validation
    if (inputsValue.nameValue.length < 3) {
      setErrors((prev) => ({ ...prev, nameError: "Min length 3 chars" }));
      return;
    }

    // pass validation
    if (inputsValue.passValue.length < 3) {
      setErrors((prev) => ({ ...prev, passError: "Min length 3 chars" }));
      return;
    }

    //cher LOGIN
    checkUserLogin();
  };

  useEffect(() => {
    if(user) {
        navigate("/")
    }
  }, [])

  const myHandelr = useCallback(() => {
    console.log(inputsValue.nameValue)
  }, [inputsValue.nameValue])

  return (
    <div>
      <Link to="/">HOME</Link>

      <form onSubmit={handleOnSubmit}>

        <h2 className="text-red">LoginPage</h2>

        <div>
          <label htmlFor="nameInputLogin">Name</label>
          <input
            type="text"
            id="nameInputLogin"
            value={inputsValue.nameValue}
            name="nameValue"
            onChange={handleOnChange}
          />
          <div>{errrs.nameError}</div>
        </div>

        <div>
          <label htmlFor="nameInputLogin">PASS</label>
          <input
            type="text"
            id="nameInputLogin"
            value={inputsValue.passValue}
            name="passValue"
            onChange={handleOnChange}
          />
          <div>{errrs.passError}</div>
        </div>

        <div>{loginError}</div>

        <button type="submit">LOGIN</button>
      </form>
    <Test1 value={inputsValue.nameValue} myHandelr={myHandelr}/>
    <Test2  value={inputsValue.passValue}/>
    </div>
  );
};

export default LoginPage;
