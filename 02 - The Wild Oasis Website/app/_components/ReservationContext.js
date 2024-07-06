"use client";
import { createContext, useContext, useState } from "react";

const ReservationContextStore = createContext();

export function ReservationContext({ children }) {
  const initalState = { from: null, to: null };
  const resetRange = () => setRange(initalState);
  const [range, setRange] = useState(initalState);
  return (
    <ReservationContextStore.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContextStore.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContextStore);

  if (!context) throw new Error("Out of border usage");

  return context;
}
