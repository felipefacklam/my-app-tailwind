import Image from "next/image";

export default function Background() {
    return (
        <Image
            src='https://wallpaperaccess.com/full/503594.jpg'
            fill
            alt="background"
            className="-z-50 object-cover brightness-50"
        >
        </Image>
    );
}

