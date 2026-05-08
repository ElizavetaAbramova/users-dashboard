import { useEffect, useState } from "react";

interface FilterBarProps {
  onChange: (query: string) => void;
  currentQuery: string;
}

export function FilterBar({ onChange: onClick }: FilterBarProps) {
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
      <div
        className="flex align-center md:gap-5 gap-1 w-full justify-center"
        aria-label="Blood group filter"
      >
        <button
          className={"rounded-sm " + (bloodType === "O" && "active")}
          onClick={() => setBloodType("O")}
          aria-label="Select O blood type"
        >
          I (O)
        </button>
        <button
          className={"rounded-sm " + (bloodType === "A" && "active")}
          onClick={() => setBloodType("A")}
          aria-label="Select A blood type"
        >
          II (A)
        </button>
        <button
          className={"rounded-sm " + (bloodType === "B" && "active")}
          onClick={() => setBloodType("B")}
          aria-label="Select B blood type"
        >
          III (B)
        </button>
        <button
          className={"rounded-sm " + (bloodType === "AB" && "active")}
          onClick={() => setBloodType("AB")}
          aria-label="Select AB blood type"
        >
          IV (AB)
        </button>
      </div>
      <div
        className="flex align-center md:gap-5 gap-1 w-full justify-center"
        aria-label="Rh factor filter"
      >
        <button
          className={"rounded-sm " + (rhFactor === "-" && "active")}
          onClick={() => setRhFactor("-")}
          aria-label="Select Rh- factor"
        >
          Rh-
        </button>
        <button
          className={"rounded-sm " + (rhFactor === "+" && "active")}
          onClick={() => setRhFactor("+")}
          aria-label="Select Rh+ factor"
        >
          Rh+
        </button>
        <button
          className={"rounded-sm"}
          onClick={handleReset}
          aria-label="Reset filters"
        >
          Reset
        </button>
      </div>
    </>
  );
}
