import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Playfair Display, serif' }}>
      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/6334870/pexels-photo-6334870.jpeg"
                alt="ScholarFund"
                className="relative z-40 object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <h2 className="mb-4 text-4xl font-semibold text-red-600 dark:text-gray-300">
                About ScholarFund
              </h2>
              <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                At ScholarFund, our mission is to make great design accessible and
                delightful for everyone. We believe that education is a
                transformative force, and we are dedicated to supporting students
                from around the world in their pursuit of scholarships. We
                understand the financial challenges that students face, and we aim
                to alleviate those burdens by providing funding opportunities that
                enable talented individuals to achieve their academic dreams.
              </p>
              <a
                href="#donate"
                className="px-4 py-3 text-red-700 transition-all transform border border-red-500 rounded-3xl hover:bg-red-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-services">
        <div>
          <section class="dark:bg-gray-800 dark:text-gray-100 py-6 ">
            <div class="container flex flex-col justify-center p-4 mx-auto md:p-8 my-5">
              <h2 class="mb-12 text-[#d73d61] text-3xl text-center font-bold my-5">
                MOST QUESTION ASKED
              </h2>
              <div
                class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 my-8 "

              >
                <details className="mb-5">
                  <summary class="py-2 bg-[#d73d61] text-white font-bold  outline-none cursor-pointer focus:underline ps-5">
                    Who we are ?
                  </summary>
                  <div class="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloremque saepe fugiat, reiciendis repudiandae quod tenetur asperiores dicta odio velit molestias ducimus ex voluptatum modi laborum blanditiis nihil nulla assumenda?
                    </p>
                  </div>
                </details>
                <details className="mb-5">
                  <summary class="py-2 bg-[#d73d61] text-white font-bold  outline-none cursor-pointer focus:underline ps-5">
                    Lorem ipsum dolor sit amet consectetur ?
                  </summary>
                  <div class="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aliquam reprehenderit, odio doloribus sint, non optio molestiae officiis fuga ut saepe. Nihil amet numquam incidunt blanditiis voluptatum et, quo aut!
                    </p>
                  </div>
                </details>
                <details className="mb-5">
                  <summary class="py-2 bg-[#d73d61] text-white font-bold  outline-none cursor-pointer focus:underline ps-5">
                    Lorem ipsum dolor sit amet consectetur ?

                  </summary>
                  <div class="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi numquam assumenda laboriosam nihil illo, iusto rerum. Sit ipsum incidunt repellat temporibus sed possimus nisi beatae. Quaerat est minus distinctio!
                    </p>
                  </div>
                </details>
                <details className="mb-5">
                  <summary class="py-2 bg-[#d73d61] text-white font-bold  outline-none cursor-pointer focus:underline ps-5">
                    Lorem ipsum dolor sit amet consectetur ?

                  </summary>
                  <div class="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam deleniti quibusdam at enim deserunt consequatur perferendis quis, et, in dolorem reprehenderit, ut facere impedit magnam commodi ullam assumenda veritatis.
                    </p>
                  </div>
                </details>
                <details className="mb-5">
                  <summary class="py-2 bg-[#d73d61] text-white font-bold  outline-none cursor-pointer focus:underline ps-5">
                    Lorem ipsum dolor sit amet consectetur ?

                  </summary>
                  <div class="px-4 pb-4">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aperiam optio ipsum nihil iusto harum fugit adipisci, dicta minus delectus voluptatem, iste eum maxime vitae laudantium, magni dolores accusamus recusandae!
                    </p>
                  </div>
                </details>
                <details className="mb-5">
                  <summary class="py-2 bg-[#d73d61] text-white font-bold  outline-none cursor-pointer focus:underline ps-5">
                    Lorem ipsum dolor sit amet consectetur ?

                  </summary>
                  <div class="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde eius aliquam facilis ab cupiditate possimus iusto? Facere, et fugit. Voluptatem totam beatae ipsa cumque asperiores nostrum nisi debitis voluptatum.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>


    </div>
  );
};

export default AboutUs;
