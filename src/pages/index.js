import Slider from "@/components/Slider";
import Image from "next/image";
import { EffectFade, Autoplay } from "swiper/modules";
import Navbar from "@/components/Layout/Navbar";
import Styles from "./index.module.scss";
import Footer from "@/components/Layout/Footer";
import dvk from "@/assets/images/dvk.png";
import ipcs from "@/assets/images/ipcs.png";
import reliva from "@/assets/images/reliva.png";
import stjoseph from "@/assets/images/stjoseph.png";
import desertspring from "@/assets/images/desertsprings.webp";
export default function Home() {
  const slides = [
    () => (
      <div className="custom-container h-screen w-full grid grid-cols-2 ">
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-6xl font-bold mb-4">VASS Systems LLP</h1>
          <h1 className="text-2xl font- ">
            Your Trusted IT Consulting Partner
          </h1>
        </div>
        {/* <div>
          <Image
            src={banner1.src}
            width="500"
            height="500"
            className="w-[500px] h-[500px]"
          />
        </div> */}
      </div>
    ),
    () => (
      <div className=" custom-container h-screen w-full flex ">
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-6xl font-bold mb-4 capitalize">
            we don&apos;t just consult
          </h1>
          <h1 className="text-2xl  ">
            we partner in your technological journey
          </h1>
        </div>
      </div>
    ),
    () => (
      <div className=" custom-container h-screen w-full flex ">
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-6xl font-bold mb-4 capitalize">
            Explore the possibilities
          </h1>
          <h1 className="text-2xl  ">
            with us and elevate your business to new heights.
          </h1>
        </div>
      </div>
    ),
  ];
  let partners = [dvk, ipcs, reliva, stjoseph, desertspring];
  return (
    <div>
      <Navbar isAbsolute={true} />
      <Slider
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
        }}
        showPagination={false}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-screen md:h-screen  z-[10]"
        slides={slides}
      />

      {/* HIGHLIGHTS */}
      <div className="custom-container  py-[100px] h-full">
        <div className="py-[100px]">
          <h1 className="text-[36px] title after-line">Highlights</h1>
        </div>
        <div className="grid grid-cols-12 gap-x-12 gap-y-24">
          <div
            className={` col-span-12 lg:col-span-6 ${Styles["card"]} bg-[#1f1f1fa3] hover:bg-black/[0.7] shadow-md shadow-[#1f1f1fa3]  bg-primary-purple  mb-4 rounded-md flex flex-col items-start justify-center p-12 `}
          >
            <div className="z-[1] mt-3">
              <h1 className="text-[30px]  font-semibold  leading-none mb-4">
                IT Consulting Excellence
              </h1>

              <p className="text-white font-normal">
                Anand, our founder, is committed to delivering top-notch IT
                consulting services. With extensive experience, he serves as a
                trusted advisor, providing expert guidance in IT project
                management, support, architecture, development, and specialized
                areas such as Python, JavaScript, API design, DevOps, and
                security consulting.
              </p>
            </div>
            <span className={Styles["outline-text"]}>01</span>
          </div>
          <div
            className={`mb-4 col-span-12 lg:col-span-6  ${Styles["card"]} bg-[#1f1f1fa3] hover:bg-black/[0.7] shadow-md shadow-[#1f1f1fa3] lg:col-span-6 bg-primary-purple  mb-4 lg:mb-0 lg:mr-3 rounded-md flex flex-col items-start justify-center p-12 `}
          >
            <div className="z-[1] mt-3">
              <h1 className="text-[30px]  font-semibold  leading-none mb-4">
                Exclusive B2B Focus
              </h1>

              <p className="text-white font-normal">
                VASS Systems strictly focuses on B2B collaborations, engaging
                exclusively with IT companies and software firms. This approach
                allows us to tailor our expertise to the unique needs and
                challenges of our industry peers, refraining from direct
                dealings with end customers.
              </p>
            </div>
            <span className={Styles["outline-text"]}>02</span>
          </div>

          <div
            className={`mb-4 col-span-12 lg:col-span-7  ${Styles["card"]} bg-[#1f1f1fa3] hover:bg-black/[0.7] shadow-md shadow-[#1f1f1fa3] bg-primary-purple  mb-4 lg:mb-0 lg:mr-3 rounded-md flex flex-col items-start justify-center p-12 `}
          >
            <div className="z-[1] mt-3">
              <h1 className="text-[30px]  font-semibold  leading-none mb-4">
                Comprehensive Service Portfolio
              </h1>

              <p className="text-white font-normal">
                Our service offerings encompass a wide range, from hourly
                developer support and corporate training to scalable and
                delegatable IT development models. VASS Systems is dedicated to
                providing solutions that align with the diverse requirements of
                our clients.
              </p>
            </div>
            <span className={Styles["outline-text"]}>03</span>
          </div>
          <div
            className={`mb-4 col-span-12 lg:col-span-5  ${Styles["card"]} bg-[#1f1f1fa3] hover:bg-black/[0.7] shadow-md shadow-[#1f1f1fa3] bg-primary-purple  mb-4 lg:mb-0 lg:mr-3 rounded-md flex flex-col items-start justify-center p-12 `}
          >
            <div className="z-[1] mt-3">
              <h1 className="text-[30px]  font-semibold  leading-none mb-4">
                Hybrid Development Model
              </h1>

              <p className="text-white font-normal">
                Pioneering a hybrid model for IT development jobs from India, we
                aim to create a scalable and efficient approach. This model
                integrates the advantages of both local expertise and global
                collaboration, ensuring optimal results for our clients.
              </p>
            </div>
            <span className={Styles["outline-text"]}>04</span>
          </div>
          <div
            className={` col-span-12   ${Styles["card"]} bg-[#1f1f1fa3] hover:bg-black/[0.7] shadow-md shadow-[#1f1f1fa3] bg-primary-purple  mb-4 lg:mb-0 lg:mr-3 rounded-md flex flex-col items-start justify-center p-12 `}
          >
            <div className="z-[1] mt-3">
              <h1 className="text-[30px]  font-semibold  leading-none mb-4">
                Hybrid Development Model
              </h1>

              <p className="text-white font-normal">
                Pioneering a hybrid model for IT development jobs from India, we
                aim to create a scalable and efficient approach. This model
                integrates the advantages of both local expertise and global
                collaboration, ensuring optimal results for our clients.
              </p>
            </div>
            <span className={Styles["outline-text"]}>05</span>
          </div>
        </div>
      </div>
      {/* HIGHLIGHTS */}

      {/* flipped sections */}
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 py-[100px] ">
          <div className="px-6">
            <h1
              className={` ${Styles["left-margin"]} text-[30px]  font-semibold  leading-none mb-4`}
            >
              Vision
            </h1>

            <p className="text-white font-normal">
              Enjoying work-life balance, VASS Systems focuses on continuous R&D
              in Technology, including IoT, robotics, AI, ML, Data Engineering,
              Web3.0, and other cutting-edge technologies, driven by a group of
              committed techies.
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[100px] ">
          <div></div>
          <div className="px-6">
            <h1
              className={` ${Styles["left-margin"]} text-[30px]  font-semibold  leading-none mb-4`}
            >
              Objectives and Goals
            </h1>

            <p className="text-white font-normal">
              Moving beyond traditional time-trading IT jobs, our goal is to
              foster a culture of IT consulting and delegate development tasks
              without compromising productivity or end results.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[100px] ">
          <div className="px-6">
            <h1
              className={` ${Styles["left-margin"]} text-[30px]  font-semibold  leading-none mb-4`}
            >
              Revenue Generation Model
            </h1>

            <p className="text-white font-normal">
              Our revenue is generated through hourly/monthly support for IT
              giants in the market on a contract basis. We offer services such
              as Technology Implementation, Digital Transformation, AMC/Cloud
              support, and Cybersecurity packages.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      {/* flipped sections */}

      <div className="py-[100px] custom-container">
        <h1 className="text-[36px] title after-line whitespace-nowrap">
          Our Clients
        </h1>
        <div className="grid grid-cols-2 gap-7 lg:grid-cols-5 mt-4">
          {partners.map((partner, index) => (
            <div
              className="h-full flex justify-center items-center bg-white rounded-xl p-3"
              key={index}
            >
              <Image
                src={partner.src}
                className={`${
                  index === 7 || index === 30 || index === 20
                    ? "w-[75px]"
                    : index === 16
                    ? "w-[200px]"
                    : "w-[150px]"
                } h-auto`}
                width="300"
                height="200"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
