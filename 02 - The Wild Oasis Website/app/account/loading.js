import SpinnerMini from "@/app/_components/SpinnerMini";

export default function Loading() {
  return (
    <div className="grid items-center align-middle justify-center">
      <SpinnerMini />
      <p className="text-xl text-primary-200 mt-2"> Loading cabin data...</p>
    </div>
  );
}
