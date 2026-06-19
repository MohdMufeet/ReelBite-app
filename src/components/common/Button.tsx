"use client";
type ButtonProps = {
  btnName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ btnName, className = "", ...props }: ButtonProps) => {
  const hasBgColor = className.includes("bg-");
  const defaultBg = hasBgColor
    ? ""
    : "bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-100";

  return (
    <button
      className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 ${defaultBg} ${className}`}
      {...props}
    >
      {btnName}
    </button>
  );
};

export default Button;
