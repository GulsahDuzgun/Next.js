import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <div>Cabin #{router.query.cabinId}</div>;
}
