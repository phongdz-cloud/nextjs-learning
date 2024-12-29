import RegisterForm from "@/app/(auth)/register/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Đăng ký</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
