import { BsArrowUpRight } from 'react-icons/bs'

const ArrowLinks = ({ children }) => {
    return (
        <div className="subheader font-bold text-amber-600 cursor-pointer ml-[1.5vw] pl-[1.5vw] md:pl-0"
        >{children} <BsArrowUpRight />
        </div>
    )
}

export default ArrowLinks