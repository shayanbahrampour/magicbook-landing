"use client";
import { BookmarkIcon, ShareIcon, BoltIcon } from "@heroicons/react/20/solid";
const features = [
  {
    name: "Bookmarks and highlights.",
    description:
      "Bookmark important passages and highlight key points for easy reference.",
    icon: BookmarkIcon,
  },
  {
    name: "Sharing.",
    description:
      "Share your favorite passages and quotes with friends and family on social media.",
    icon: ShareIcon,
  },
  {
    name: "Finish Them.",
    description: "Finish your reads without getting tired.",
    icon: BoltIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 -top-20 flex">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-20 mt-16">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Read In A{" "}
              <span className="text-sky-600 animate-pulse">Magical</span>{" "}
              Efficient Way
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Read books one paragraph at a time for a more focused and engaging
              reading experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://app.magic-book.ir/"
                target="_blank"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go To MagicBook (PWA)
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-sky-600">
                  Learn faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  MagicBook helps you read faster, comprehend more, and finish
                  more books.
                </p>
                <p className="mt-10 text-lg leading-8 text-gray-600">
                  MagicBook is a revolutionary new ebook reader that makes
                  reading more magical than ever before. With MagicBook, you can
                  read books one paragraph at a time, with the option to add an
                  image to each paragraph. This helps you to stay focused and
                  engaged, and to comprehend the material more easily.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <sheet
              className="w-[48rem] max-w-none rounded-md shadow-xl ring-1 xl:mb-10 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0 overflow-hidden"
              height="90%"
              min-width="35%"
              color="transparent"
            >
              <iframe
                src="https://my.spline.design/iphone14procopy-8ee44a2e97cc4fd7d1f2b1e897c3b90e/"
                frameborder="0"
                width="100%"
                className="sm:pb-16"
                height="120%"
              ></iframe>
            </sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
