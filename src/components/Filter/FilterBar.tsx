import { useEffect, useState } from "react";

interface FilterBarProps {
  onClick: (query: string) => void;
  currentQuery: string;
}

export function FilterBar({ onClick }: FilterBarProps) {
  const [bloodType, setBloodType] = useState("");
  const [rhFactor, setRhFactor] = useState("");

  useEffect(() => {
    if (rhFactor === "" || bloodType === "") return;
    onClick(bloodType + rhFactor);
  }, [bloodType, rhFactor, onClick]);

  const handleReset = () => {
    setBloodType("");
    setRhFactor("");
    onClick("");
  };

  return (
    <>
      <div className="flex align-center gap-5 w-full justify-center">
        <button
          className={"rounded-sm " + (bloodType === "O" && "active")}
          onClick={() => setBloodType("O")}
        >
          I (O)
        </button>
        <button
          className={"rounded-sm " + (bloodType === "A" && "active")}
          onClick={() => setBloodType("A")}
        >
          II (A)
        </button>
        <button
          className={"rounded-sm " + (bloodType === "B" && "active")}
          onClick={() => setBloodType("B")}
        >
          III (B)
        </button>
        <button
          className={"rounded-sm " + (bloodType === "AB" && "active")}
          onClick={() => setBloodType("AB")}
        >
          IV (AB)
        </button>
      </div>
      <div className="flex align-center gap-5 w-full justify-center">
        <button
          className={"rounded-sm " + (rhFactor === "-" && "active")}
          onClick={() => setRhFactor("-")}
        >
          Rh-
        </button>
        <button
          className={"rounded-sm " + (rhFactor === "+" && "active")}
          onClick={() => setRhFactor("+")}
        >
          Rh+
        </button>
        <button className={"rounded-sm"} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
