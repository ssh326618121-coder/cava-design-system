import React from "react";
export type CavaButtonVariant="primary"|"secondary"|"danger";
export interface CavaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:CavaButtonVariant;icon?:React.ReactNode}
export function CavaButton({variant="primary",icon,children,className="",...props}:CavaButtonProps){return <button className={`cava-button cava-button--${variant} ${className}`} {...props}>{icon}{children}</button>}