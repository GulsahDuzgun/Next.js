import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

//Dynamically generated (SSR)
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    props: {
      cabin,
    },
  };
}

export default function Page({ cabin }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin {router.query.cabinId}</title>
      </Head>
      <div className="mx-auto">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}
