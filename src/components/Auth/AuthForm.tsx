import { Fragment, useState } from "react";
import Image from "next/image";
//import ProfilePic from "../public/user-profile.jpg";
import { getProviders, signIn, useSession } from "next-auth/react";

import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "../global/CustomButton";

interface AuthFormProps {
  isOpen: boolean;
  closeModal: () => void;
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface FormData {
  [key: string]: string;
}

const AuthForm = ({ isOpen, closeModal }: AuthFormProps) => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
    console.log("formData");
    localStorage.setItem("user", JSON.stringify(formData));
    clearForm();
    closeModal();
  };

  const hanldeCancel = () => {
    closeModal();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-600 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="flex justify-center font-semibold text-xl capitalize">
                      {isSignup ? "Sign Up." : "Log In."}
                    </h2>
                    <hr className="border-t border-gray-300 my-2" />

                    <div className="flex flex-wrap justify-center gap-2">
                      <CustomButton
                        btnType="button"
                        title="Google"
                        containerStyles="bg-blue-600 hover:bg-blue-400 rounded-full text-white "
                        handleClick={() => {
                          signIn("google");
                        }}
                      />
                      <CustomButton
                        btnType="button"
                        title="Github"
                        containerStyles="bg-gray-700 hover:bg-gray-400 rounded-full text-white "
                        handleClick={() => {
                          signIn("github");
                        }}
                      />
                      <CustomButton
                        btnType="button"
                        title="Facebook"
                        containerStyles="bg-red-600 hover:bg-red-400 rounded-full text-white "
                        handleClick={() => {
                          signIn("facebook");
                        }}
                      />
                      <CustomButton
                        btnType="button"
                        title="Twitter"
                        containerStyles="bg-red-600 hover:bg-red-400 rounded-full text-white "
                        handleClick={() => {
                          signIn("twitter");
                        }}
                      />
                    </div>
                    <hr className="border-t border-gray-300 mt-2" />

                    <h1 className="z-10 relative px-4 bg-white text-gray-500 font-bold text-center uppercase">
                      or
                    </h1>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-2 flex flex-row flex-wrap gap-2">
                        {isSignup && (
                          <>
                            <input
                              type="text"
                              name="firstName"
                              placeholder="first name"
                              onChange={handleChange}
                              className="border border-gray-300 focus:border-primary-blue rounded-lg py-2 px-4 outline-none transition-colors duration-150 ease-in-out"
                            />
                            <input
                              type="text"
                              name="lastName"
                              placeholder="last name"
                              onChange={handleChange}
                              className="border border-gray-300 focus:border-primary-blue rounded-lg py-2 px-4 outline-none transition-colors duration-150 ease-in-out"
                            />
                          </>
                        )}

                        <input
                          type="text"
                          name="email"
                          placeholder="email"
                          onChange={handleChange}
                          className=" w-full border border-gray-300 focus:border-primary-blue rounded-lg py-2 px-4 outline-none transition-colors duration-150 ease-in-out"
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          className="border border-gray-300 focus:border-primary-blue rounded-lg py-2 px-4 outline-none transition-colors duration-150 ease-in-out"
                        />
                        {isSignup && (
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            className="border border-gray-300 focus:border-primary-blue rounded-lg py-2 px-4 outline-none transition-colors duration-150 ease-in-out"
                          />
                        )}
                      </div>

                      <hr className="border-t border-gray-300 my-2" />
                      <div className="flex justify-center">
                        <CustomButton
                          btnType="button"
                          title={
                            isSignup
                              ? "Already have an account? Sign In"
                              : "Dont have an account? Sign Up"
                          }
                          handleClick={switchMode}
                          containerStyles="bg-blue-600 hover:bg-blue-400 rounded-full text-white"
                        />
                      </div>
                      <hr className="border-t border-gray-300 my-4" />
                      <div className="w-full flex flex-row justify-end gap-4">
                        <CustomButton
                          btnType="submit"
                          title="Save"
                          containerStyles="bg-blue-600 hover:bg-blue-400 rounded-full text-white"
                        />
                        <CustomButton
                          btnType="button"
                          title="Cancel"
                          containerStyles="bg-red-600 hover:bg-red-400 rounded-full text-white px-4 py-2"
                          handleClick={hanldeCancel}
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AuthForm;
