import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/bet.png";
import { useNavigate } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Score", href: "/players", current: false },
  { name: "Table Score", href: "/table", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const clearLocal = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {localStorage.getItem("username") ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD////6+vr4+PgFBQUICAj29vbq6urz8/Pu7u5cXFygoKDKysrU1NTY2Njh4eEmJiYxMTF5eXlOTk7AwMA8PDywsLAhISG2traKioqAgIBycnJTU1MwMDBISEjOzs4ZGRmZmZlnZ2dDQ0MSEhKRkZGGhoa7u7ttbW2cnJw4ODhgYGAWFhaOyBMlAAAHL0lEQVR4nO2di3biOAyGbTlXAoQ7FCgUCm2Xzvs/39oJ3cKQ0JAosdLVd87MmenkMPmxbMmKrAjBMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzzv8RxXOf6B67j5FzbYgbT9efH6qMzng5s3wo+g7eo78v/AL8fvf0Oma6rf9vPAplFONubS1ptrlrf6y7WY5apUEnpR6/JVe3lcwIQAGQrhOQfJh3bN1mOxPbWcaayv4nXyWJr+5YfRDuH4Tvkjd6Vrepr3k+idQqFWHrgAagiCpX0lrZv9zH0CnraFjLQb7rDdOFtB47ohPLn0bskkGFHtMhtLJUsMAMv0bYKbbFUbWqzh8R9AXLWFkON9IiUUKg8GbXD+0fSe3ASfo1hoCVSR1tZlBOjFRMZUTdUV4xkUEFhIEfUDXWswCtjoil6RQ3GtiXcQdvXoFgkem8Y/QFdQ9Wh5eRBN5ihECbCper6HbGSBQLR+2hHs6Ib3MzDivJSwrltIbnMqpromZltIXlMw6ommgLB1LaULPTq0K3g668Uyi7F5dQVw0f3E3koJYck/f4MSyEAzZk4RFpmUpHPtuVkcEQUKOWTbTkZ9DHHUPZsy7llgzQJUwA2tgXdcERyFWeFBM20izuG2iWSQjsvRHkptJ7YuGKDrnBDSqEQT1juPgWoTUSnZIr0HjNSu0RHPPqY4me2pBQKUTk/c0NsW9I1Lzi7+0vCF9uirhighmwJQKtWY4guUOo9IiWea1BIawP1+xXWYaW0FP7+MZx76AI9WnnhP/7Pt/wg/sG2qEvcGmKaPqmozWSDsekSUxihK6RVteCIkclU46H3hyNiYzjPKyItrXBOS6EjQlSFEgJBrXZ4garQg4VtQTesSlUJ5WEedVNj7qHOw4BWRJOwQBQoCRqpEHtMhXJvW84trosZuMUES2ockxTGWWyUSQfTU6i/dFWqrDQDT1Es3XddM4goAkEeKdZiaA4xksKYpDzDCEnhyLaQPLB2ibR2hpe4YgBQNWGjAAakdoaX6OX0rfJio+QbxYU0xdxY9djtXdCtoE3oFTnNlTuAAD3S6sxiMwgqPO7W05juJEzR+/J1ldDNW5Pb2mcw9ssFqB5AuLZ980VwxLjcVPQUrMl6wkt0RDku98w7HBMNRzMYbB89GwSB7NF62HSX5AjigwpNWXBbBjD12KPHwrdgJeiGMpm44jABVeS0ujnSDpNDiwYwxXi1z36RVL/+Evqfog1u8Bo3aZKwLJKdipdfl7eSjx7IxFpvBhPSH/Y+bN9iJYzpbSIf5G1tplLagv3IlHO3zT4v0cZnbn+962VY5/YfE6O57ZuBOUyfom4v9g1xrxs9kTy8VYGMPW1rl5ZsTGuvC0nObfMvhmEYhhFJBOe6jpv8+jVxzDVOzp9/FYPnTqfzTOuYQTXSwFu4r6vdpH+ZgAv6k93q9fKa9nJYH7t+mj793kCd/x52j2tSlcAlWE7CdK97XcRgNowq+RmEk7Y0MbtE2522vJdl0UfC3eU8jcZt33hhzJ2OZ0HhWj6QwWwt2rXCrvogiz+9MIU40KdXjZhFujDuSj632An6S6u+vcOx5NM1ABkeD/Rn4yhMsoclFCrPaCRbS2NwhehUL1A0CXCyKZzhQlaup9GjvyD7mO3Jl0UexfygUH+CT+ssvkFvicQr5oH17VR/JiVb1fcyqtAQ8hYIRtRm46JKQ8gMhUCpll1b6Ab/cJ6U8ZhOXnykUI+TpOhAjkwDxaiki/9BoYZC0139JeMfrvymS2C9GfRwO9Ncoj+4Zz2pc4oRvHweJgkQn2zK024+wD12eIPeHE9trjebkhulBxTqGM5i6zYjsGaFyqJEV5ygBjd4i57nJzuGevJxTzfnKpTSt7LczJNkUxMK9X/Sb/xIqWt6XzUh7yxSxk3HqC5ex9kiaMe4aHoqHv9O1NeKiVGPDarT9rJqTNw3q+aqwB0xrC9Sy0PbzLBBQ+2BxG8qdB8loaHOu6ZYC79VSzGiRqrh9Fz4bNBPXAKwb2Iq6iFEbmNSGAVhE0/gXNz2EA/SiFfs2BnAFNXEyxLjJvYTeUC/ZnV6nu8a2THlKpS7epdT0w+qcV9/pdD0j6p3OZ3Vnba4j6q9g/LYprwUqPeVVxPb+qSstx/9OrA/hiqoLTGF+K6cKoDc1hW7uWJqd5k5KwRZX4640czFHYW1xW7P9gcwRdVVrIH7rpwq1JWzQWqSVB2oo+e+44g9gUmYAnKPX/6mP/CdgKs4A5MaFApR7i2/daCNCX+z71hJkeaD/8pZx2ry4pY6XCJ+T/Iq+PhHUMe2Nf0F/h6KjrtP2aEr3FJZSM9ssQX+QW0TjIDCLiVa03H3CSCxm2ZVbxeIC0jU41I6QpoQUyglauDm1PFOrqrEmIGbCUqpDSF2aPpiW1AGL4j6HNGxLSeDDqqVvtmWk8FbMYX/AlbMX6N8+pKFAAAAAElFTkSuQmCC"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={() => clearLocal()}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <a href="/login" className={classNames("bg-gray-100")}>
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
