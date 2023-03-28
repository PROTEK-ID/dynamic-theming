import { ReactElement } from "react";
import { Link, Location, useLocation } from "react-router-dom";

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps): ReactElement {
  const location: Location = useLocation();

  return (
    <div className="navbar bg-primary text-primary-content shadow-md px-4 py-2 sticky top-0 z-50">
      <div className="navbar-start">
        {location.pathname !== "/" && (
          <Link to="/" className="btn btn-ghost btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              fill="currentColor"
            >
              <path d="M449.796 862.922 184.54 597.923q-4.949-4.949-7.052-10.231-2.102-5.282-2.102-11.692t2.102-11.692q2.103-5.282 7.052-10.231l266.05-265.794q6.821-6.821 16.795-6.923 9.974-.103 17.538 7.718 7.82 7.615 7.923 17.589.102 9.974-7.718 17.794L258.716 550.873h488.258q10.615 0 17.871 7.128 7.257 7.128 7.257 17.999 0 10.871-7.257 17.999-7.256 7.128-17.871 7.128H258.716L485.923 828.59q6.82 6.821 6.923 16.769.102 9.948-7.718 17.563-7.615 7.821-17.692 7.821t-17.64-7.821Z" />
            </svg>
          </Link>
        )}
      </div>
      <div className="navbar-center">
        <span className="text-xl tracking-wide">{title}</span>
      </div>
      <div className="navbar-end">
        {location.pathname === "/" && (
          <Link to="/settings" className="btn btn-ghost btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              fill="currentColor"
            >
              <path d="M396.36 955.999 379.232 835.23q-19.051-6.462-40.475-18.59-21.423-12.129-37.295-25.77l-112.179 49.846-84.05-147.536 99.922-74.179q-1.795-10-2.577-21.308t-.782-21.308q0-9.616.782-20.86.782-11.243 2.577-22.526l-99.922-74.435 84.05-146.511 111.794 49.205q17.026-13.769 37.783-25.705 20.756-11.937 39.988-18.116l17.512-121.436h167.28l17.128 121.154q20.718 7.615 40.295 18.577 19.578 10.962 36.321 25.526l113.59-49.205 83.793 146.511-101.461 74.512q2.564 11.18 3.09 22.039.526 10.859.526 20.885 0 9.641-.718 20.295-.718 10.654-3.103 22.731l100.948 74.154-84.05 147.536-112.615-50.231q-17.41 14.411-37 26.296t-39.616 18.064L563.64 955.999H396.36Zm83.024-264.872q48.026 0 81.576-33.551 33.551-33.551 33.551-81.576 0-48.025-33.551-81.576-33.55-33.551-81.576-33.551-47.973 0-81.55 33.551-33.576 33.551-33.576 81.576 0 48.025 33.576 81.576 33.577 33.551 81.55 33.551Zm0-50.255q-26.897 0-45.884-18.987-18.987-18.988-18.987-45.885t18.987-45.885q18.987-18.987 45.884-18.987 27.154 0 46.013 18.987 18.859 18.988 18.859 45.885t-18.859 45.885q-18.859 18.987-46.013 18.987ZM480 576Zm-41.897 329.744h83.077l14.384-110.129q31.436-8 58.269-23.474 26.834-15.474 51.449-39.449l102.769 44.077 39.795-69.897-90.564-67.282q4.333-17.026 6.474-32.488 2.141-15.461 2.141-31.102 0-16.282-1.936-31.359-1.935-15.077-6.679-31.461l91.333-68.052-39.794-69.897-103.924 44.282q-20.743-22.949-49.936-40.487-29.192-17.539-59.781-22.641l-13.283-110.129h-83.589L425.077 356q-32.359 6.82-59.641 22.487-27.282 15.667-51.231 40.436l-103.026-43.692-39.794 69.897 90.435 66.692q-4.589 15.308-6.794 31.308-2.206 16-2.206 33.257 0 16.282 2.206 31.897 2.205 15.615 6.41 31.308l-90.051 67.282 39.794 69.897 102.641-43.897q23.59 24.051 51 39.59Q392.231 788 424.692 796l13.411 109.744Z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
