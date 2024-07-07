import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinID: cabinId } = params;

  try {
    const [cabin, booking] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    if (!cabin && !booking)
      return Response.json({ message: "No data was found" });

    return Response.json({ cabin, booking });
  } catch (err) {
    return Response.json({ message: "Data fetching went wrong" });
  }
}
