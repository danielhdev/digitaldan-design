import Link from "next/link"
import ArrowLinks from "./utility/ArrowLinks"
import { BsArrowUpRight } from 'react-icons/bs'

export default function Resume() {
    return (
        <>
            <span className="py-[5%]">
                <Link href="https://drive.google.com/file/d/1JIKTwgwAZAFZ8fyAO0eYpzlEM95a5YWM/view?usp=drive_link"
                >
                    <a target={'_blank'}
                        rel={'noreferrer noopener'}>
                        <ArrowLinks >
                            My resume (PDF) <BsArrowUpRight /> </ArrowLinks>  </a>
                </Link>
            </span>
        </>
    )
}
