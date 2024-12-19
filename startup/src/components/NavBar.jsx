import { Disclosure, DisclosureButton } from "@headlessui/react";
import { useAuthStore } from "@/store/authStore"; // Importing auth store
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom"; // Import useNavigate

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Calendar", href: "/calendar" },
  { name: "Github", href: "https://github.com/jamisonorton/startup" },
];

const userAuthenticationLinks = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
];

export default function NavBar() {
  const { user, logout } = useAuthStore(); // Destructure logout from useAuthStore
  const navigate = useNavigate(); // Use useNavigate for redirection

  // Handle logout with API call and redirect
  const handleLogoutClick = async (e) => {
    e.preventDefault();

    try {
      // Call the logout method from the auth store
      await logout();

      // Redirect to the homepage after successful logout
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-stone-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            {/* Left-aligned navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right-aligned buttons */}
            <div className="flex space-x-4 ml-auto">
              {!user &&
                userAuthenticationLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              {user && (
                <a
                  key="logout"
                  href="/logout"
                  onClick={handleLogoutClick} // Use handleLogoutClick for logging out
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  Logout
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

// PropTypes validation
NavBar.propTypes = {
  handleLogout: PropTypes.func.isRequired, // Validate handleLogout prop
};
