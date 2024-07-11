import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log(router);
  return <div>Cabin #{router.query.cabinId}</div>;
}
