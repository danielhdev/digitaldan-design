

function Projectspecs({ tech, role, description }) {
    return (
        <>
            <div className="paragraph lg:w-[40ch] pt-3 pr-8 max-w-md">
                <span className="font-bold"> Tech:  </span>  {tech}<br />
                <span className="font-bold"> Role:   </span>  {role}<br />
                <span className="font-bold">  Project Description:  </span>{description}
            </div>
        </>
    )
}

export default Projectspecs
