import React from "react";
import CardWrapper from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backbuttonLable="Don't have an account ?"
      showsocial
      backbuttonhref="/auth/register"
    >
      Login form
    </CardWrapper>
  );
};
