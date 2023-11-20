import React from "react";
import Button from "../../components/Button";
import LoadingBtn from "../../components/LoadingBtn";
import { Link } from "react-router-dom";
import("preline");

const SignupForm = () => {
  const isClicked = false;
  return (
    <div className="  space-y-4  xl:w-420 xl:ml-44  flex-1  ">
      <div className=" text-center">
        <img
          src=" /assets/images/logo.svg"
          alt="logo"
          className=" items-center self-center  "
        />
      </div>

      {/* <p className=" text-white text-center text-lg font-semibold  ">
        Create Account
      </p>

      <p className=" text-white text-center text-xs font-semibold  ">
        To use Snapgram , please enter your details:
      </p> */}
      <div className="">
        <label
          for="input-label"
          class="block text-sm  font-medium mb-2 dark:text-white"
        >
          Name
        </label>
        <input
          type="email"
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        ></input>
      </div>

      <div>
        <label
          for="input-label"
          class="block text-sm  font-medium mb-2 dark:text-white"
        >
          Username
        </label>
        <input
          type="email"
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        ></input>
      </div>

      <div>
        <label
          for="input-label"
          class="block text-sm  font-medium mb-2 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        ></input>
      </div>

      {/* Form Group  */}
      <div class=" w-full">
        <label class="block text-sm mb-2 dark:text-white">Password</label>
        <div class="relative">
          <input
            id="hs-toggle-password"
            type="password"
            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter password"
            value="12345qwerty"
          />
          <button
            type="button"
            data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
            class="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-gray-400 dark:text-neutral-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                class="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
              />
              <path
                class="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
              />
              <path
                class="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
              />
              <line
                class="hs-password-active:hidden"
                x1="2"
                x2="22"
                y1="2"
                y2="22"
              />
              <path
                class="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
              />
              <circle
                class="hidden hs-password-active:block"
                cx="12"
                cy="12"
                r="3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- End Form Group --> */}
      {isClicked ? <Button /> : <LoadingBtn />}
      <p className=" text-gray-300 text-center">
        Already Have Account?
        <Link
          to="/sign-in"
          className=" text-primary-500 font-medium underline underline-offset-1"
        >
          {" "}
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
