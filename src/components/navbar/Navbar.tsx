"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

import CustomButton from "../global/CustomButton";
import AuthForm from "../Auth/AuthForm";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userDa = JSON.parse(
      localStorage.getItem("user") || JSON.stringify([])
    );
    setUserData(userDa);
  }, []);

  const session = useSession();

  const closeForm = () => {
    setFormOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  const car = {
    city_mpg: 28,
    class: "Sedan",
    combination_mpg: 32,
    cylinders: 4,
    displacement: 2000,
    drive: "Front-wheel drive",
    fuel_type: "Gasoline",
    highway_mpg: 35,
    make: "Toyota",
    model: "Corolla",
    transmission: "Automatic",
    year: 2021,
  };

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {userData.length > 0 ? (
          <CustomButton
            title="Log out"
            btnType="button"
            containerStyles="text-primary-red rounded-full bg-white min-w-[130px]"
            handleClick={handleLogout}
          />
        ) : (
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            handleClick={() => setFormOpen(true)}
          />
        )}
      </nav>
      <AuthForm isOpen={formOpen} closeModal={closeForm} />
    </header>
  );
};

export default NavBar;
