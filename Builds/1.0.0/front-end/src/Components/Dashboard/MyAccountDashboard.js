import React, { useState } from "react";
import Modal from "./Modal";

const MyAccountDashboard = () => {
  const [show, setShow] = useState(false)
    return (
<div class="h-fit pb-20 w-full flex bg-gray-800">
      <main class="w-full overflow-y-auto">

        <div class="px-10 mt-5">
          <span class="uppercase font-bold text-2xl text-white" 
            >Your Products</span>
        </div>
        
        <div class="px-10 grid grid-cols-4 gap-4">
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Product 1</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Brand Name
              </div>
              </div>
                  <a href="#">
							<button onClick={() => setShow(true)} className="text-white border-2 border-primary bg-primary py-2 px-6 hover:text-primary hover:bg-white rounded text-lg">
								Leave Feedback
							</button>
						</a>
                </div>
            </div>
          </div>
          
          
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Product 2</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Brand Name
                  </div>
                </div>
                <a href="#">
                <button  onClick={() => setShow(true)} className="text-white border-2 border-primary bg-primary py-2 px-6 hover:text-primary hover:bg-white rounded text-lg">
                  Leave Feedback
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
        <Modal onClose={() => setShow(false)} show={show}/>
        </div>
      </main>
    </div>
    );
  };
export default MyAccountDashboard;