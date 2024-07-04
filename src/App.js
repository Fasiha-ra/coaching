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
import UpdatedProfile from "./Components/Auth/UpdatedProfile";
import ProfileLayout from "./Components/ProfileLayout";
import EditProfile from "./Components/EditProfile/EditProfile";
import About from "./Components/EditProfile/About";
import ProfileSkills from "./Components/EditProfile/ProfileSkills";
import Experience from "./Components/EditProfile/Experience";
import Education from "./Components/EditProfile/Education";
import Certificate from "./Components/EditProfile/Certificate";
import ChangePassword from "./Components/EditProfile/ChangePassword";
import ForgotPassword from "./Components/EditProfile/ChangePassword/ForgotPassword";
import SupportSec from "./Components/Support";
import Notification from "./Components/Notification";
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
            <Route path="/UpdatedProfile" element={<UpdatedProfile />} />
            <Route path="/" element={<AdminLayout />}>
              <Route path="/Profile" element={<MyProfile />} />
              <Route path="/Support" element={<SupportSec />} />
              <Route path="/Notification" element={<Notification />} />
            </Route>
            <Route path="/" element={<ProfileLayout />}>
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/About" element={<About />} />
              <Route path="/ProfileSkills" element={<ProfileSkills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificates" element={<Certificate />} />
              <Route path="/setting" element={<ChangePassword />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
