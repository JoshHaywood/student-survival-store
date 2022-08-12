import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import authHeader from "../lib/authHeader";

const ProfileSetup = () => {
  const history = useHistory();
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [about, setAbout] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.push("/myAccountProfile");
    }
  });
  const formHandler = async (e) => {
    e.preventDefault();
    let result = await submitForm();
    if (result.status === "success") {
      setSuccess(true);
      // Wait for a second before redirecting since the data takes a bit of time to store in the database (Not perfect solution, but works for now)
      setTimeout(() => {
        history.push("/myAccountProfile");
      }, 1000);
    } else {
      let sortedFormErrors = {
        dob: [],
        address: [],
        postCode: [],
        about: [],
        profilePic: [],
      };
      result.forEach((error) => {
        if (error.param === "dob") {
          sortedFormErrors.dob.push(error);
        }
        if (error.param === "address") {
          sortedFormErrors.address.push(error);
        }
        if (error.param === "postCode") {
          sortedFormErrors.postCode.push(error);
        }
        if (error.param === "about") {
          sortedFormErrors.about.push(error);
        }
        if (error.param === "profilePic") {
          sortedFormErrors.profilePic.push(error);
        }
      });
      setFormErrors(sortedFormErrors);
    }
  };
  const submitForm = async () => {
    const formData = new FormData();
    formData.append("dob", dob);
    formData.append("address", address);
    formData.append("postCode", postCode);
    formData.append("about", about);
    formData.append("profilePic", profilePic);
    const response = await fetch(
      "http://localhost:3001/api/user/updateProfile",
      {
        method: "POST",
        body: formData,
        headers: authHeader(),
      }
    );
    let result = await response.json();
    return result;
  };
  return (
    <section className="bg-gray-900 bg-hero-pattern bg-cover">
      <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
            Complete your profile
          </h1>
          <p className="mb-4 text-sm">
            You can skip this section now and complete your profile later from
            your profile page.
          </p>
          {success && (
            <div className="bg-green-500 p-4 font-bold text-white rounded mb-3">
              <p>Changes applied successfully. Redirecting...</p>
            </div>
          )}
          <form className="mb-8 space-y-4">
            <div className="block">
              <label
                htmlFor="dob"
                className="block mb-1 text-md font-medium text-gray-700"
              >
                Date of birth
              </label>
              <input
                id="dob"
                name="dob"
                className={`form-input w-full p-2 border-b-2 border-transparent bg-gray-100 rounded ${
                  formErrors.dob
                    ? formErrors.dob.length > 0
                      ? "border-red-600"
                      : null
                    : null
                }`}
                type="date"
                onChange={(e) => setDob(e.target.value)}
              />
              {formErrors.dob ? (
                formErrors.dob.length > 0 ? (
                  <p className="text-red-600 mt-1 font-semibold text-sm">
                    {formErrors.dob[0].msg}
                  </p>
                ) : null
              ) : null}
            </div>
            <div className="block">
              <label
                htmlFor="address"
                className="block mb-1 text-md font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                className={`form-input w-full p-2 border-b-2 border-transparent bg-gray-100 rounded ${
                  formErrors.address
                    ? formErrors.address.length > 0
                      ? "border-red-600"
                      : null
                    : null
                }`}
                type="text"
                placeholder="123 Corp St."
                onChange={(e) => setAddress(e.target.value)}
              />
              {formErrors.address ? (
                formErrors.address.length > 0 ? (
                  <p className="text-red-600 mt-1 font-semibold text-sm">
                    {formErrors.address[0].msg}
                  </p>
                ) : null
              ) : null}
            </div>
            <div className="block">
              <label
                htmlFor="postCode"
                className="block mb-1 text-md font-medium text-gray-700"
              >
                Post code
              </label>
              <input
                id="postCode"
                name="postCode"
                className={`form-input w-full p-2 border-b-2 border-transparent bg-gray-100 rounded ${
                  formErrors.postCode
                    ? formErrors.postCode.length > 0
                      ? "border-red-600"
                      : null
                    : null
                }`}
                type="text"
                placeholder="TR20 1RP"
                onChange={(e) => setPostCode(e.target.value)}
              />
              {formErrors.postCode ? (
                formErrors.postCode.length > 0 ? (
                  <p className="text-red-600 mt-1 font-semibold text-sm">
                    {formErrors.postCode[0].msg}
                  </p>
                ) : null
              ) : null}
            </div>
            <div className="block">
              <label
                htmlFor="about"
                className="block mb-1 text-md font-medium text-gray-700"
              >
                About me
              </label>
              <textarea
                id="about"
                name="about"
                className={`form-input resize-none w-full p-2 border-b-2 border-transparent bg-gray-100 rounded ${
                  formErrors.about
                    ? formErrors.about.length > 0
                      ? "border-red-600"
                      : null
                    : null
                }`}
                placeholder="Something about you"
                rows="3"
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
              {formErrors.about ? (
                formErrors.about.length > 0 ? (
                  <p className="text-red-600 mt-1 font-semibold text-sm">
                    {formErrors.about[0].msg}
                  </p>
                ) : null
              ) : null}
            </div>
            <div className="block">
              <div class="grid grid-cols-1 space-y-2">
                <label class="block mb-1 text-md font-medium text-gray-700">
                  Upload Profile Photo
                </label>
                <div class="flex items-center justify-center w-full relative">
                  <div class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div class="h-full w-full text-center flex flex-col items-center justify-center">
                      <div class="flex w-full justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="has-mask h-36 object-center text-primary max-w-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="py-1 text-xs">{profilePic.name}</p>
                      <p class="pointer-none text-gray-500 ">
                        Drag and drop your photo here <br /> or select an image
                        from your computer
                      </p>
                    </div>
                  </div>
                  <input
                    className="absolute h-full w-full top-0 left-0 opacity-0 cursor-pointer z-10"
                    name="profilePic"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  />
                </div>
              </div>
              <p class="text-sm text-gray-300 text-center mt-4">
                <span>File type: .png, .jpg</span>
              </p>
            </div>
            <button
              className="w-full py-3 mt-1 btn btn-primary border-2 border-primary hover:border-primary bg-primary text-white hover:text-primary rounded hover:bg-white"
              onClick={formHandler}
            >
              Complete Profile
            </button>
          </form>
          <div className="mb-4 text-center text-gray-400 flex justify-around">
            <NavLink
              to="/myAccountProfile"
              className="text-primary hover:underline"
            >
              Skip to my profile
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSetup;
