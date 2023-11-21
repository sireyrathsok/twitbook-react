import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <div className="flex bg-black  justify-center items-center h-screen ">
          <section className="  w-1/2 ">
            <Outlet />
          </section>
          <img
            src="/assets/images/side-img.svg"
            alt="bg"
            className=" hidden xl:block h-screen w-1/2 object-cover bg-no-repeat "
          />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
