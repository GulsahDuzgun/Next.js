import Head from "next/head";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Cabin {router.query.cabinId}</title>
      </Head>
      <div>Cabin #{router.query.cabinId}</div>;
    </>
  );
}
