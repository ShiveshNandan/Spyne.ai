"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick, btnType , textStyles, rightIcon }:CustomButtonProps) => {
    return (
        // <div>CustomButton</div>
        <button
        disabled = {false}
        type = {btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} fill className="object-contain" alt={""} />
                </div>
            )}
        </button>
    )
}

export default CustomButton