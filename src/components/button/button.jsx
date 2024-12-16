import { cva } from "class-variance-authority";

const button = cva(["font-semibold", "border", "rounded"], {
    variants: {
        color: {
        primary: "bg-orange-500 text-white border-transparent hover:bg-orange-600",
        secondary: "bg-white text-gray-800 border-gray-400 hover:bg-gray-100",
        },
        
    size: {
        small: "text-sm py-1 px-2",
        medium: "text-base py-2 px-4",
        large: "text-base py-2 px-6",
      },
    }
})


export function Button({children, color, props, size}){
    return<>
    <button {...props} className={button({color,size})} >{children}</button>
    </>
}