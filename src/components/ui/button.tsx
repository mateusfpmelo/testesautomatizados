import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-[#B727F5] hover:bg-[#670094] text-[#fff] font-bold rounded focus:outline-none focus:ring-2 focus:ring-[#DB8AFF]"
    >
      {children}
    </button>
  )
}