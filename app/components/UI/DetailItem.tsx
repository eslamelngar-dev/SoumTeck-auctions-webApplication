export default function DetailItem({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="flex grow">
      <div className="flex justify-between items-center gap-3 w-full">
        <p className="text-sm sm:text-base whitespace-nowrap">{label}</p>
        <div className="bg-[#FAFAFA] border border-[#EAECF0] px-4 sm:px-10 py-2.5 sm:py-3 rounded-lg min-w-30 sm:w-50 h-10 sm:h-12 flex items-center gap-1">
          <p
            className={`${small ? "text-[0.7rem] sm:text-[0.8rem]" : "text-sm sm:text-[1rem]"} text-nowrap`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
