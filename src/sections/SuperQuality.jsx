import { nikePurple } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold text-white">
          We Provide You
          <span className='text-purple-600'> Super </span>
          <span className='text-purple-600'>Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. Distinctively integrate interoperable total linkage and covalent processes. Seemlessly generate optimal.</p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={nikePurple}
          alt='product detail'
          width={700}
          height={600}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality;