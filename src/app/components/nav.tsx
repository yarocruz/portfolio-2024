import Image from 'next/image'

export default function Nav() {
    return (
        <nav>
            <div className="mb-5">
                <h1 className="logo text-4xl font-black" data-text="JAY CRUZ">JAY CRUZ</h1>
                <span>Software Engineer</span>
            </div>
            {/* TODO ADD LINK ICONS FOR EMAIL, GITHUB */}
            <Image src='./top-line.svg' alt="SVG" width={1418.25} height={30.862} />
        </nav>
    )
}