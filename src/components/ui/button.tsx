import React from "react"
import { Loader } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <button
      {...props}
      className={`
        px-4 py-2 
        text-[#fff] 
        font-bold 
        rounded 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#DB8AFF]
        flex items-center justify-center
        ${disabled ? "bg-[#3D3D3D] cursor-not-allowed" : "bg-[#B727F5] hover:bg-[#670094]"}
      `}
      disabled={disabled}
    >
      {disabled ? <Loader className="animate-spin h-6 w-6" /> : children}
    </button>
  )
}