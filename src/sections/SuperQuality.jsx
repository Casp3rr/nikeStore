import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
        >
            <div className="flex flex-1 flex-col ">

                <h2 className=' font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>
                    We Provide
                    <span className='text-coral-red'> Superior </span>
                    <span className='text-coral-red'>Quality</span> Shoes

                </h2>
                <p className="  mt-4  lg:max-w-lg info-text">
                    We are committed to providing our customers with the best quality shoes.
                    We source our products from the finest materials, ensuring durability and style that stand the test of time.
                    Our customer satisfaction is paramount, and we are here to provide you with a seamless shopping experience.
                </p>
                <p className="mt-6 info-text lg:max-w-lg">
                    Discover a world of elegance and sophistication with our brand new collection of premium products.
                </p>
                <div className="mt-11">

                    < Button label="View details" />
                </div>

            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default SuperQuality