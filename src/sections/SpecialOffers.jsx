import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687}
                    className="w-full  object-cover " alt="offer" />

            </div>
            <div className="flex flex-1 flex-col ">

                <h2 className=' font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'>

                    <span className='text-coral-red'> Special </span>
                    Offer
                </h2>

                <p className="mt-6 info-text lg:max-w-lg">
                    We are committed to providing our customers with the best quality shoes.
                    We source our products from the finest materials, ensuring durability and style that stand the test of time.
                    Our customer satisfaction is paramount, and we are here to provide you with a seamless shopping experience.<br />
                    Discover a world of elegance and sophistication with our brand new collection of premium products.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">

                    < Button label="Shop now" iconURL={arrowRight} />
                    < Button label="Learn more"
                        backgroundColor='bg-white'
                        borderColor={'border-slate-gray'}
                        textColor={'text-slate-gray'}
                    />
                </div>

            </div>

        </section>
    )
}

export default SpecialOffers