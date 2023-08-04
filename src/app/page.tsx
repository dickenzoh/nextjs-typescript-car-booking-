//import { fetchCars } from "@utils";
import { HomeProps } from "../types";
import { fuels, yearsOfProduction } from "../constants/index";
import Hero from "../components/Hero";
import CustomFilter from "../components/CustomFilter";
import SearchButton from "../components/Searchbar";
import CarCard from "../components/CarCard";

export default async function Home({ searchParams }: HomeProps) {
  //   const allCars = await fetchCars({
  //     manufacturer: searchParams.manufacturer || "",
  //     year: searchParams.year || 2022,
  //     fuel: searchParams.fuel || "",
  //     limit: searchParams.limit || 10,
  //     model: searchParams.model || "",
  //   });

  const allCars = [
    {
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
    },
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 6,
      displacement: 3000,
      drive: "All-wheel drive",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Honda",
      model: "CR-V",
      transmission: "CVT",
      year: 2022,
    },
    {
      city_mpg: 18,
      class: "Truck",
      combination_mpg: 21,
      cylinders: 8,
      displacement: 5000,
      drive: "Rear-wheel drive",
      fuel_type: "Diesel",
      highway_mpg: 23,
      make: "Ford",
      model: "F-150",
      transmission: "Automatic",
      year: 2020,
    },
    {
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
    },
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 6,
      displacement: 3000,
      drive: "All-wheel drive",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Honda",
      model: "CR-V",
      transmission: "CVT",
      year: 2022,
    },
    {
      city_mpg: 18,
      class: "Truck",
      combination_mpg: 21,
      cylinders: 8,
      displacement: 5000,
      drive: "Rear-wheel drive",
      fuel_type: "Diesel",
      highway_mpg: 23,
      make: "Ford",
      model: "F-150",
      transmission: "Automatic",
      year: 2020,
    },
    {
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
    },
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 6,
      displacement: 3000,
      drive: "All-wheel drive",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Honda",
      model: "CR-V",
      transmission: "CVT",
      year: 2022,
    },
    {
      city_mpg: 18,
      class: "Truck",
      combination_mpg: 21,
      cylinders: 8,
      displacement: 5000,
      drive: "Rear-wheel drive",
      fuel_type: "Diesel",
      highway_mpg: 23,
      make: "Ford",
      model: "F-150",
      transmission: "Automatic",
      year: 2020,
    },
    {
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
    },
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 6,
      displacement: 3000,
      drive: "All-wheel drive",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Honda",
      model: "CR-V",
      transmission: "CVT",
      year: 2022,
    },
    {
      city_mpg: 18,
      class: "Truck",
      combination_mpg: 21,
      cylinders: 8,
      displacement: 5000,
      drive: "Rear-wheel drive",
      fuel_type: "Diesel",
      highway_mpg: 23,
      make: "Ford",
      model: "F-150",
      transmission: "Automatic",
      year: 2020,
    },
    {
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
    },
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 6,
      displacement: 3000,
      drive: "All-wheel drive",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Honda",
      model: "CR-V",
      transmission: "CVT",
      year: 2022,
    },
    {
      city_mpg: 18,
      class: "Truck",
      combination_mpg: 21,
      cylinders: 8,
      displacement: 5000,
      drive: "Rear-wheel drive",
      fuel_type: "Diesel",
      highway_mpg: 23,
      make: "Ford",
      model: "F-150",
      transmission: "Automatic",
      year: 2020,
    },
    {
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
    },
    {
      city_mpg: 24,
      class: "SUV",
      combination_mpg: 27,
      cylinders: 6,
      displacement: 3000,
      drive: "All-wheel drive",
      fuel_type: "Gasoline",
      highway_mpg: 30,
      make: "Honda",
      model: "CR-V",
      transmission: "CVT",
      year: 2022,
    },
    {
      city_mpg: 18,
      class: "Truck",
      combination_mpg: 21,
      cylinders: 8,
      displacement: 5000,
      drive: "Rear-wheel drive",
      fuel_type: "Diesel",
      highway_mpg: 23,
      make: "Ford",
      model: "F-150",
      transmission: "Automatic",
      year: 2020,
    },
  ];

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchButton />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>something fishy</p>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
