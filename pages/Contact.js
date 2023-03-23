
import FeedbackForm from '@components/FeedbackForm'


const Contact = () => {



    return (<>



        <main className="h-screen  flex justify-center items-center">


            <section className='herobg flex flex-col md:flex-row justify-center items-center
            h-auto w-full py-[12vh] backdrop-blur-2xl'>

                <div className="w-[full landscape:w-[50vw]  rounded-full">
                    <FeedbackForm />

                </div>
            </section></main>

    </>
    )
}

export default Contact