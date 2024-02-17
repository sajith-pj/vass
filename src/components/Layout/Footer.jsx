import Styles from "@/Components/Layout/layout.module.scss";
import Facebook from "../Icons/Facebook";

import Instagram from "../Icons/Instagram";
import Link from "next/link";
import Youtube from "../Icons/Youtube";
import Linkedin from "../Icons/Linkedin";

const Footer = ({ hideFloatingBtn = false }) => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const floatingElement = document.querySelector(".reg-now-btn");
  //     const header = document.querySelector(".main-section");
  //     const footer = document.querySelector(".footer");
  //     if (hideFloatingBtn && header && floatingElement && footer) {
  //       const isScrolledPastHeader = () => {
  //         const currentScrollPosition =
  //           window.pageYOffset || document.documentElement.scrollTop;
  //         return currentScrollPosition > header.clientHeight;
  //       };

  //       const isScrolledBeforeFooter = () => {
  //         const currentScrollPosition =
  //           window.pageYOffset || document.documentElement.scrollTop;
  //         return (
  //           currentScrollPosition + window.innerHeight <
  //           document.body.offsetHeight - footer.clientHeight
  //         );
  //       };

  //       const shouldDisplayButton = () => {
  //         return isScrolledPastHeader() && isScrolledBeforeFooter();
  //       };
  //       if (shouldDisplayButton()) {
  //         floatingElement.style.display = "block";
  //       } else {
  //         floatingElement.style.display = "none";
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // var userFeed = new Instafeed({
  //   //   get: "user",
  //   //   target: "instafeed-container",
  //   //   resolution: "low_resolution",
  //   //   limit: 9,
  //   //   accessToken:
  //   //     "IGQWRQbERMdUU3Y0RxNnhDeEJaMmJBM0hQTlRlemF2ZADFLaW9zYnJ6X0pHamtUc0w2ZAXJpbEpBbzZAMb0x3SEtFejVCVTVVa1JxTTg1RnpVdGg4NVk5UEFVWlQ2Uzl6dWo3SFExMkd2ekVmSHBxdlExX1o4T3NUM0UZD",
  //   // });
  //   // userFeed.run();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hideFloatingBtn]);

  return (
    <div className="  footer " id="contactus">
      <div className="  pb-[40px]">
        <div className=" custom-container overflow-hidden bg-[#1f1f1fa3] px-12 rounded-2xl">
          <div className="grid lg:grid-cols-3 grid-cols-1 relative  pt-[50px] pb-[100px] ">
            <div className=" flex  justify-between items-center ">
              <div className="w-full  mb-8 ">
                <h1 className="text-white text-[36px] font-semibold mb-4">
                  VASS Systems LLP
                </h1>
                <p className="text-[#838383] mb-4">
                  At VASS Systems LLP, we don&apos;t just consult; we partner in
                  your technological journey. Explore the possibilities with us
                  and elevate your business to new heights.
                </p>
                <ul className={`${Styles["footer-link"]} gap-x-4`}>
                  <Link
                    href="https://www.instagram.com/scaleupconclave/"
                    target="_blank"
                  >
                    <Instagram width="30" fill="white" stroke="white" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61554188141132"
                    target="_blank"
                  >
                    <Facebook fill="white" stroke="white" width="30" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCoqK1Qib6qavzM1kAhhFptg"
                    target="_blank"
                  >
                    <Youtube
                      fill="white"
                      stroke="white"
                      inner="#003B6D"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/99166593/admin/feed/posts/"
                    target="_blank"
                  >
                    <Linkedin width="30" fill="white" stroke="white" />
                  </Link>
                </ul>
              </div>
            </div>

            <div className="text-white text-[36px] font-semibold mb-4  mx-auto ">
              {/* <div className="w-[100px] h-[10px] rounded-full bg-white mb-4"></div> */}

              {/* <div
              id="instafeed-container"
              className={`${Styles["insta-feed"]} grid grid-cols-3 gap-2`}
            ></div> */}
            </div>

            <div className="flex  flex-col  justify-start mx-auto ">
              <div className="text-white text-[36px] font-semibold  mb-4 ">
                Contact
              </div>
              <div className="text-white">
                <a href="mailto:info@vasssystems.com">info@vasssystems.com</a>
              </div>
              <div className="text-white  ">
                <a href="tel:+9179076 06844">+91 79076 06844</a>
              </div>
              <div className="text-white  mb-4  ">
                Cyber Park, Calicut, Kerala, India
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full ">
        <div className="custom-container flex flex-col lg:flex-row justify-between items-center py-4">
          <p className="text-[#838383] mb-3 lg:mb-0">
            Powered by Mudra Charitable Foundation
          </p>
          <div>
            <ul className="flex gap-4 w-full flex-wrap md:flex-nowrap text-[#838383] text-[11px] md:text-[14px] whitespace-nowrap">
              <li>
                <Link href="/" className="uppercase">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="uppercase">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="uppercase">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#media_kit" className="uppercase">
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="uppercase">
                  Terms&Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policies" className="uppercase">
                  Refund Policies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="uppercase">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
