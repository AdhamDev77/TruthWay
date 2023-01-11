
import React from "react";
import background from "./assets/background.svg";
import Button from "@mui/material/Button";
import './login.css'

function Login() {
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        
        <form className="login-form">
        
          <div className="login-form-container">
          <h1>تسجيل دخول</h1>
              <input type="text" placeholder="اسم المستخدم"></input>
            <input type="password" placeholder="كلمة السر"></input>
          </div>
          <p>
            هل نسيت كلمة السر؟ <a href="/">تغيير كلمة السر</a>
          </p>
          <p>
            هل أنت مستخدم جديد؟ <a href="/signup">حساب جديد</a>
          </p>
          <Button
            style={{
              color: "#D8E9A8",
              border: "1px solid #D8E9A8",
              marginTop: "20px"
            }}
            variant="outlined"
          >
            سجل
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
