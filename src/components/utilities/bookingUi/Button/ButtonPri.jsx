import React from 'react'

const ButtonPri = ({children, onClick, disabled, variant = "default", className = ""}) => {
    const base =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonPri