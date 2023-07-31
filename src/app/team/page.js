"use client";

const people = [
  {
    name: "Shayan Bahrampour",
    role: "Co-Founder / CEO",
    imageUrl: "/shaw.jpeg",
  },
  {
    name: "Mehdi Nasr",
    role: "Co-Founder / CPO",
    imageUrl: "/shaw.jpeg",
  },
  {
    name: "Ali Behnia",
    role: "Content Manager",
    imageUrl: "/shaw.jpeg",
  },
  {
    name: "Shapour Rahimpour",
    role: "CTO",
    imageUrl: "/shaw.jpeg",
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
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
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
