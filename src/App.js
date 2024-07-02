import React from "react";
import SignUp from "./Components/Auth";
import { GlobalStyles } from "./Components/Global.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OTP from "./Components/Auth/OTP";
import Password from "./Components/Auth/Password";
import { AuthProvider } from "./Components/Context/Context";
import SignUpForm from "./Components/Auth/SignUpForm";
import AdminLayout from "./Components/AdminLayout";
import MyProfile from "./Components/MyProfile";
const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route index element={<SignUp />} />
            <Route path="/password" element={<Password />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/signupform" element={<SignUpForm />} />
            <Route path="/" element={<AdminLayout />}>
              <Route path="/Profile" element={<MyProfile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
