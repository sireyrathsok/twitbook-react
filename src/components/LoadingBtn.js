import React from "react";

const LoadingBtn = () => {
  return (
    <>
      <button
        type="button"
        class=" w-full py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <span
          class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
          role="status"
          aria-label="loading"
        ></span>
        Loading
      </button>
    </>
  );
};

export default LoadingBtn;
