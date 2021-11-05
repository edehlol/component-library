const Divider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center relative">
      <span className="h-px bg-gray-300 absolute inset-x-0"></span>
      <span className="bg-white text-gray-400 text-sm relative px-4">{children}</span>
    </div>
  );
};

export { Divider };
