"use client";

import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";

export default async function CabinList({ filter }) {
  // noStore();
  const cabins = await getCabins();
  console.log(filter);
  console.log(cabins);

  let filteredCabins;

  if (filter === "all") filteredCabins = cabins;

  if (filter === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  if (filter === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity <= 7 && cabin.maxCapacity > 4
    );

  if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (cabins.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
