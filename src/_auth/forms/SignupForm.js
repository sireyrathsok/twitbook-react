import { React, useState } from "react";
import { Navigate, Link } from "react-router-dom";
// import Button from "../../components/Button";
// import LoadingBtn from "../../components/LoadingBtn";
// import { account, ID } from "./lib/appwrite";
import { account, ID } from "../../lib/appwrite";
import LoadingBtn from "../../components/LoadingBtn";
import("preline");

function SignupForm() {
  const [onSubmit, setOnSubmit] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const createUser = async () => {
    try {
      setOnSubmit(false);
      await account.create(ID.unique(), email, password, name, username);
      login(email, password);
    } catch (error) {
      setOnSubmit(true);
      alert(error);
    }
  };

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }
  return (
    <div className="  space-y-4  xl:w-420 xl:ml-44  flex-1  ">
      {loggedInUser ? <Navigate to={"/"} /> : "Not logged in"}

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
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="email"
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        ></input>
      </div>

      {/* Form Group  */}
      <div class=" w-full">
        <label class="block text-sm mb-2 dark:text-white">Password</label>
        <div class="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="hs-toggle-password"
            type="password"
            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder=""
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

      {/* <button
        className=" bg-green-200"
        type="button"
        onClick={() => login(email, password)}
      >
        Login
      </button> */}
      {onSubmit ? (
        <button
          onClick={createUser}
          type="button"
          class="w-full  py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Register
        </button>
      ) : (
        <LoadingBtn />
      )}

      {/* <button className=" bg-red mx-10 rounded-lg" type="button">
        Register
      </button> */}

      {/* <button
        className=" bg-yellow-100"
        type="button"
        onClick={async () => {
          await account.deleteSession("current");
          setLoggedInUser(null);
        }}
      >
        Logout
      </button> */}
      {/* {isClicked ? <Button /> : <LoadingBtn />} */}
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
}

export default SignupForm;
