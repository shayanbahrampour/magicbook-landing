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
export default function Product() {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Learn faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Download MagicBook today and start reading like magic!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            MagicBook helps you read faster, comprehend more, and finish more
            books.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go To MagicBook (PWA)
          </a>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 `lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
