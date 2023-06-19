import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <section
        className="dark:bg-gray-900"
        style={{ backgroundColor: "#EAEAF3", height: "32rem" }}
      >
        <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl font-bold text-red-500 text-lg text-xl dark:text-gray-400">
              <b>This is our dream</b>
            </p>
            <h4 className="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none lg:text-6xl sm:text-4xl dark:text-white">
              We can only
              <br />
              make it <span className="text-blue-700">together</span>
            </h4>
            <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl sm:text-2xl dark:text-gray-400">
              <small>
                Whether it’s health care, the economy, education, gun reform,
                equal pay, voting rights, national security, or the climate
                crisis, We are tackling these issues and others every day.
              </small>
            </p>
          </div>
          <div className="relative lg:col-span-5">
            <img
              src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/hero-earl-1.png"
              alt="mockup"
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div
                className="flex justify-between items-center p-5 lg:w-full sm:w-full"
                style={{ backgroundColor: "#CF1A45", height: "6.5rem" }}
              >
                <div className="flex flex-col justify-center">
                  <p className="text-white text-xl">
                    <b>It is urgent to move ahead together</b>
                  </p>
                
                </div>
                <div>
                  <Link
                    to="Checkout"
                    className="inline-flex bg-white items-center justify-center px-7 py-2 text-bold font-medium text-center text-red-600 border border-gray-300 rounded-sm hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lg:px-52  mt-28 flex flex-col align-center justify:center">
        <div className="flex lg:justify-between ">
          <div className="mr-auto place-self-center lg:col-span-7 mb-5 sm: ml-4">
            <p className="  max-w-2xl font-bold text-red-500  text-lg text-xl dark:text-gray-400">
              <b>This is our dream</b>
            </p>
            <h4 className="max-w-sm  text-xl font-extrabold tracking-tight leading-none text-6xl sm:text-4xl dark:text-white">
              It’s time to take control of our{" "}
              <span className="text-blue-700">life</span>
            </h4>
          </div>
          <div>
            <p className="sm: hidden max-w-md mt-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <small>
                We are fighting for a better, fairer, and brighter future for
                every citizen. It’s time to do things the right way.
              </small>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap lg:justify-between sm: justify-center">
          <div className="w-80  mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-60"
                src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/zach-vessels-wxrd7byfxs4-unsplash.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Healthcare
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                World’s health care system is neither healthy, caring, nor a
                system
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-60"
                src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2020/12/neonbrand-zFSo6bnZJTw-unsplash.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Education
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Education is what remains after one has forgotten what one has
                learned in school
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-60"
                src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/li-an-lim-ycw4yxhrwhm-unsplash.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Climate
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Climate change is sometimes misunderstood as being about changes
                in the weather
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-60"
                src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/zach-vessels-wxrd7byfxs4-unsplash.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Culture
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Culture is a way of coping with the world by defining it in
                detail
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-60"
                src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/pexels-rodnae-productions-6646952.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Economy
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                As much as we need a prosperous economy, we also need a
                prosperity of kindness
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 mb-10 scale-y-95 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-60"
                src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/amy-leigh-barnard-h3apoiylyzk-unsplash.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Justice
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                It is certain, in any case, that ignorance is the most enemy
                justice can have
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#CF1A45" }}>
        <svg
          id="visual"
          viewBox="0 0 1950 100"
          width="100%"
          height="20%"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="-20" width="1950" height="100" fill="#252B3F"></rect>
          <path
            d="M0 15L1950 77L1950 101L0 101Z"
            fill="#CF1A45"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>

        <div className="dark:bg-gray-900">
          <div className="pb-20">
            <div className="mx-auto bg-gradient-to-1 h-96">
              <div className="mx-auto container w-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col">
                  <div className="mt-20">
                    <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">
                      By the numbers
                    </h2>
                  </div>
                  <div className="mt-6 mx-2 md:mx-0 text-center">
                    <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">
                      5 years, consistent quality and you get results. No matter
                      what
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    18500+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    DONATIONS
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    540+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    donors
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    100
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    Scholarships
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    25+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    Awards Won
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          id="visual"
          viewBox="0 0 1950 100"
          width="100%"
          height="20%"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="50" width="1950" height="200" fill="#252B3F"></rect>
          <path
            d="M0 83L1950 21L1950 0L0 0Z"
            fill="#CF1A45"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </section>

      <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
          More Than 10 Years We are making a positive impact by introducing our
          Scholarship Donation Website.
        </h1>
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          <img
            src="https://i.ibb.co/KjrPCyW/map.png"
            alt="world map image"
            className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
          />
          <img
            src="https://i.ibb.co/SXKj9Mf/map-bg.png"
            alt="mobile-image"
            className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
          />
          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
            <p className="text-3xl font-semibold text-gray-800">20K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Recently Property Listed
            </p>
          </div>
          <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
            <p className="text-3xl font-semibold text-gray-800">8K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Active Listening
            </p>
          </div>
          <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
            <p className="text-3xl font-semibold text-gray-800">15K+</p>
            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
              Recently Sold Lands
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
