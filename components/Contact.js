import FeedbackForm from '@components/FeedbackForm'


const Contact = () => {
    return (

        <>
            <main id="Contact"
                className="h-screen  flex justify-center items-center">
                <section className=' flex flex-col md:flex-row justify-center items-center
            h-auto w-full py-[12vh]'>
                    <div className="w-[full] landscape:w-[50vw] rounded-full">
                        <FeedbackForm />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contact