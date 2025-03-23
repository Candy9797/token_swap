import React from "react";

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "success" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: () => void;
    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    margin = "m-2",
    padding = "p-2",
    onClick,
    ...rest
}) => {
    const variantClasses = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        success: "bg-green-500 hover:bg-green-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white"
    };

    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg"
    };

    const baseClasses = `m-4 p-6 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-75 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]}`;

    const disabledClasses = disabled
        ? "opacity-50 cursor-not-allowed"
        : "";

    return (
        <button
            className={`${baseClasses} ${disabledClasses} ${margin} ${padding}`}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
