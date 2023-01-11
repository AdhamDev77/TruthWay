
import React from "react";
import background from "./assets/background.svg";
import Button from "@mui/material/Button";
import "./signup.css"

function Signup() {
  return (
    <div
      className="signup"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        
        <form className="signup-form">
        <h1>حساب جديد</h1>
          <div className="signup-form-container">
            <div className="name">
              <input type="text" placeholder="الاسم الأول"></input>
              <input type="text" placeholder="اسم العائلة"></input>
            </div>
            <input type="text" placeholder="اسم المستخدم"></input>
            <input type="email" placeholder="البريد الإلكتروني"></input>
            <input type="password" placeholder="كلمة السرر"></input>
            <input type="password" placeholder="تأكيد كلمة السر"></input>
          </div>
          <p>
            هل أنت عضو بالفعل؟ <a href="/login">تسجيل دخول</a>
          </p>
          <Button
            style={{
              color: "#D8E9A8",
              border: "1px solid #D8E9A8",
            }}
            variant="outlined"
          >
            إنشاء
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
