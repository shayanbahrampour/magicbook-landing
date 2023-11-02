import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const list = [
  {
    title: "sharing ebooks",
    description: "MagicBook is a platform for reading and sharing ebooks.",
  },
  {
    title: "account",
    description: "Users must create an account in order to use MagicBook.",
  },
  {
    title: "Terms of Service",
    description:
      "Users must agree to the MagicBook Terms of Service and Privacy Policy in order to create an account.    ",
  },
  {
    title: "content",
    description:
      "Users are responsible for all content that they upload to MagicBook.    ",
  },
  {
    title: "content",
    description:
      "Users are prohibited from uploading any content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, sexually explicit, invasive of privacy, hateful, or racially, ethnically or otherwise objectionable.",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
];

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-sky-600">
                Learn faster
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                MagicBook Rules and Privacy Policy
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="mockup.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    MagicBook uses this information to provide its services to
                    its users, to improve its services, and to communicate with
                    its users. MagicBook will not share your personal
                    information with any third parties without your consent.
                    MagicBook uses cookies to track your activity on its
                    website. You can disable cookies in your browser settings,
                    but this may prevent you from using some of MagicBook's
                    features. You have the right to access, correct, or delete
                    your personal information. You can also request that
                    MagicBook stop processing your personal information. If you
                    have any questions about MagicBook's privacy policy, please
                    contact us at [email protected]
                  </span>
                </li>
                {list.map((item) => (
                  <li key={item.title} className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {item.title}
                      </strong>{" "}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                MagicBook may update this policy from time to time. If MagicBook
                makes any significant changes to this policy, MagicBook will
                notify its users by email or by posting a notice on its website.
                By using MagicBook, you agree to the terms of this policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
