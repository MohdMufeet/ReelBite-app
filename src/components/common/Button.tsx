"use client";
type ButtonProps = {
  btnName: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ btnName,  ...props }: ButtonProps) => {
  return (
    <button
      {...props}
    >
      {btnName}
    </button>
  );
};

export default Button;
