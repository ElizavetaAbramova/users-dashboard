export const Loader = () => (
  <div
    className="flex flex-wrap gap-5 w-full px-5 justify-center"
    aria-live="polite"
    aria-busy="true"
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className=" w-[180px] h-[250px] animate-pulse rounded-2xl bg-gray-500"
      />
    ))}
  </div>
);
