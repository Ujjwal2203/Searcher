import React from "react";

export default function Dashboard() {
  return (
    <div id="main">
      <div id="dash-top">
        <h4 className="m-6 ">User Dashboard</h4>
        <p className="mx-6 text-blue-600 text-sm">Billing</p>
      </div>
      <hr></hr>
      <p className="m-8 text-sm">
        For questions about billing contact{" "}
        <span>
          <a
            href="admin@gmail.com"
            className="underline decoration-blue-700 text-blue-700"
          >
            admin@gmail.com
          </a>
        </span>
      </p>
      <div>
      <div class="relative flex flex-col mt-6 text-gray-700 bg-black-300 shadow-md bg-clip-border rounded-xl w-96">
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            Current Plan
          </h5>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            You are currectly on the Free Plan
          </p>
          </div>
        <div>

        </div>
        </div>
      </div>
    </div>
  );
}
