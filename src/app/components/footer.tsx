import Image from "next/image"

export default function Footer() {
    return (
       <footer>
            <Image src='./bottom-line.svg' alt="SVG" width={1418.25} height={30.862} />
            <p className="text-xs text-center mt-2">
                Copyright &copy; 2024 made by Jay Cruz
            </p> 
       </footer>   
    )
}