

function Projectspecs({ tech, role, description }) {
    return (
        <>
            <main className="paragraph lg:w-[40ch] pt-3 pr-8 max-w-md">
                <span className="font-bold"> Tech:  </span>  {tech}<br />
                <span className="font-bold"> Role:   </span>  {role}<br />
                <span className="font-bold">  Project Description:  </span>{description}
            </main>
        </>
    )
}

export default Projectspecs
