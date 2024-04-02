import Image from 'next/image'

export default function Nav() {
    return (
        <nav>
            <div className='sm:flex sm:justify-between'>
                <div className='sm:mb-0 mb-3'>
                    <h1 className="logo text-4xl font-black" data-text="JAY CRUZ">JAY CRUZ</h1>
                    <span className=''>Software Engineer</span>
                </div>
                <div className='flex space-x-4 items-center'>
                    <a href="mailto:yarocruz@gmail.com"><Image className="icons hover:scale-150" src='/email.png' alt='SVG' width={15} height={15} /></a> 
                    <a href="https://github.com/yarocruz" target='_blank'><Image className="icons hover:scale-150" src='/github.png' alt='SVG' width={15} height={15} /></a>
                    <a href="https://www.linkedin.com/in/yarosky-cruz/" target='_blank'><Image className="icons hover:scale-150" src='/linkedin.png' alt='SVG' width={15} height={15} /></a>
                </div>
            </div>
            {/* TODO ADD LINK ICONS FOR EMAIL, GITHUB */}
            <Image className="mt-5" src='/top-line.svg' alt="SVG" width={1418.25} height={30.862} />
        </nav>
    )
}