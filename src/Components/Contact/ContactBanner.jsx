import BannerImg from "../../assets/ContactBanner.svg"

const ContactBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImg})` }}
      className="bg-no-repeat bg-cover h-[400px] flex flex-col items-center justify-center gap-2"
    >
      <h2 className="text-white font-bold text-6xl">Contact</h2>
      <p className="text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> interdum
        ullamcorper sed pharetra sene.
      </p>
    </div>
  )
}

export default ContactBanner