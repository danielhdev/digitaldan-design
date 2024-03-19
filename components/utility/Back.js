import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

const Back = () => {
    return (
        <div className="mx-auto pb-[2rem]">
            <Link href="/#Work">
                <a>
                    <h2 className="abouttext text-stone-900 dark:text-stone-100 cursor-pointer"> back
                        <BsArrowUpRight />
                    </h2>
                </a>
            </Link>
        </div>
    )
}

export default Back