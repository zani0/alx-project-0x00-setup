import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
  return (
    <button
      className={`bg-blue-600 text-white font-medium px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
