
export default function GalleryMapper({ images }) {
    return (<div className="sm:w-screen md:w-screen lg:w-[90vw] mx-auto px-2 mt-[4rem]">
        <div className="grid grid-cols-1 gap-4 ">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full mx-auto lg:w-[75%] mb-[4rem]
                        border-[1px] border-solid border-stone-800" />
                </div>
            ))}
        </div>
    </div>
    )
}






