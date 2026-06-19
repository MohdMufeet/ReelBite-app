type InputProps = {
  labelName: string;
  type: string;
  placeholder: string;
  inputName: string;
  error: string | null | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  labelName,
  type,
  placeholder,
  inputName,
  error,
  ...props
}: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label
        htmlFor={inputName}
        className="text-sm font-semibold text-slate-700 capitalize tracking-wide"
      >
        {labelName}
      </label>

      <input
        type={type}
        id={inputName}
        placeholder={placeholder}
        name={inputName}
        className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-white text-slate-900 placeholder:text-slate-400 transition-all duration-200 outline-none
          ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          }
        `}
        {...props}
      />

      {error && (
        <p className="text-xs font-medium text-red-500 mt-0.5 flex items-center gap-1 animate-fadeIn">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
};

export default Input;
