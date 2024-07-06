import Cabin from "@/app/_components/cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const metadata = {
//   title: "dynamic",
// };

export async function generateMetadata({ params }) {
  const { cabinID: cabinId } = params;
  const { name } = await getCabin(cabinId);
  return {
    title: name,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinID: String(cabin.id),
  }));

  return ids;
}

export default async function Page({ params }) {
  const cabinId = params.cabinID;

  const cabin = await getCabin(cabinId);

  //The image is not stored in server so we use fill and parent-relative and child-object-cover class

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
