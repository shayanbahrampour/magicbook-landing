"use client";

const people = [
  {
    name: "Shayan Bahrampour",
    role: "Founder / CEO",
    imageUrl: "/shaw.jpeg",
  },
  {
    name: "Ali Behnia",
    role: "Content Manager",
    imageUrl: "/ali.jpg",
  },
  {
    name: "Shapour Rahimpour",
    role: "CTO",
    imageUrl: "/shapour.jpg",
  },
];

export default function Team() {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 xl:h-72">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are proud to be a part of the growing community of ebook readers,
            and we are committed to providing our users with the best possible
            reading experience. We believe that MagicBook is the future of ebook
            reading, and we are excited to see what the future holds.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-sky-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
