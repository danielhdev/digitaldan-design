
import { ImGithub, ImLinkedin, ImMail2 } from 'react-icons/im'
import { CgTwitter } from 'react-icons/cg'
import Link from 'next/link'

const Contacticons = () => {

    const icons = [

        { id: 1, icon: <ImMail2 />, slug: "mailto:d.huebschmann@tutanota.com" },
        { id: 2, icon: <ImLinkedin />, slug: "https://linkedin.com/in/daniel-huebschmann-175b66236/" },
        { id: 3, icon: <CgTwitter />, slug: "https://twitter.com/digitaldan_de" },
        { id: 4, icon: <ImGithub />, slug: "https://github.com/danielhdev" }
    ]
    return (
        <div className='w-full iconsize fixed bottom-3 z-40 mix-blend-difference flex justify-end
        items-center'>
            {icons.map((item) => (
                <div key={item.id} className="pr-[1rem] md:pr-0">
                    <Link href={`${item.slug}`}>
                        <a rel="noopener noreferrer" target="_blank">
                            <div
                                className="pl-[1.75rem]">  {item.icon}
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Contacticons