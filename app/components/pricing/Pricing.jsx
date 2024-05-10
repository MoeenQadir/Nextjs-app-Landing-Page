import React from 'react';

const Pricing = () => {
    return (
        <>
            <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="text-2xl font-bold text-white md:text-5xl">
                        Pricing
                    </h2>
                </div>
                <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
                    <div className="group relative md:col-span-1 lg:w-[32%]">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-[#0c1b44] dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                        />
                        <div className="relative space-y-8 p-8">
                            <h3 className="text-center text-3xl font-semibold text-white dark:text-white">
                                Monthly
                            </h3>
                            <div className="relative flex justify-around">
                                <div className="flex">
            <span className="-ml-6 mt-2 text-3xl font-bold text-white">
              $
            </span>
                                    <span className="leading-0 text-8xl font-bold text-white dark:text-white">
              19
            </span>
                                </div>
                                <span className="absolute right-9 bottom-2 text-xl font-bold text-white">
            / Month
          </span>
                            </div>
                            <ul
                                role="list"
                                className="m-auto w-max space-y-4 pb-6 text-white dark:text-white"
                            >
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Second premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Third advantage</span>
                                </li>
                            </ul>
                            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#8c4acb] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-white dark:text-white">
            Start plan
          </span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative row-start-1 md:col-span-2 lg:w-[36%]">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-[#0c1b44] dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                        />
                        <div className="relative space-y-8 p-8">
                            <h3 className="text-center text-3xl font-semibold text-white dark:text-white">
                                Annual
                            </h3>
                            <div className="overflow-hidden">
                                <div className="-mr-20 flex items-end justify-center">
                                    <div className="flex">
              <span className="-ml-6 mt-2 text-3xl font-bold text-white">
                $
              </span>
                                        <span className="leading-0 text-8xl font-bold text-white dark:text-white">
                15
              </span>
                                    </div>
                                    <div className="mb-2">
              <span className="block text-xl font-bold text-white dark:text-white">
                .56
              </span>
                                        <span className="block text-xl font-bold text-white">
                / Month
              </span>
                                    </div>
                                </div>
                                <div className="text-center text-2xl font-medium">
                                    <span className="text-white line-through">$234</span>
                                    <span className="font-semibold text-white dark:text-white">
              $190
            </span>
                                </div>
                                <span className="block text-center text-xs uppercase text-white">
            BILLED YEARLY
          </span>
                                <span
                                    className="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-white">
            1 Discount applied
          </span>
                            </div>
                            <ul
                                role="list"
                                className="m-auto w-max space-y-4 pb-6 text-white dark:text-white"
                            >
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Second premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Third advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Fourth organizations advantage</span>
                                </li>
                            </ul>
                            <button
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#16e259] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-black dark:text-dark">
            Start plan
          </span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative md:col-span-1 lg:w-[32%]">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-[#0c1b44] dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                        />
                        <div className="relative space-y-8 p-8">
                            <h3 className="text-center text-3xl font-semibold text-white dark:text-white">
                                Free
                            </h3>
                            <div className="relative flex justify-around">
                                <div className="flex">
            <span className="-ml-2 mt-2 text-3xl font-bold text-white">
              $
            </span>
                                    <span className="leading-0 text-8xl font-bold text-white dark:text-white">
              0
            </span>
                                </div>
                            </div>
                            <ul
                                role="list"
                                className="m-auto w-max space-y-4 pb-6 text-white dark:text-white"
                            >
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Second premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-white">✓</span>
                                    <span>Third advantage</span>
                                </li>
                            </ul>
                            <button
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#8c4acb] before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-offwhite ">
            Get Started
          </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Pricing;