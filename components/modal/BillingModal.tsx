"use client";

const BillingModal: React.FC<{ closeModal: Function }> = ({ closeModal }) => {
  return (
    <div
      aria-hidden="true"
      className="antialiased fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-auto w-full max-h-full flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50  md:inset-0"
    >
      <div className="relative max-h-auto w-full max-h-full max-w-lg p-4">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Billing InFormation
            </h3>
            <button
              onClick={() => closeModal()}
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="billingInhtmlFormationModal"
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form className="p-4 md:p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="flex items-center">
                  <input
                    id="company_address_billing_modal"
                    data-collapse-toggle="company-info-container-modal"
                    aria-expanded="false"
                    type="checkbox"
                    value=""
                    name="address-type-modal"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="company_address_billing_modal"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Order as a company{" "}
                  </label>
                </div>
              </div>

              <div
                className="grid  grid-cols-2 gap-4 sm:col-span-2"
                id="company-info-container-modal"
              >
                <div>
                  <label
                    htmlFor="company_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Company name{" "}
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Flowbite LLC"
                  />
                </div>

                <div>
                  <label
                    htmlFor="vat_number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    VAT number{" "}
                  </label>
                  <input
                    type="text"
                    id="vat_number"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="DE42313253"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mb-2 flex items-center gap-1">
                  <label
                    htmlFor="saved-address-modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Saved Address{" "}
                  </label>
                  <svg
                    data-tooltip-target="saved-address-modal-desc-2"
                    data-tooltip-trigger="hover"
                    className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <select
                  id="saved-address-modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option selected>Choose one of your saved address</option>
                  <option value="address-1">
                    San Francisco, CalihtmlFornia, United States, 3454, Scott
                    Street
                  </option>
                  <option value="address-2">
                    New York, United States, Broadway 10012
                  </option>
                </select>
                <div
                  id="saved-address-modal-desc-2"
                  role="tooltip"
                  className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Choose one of your saved addresses
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="first_name_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  First Name*{" "}
                </label>
                <input
                  type="text"
                  id="first_name_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="last_name_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Last Name*{" "}
                </label>
                <input
                  type="text"
                  id="last_name_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-input_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Phone Number*{" "}
                </label>
                <div className="flex items-center">
                  <button
                    id="dropdown_phone_input__button_billing_modal"
                    data-dropdown-toggle="dropdown_phone_input_billing_modal"
                    className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="me-2 h-4 w-4"
                      viewBox="0 0 20 15"
                    >
                      <rect
                        width="19.6"
                        height="14"
                        y=".5"
                        fill="#fff"
                        rx="2"
                      />
                      <mask
                        id="a"
                        style={{ maskType: "luminance" }}
                        width="20"
                        height="15"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <rect
                          width="19.6"
                          height="14"
                          y=".5"
                          fill="#fff"
                          rx="2"
                        />
                      </mask>
                      <g mask="url(#a)">
                        <path
                          fill="#D02F44"
                          fillRule="evenodd"
                          d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                          clipRule="evenodd"
                        />
                        <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                        <g filter="url(#filter0_d_343_121520)">
                          <path
                            fill="url(#paint0_linear_343_121520)"
                            fillRule="evenodd"
                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                            clipRule="evenodd"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_343_121520"
                          x1=".933"
                          x2=".933"
                          y1="1.433"
                          y2="6.1"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset="1" stopColor="#F0F0F0" />
                        </linearGradient>
                        <filter
                          id="filter0_d_343_121520"
                          width="6.533"
                          height="5.667"
                          x=".933"
                          y="1.433"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_343_121520"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_343_121520"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    +1
                    <svg
                      className="-me-0.5 ms-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown_phone_input_billing_modal"
                    className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                  >
                    <ul
                      className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown_phone_input__button_billing_modal"
                    >
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          <span className="inline-flex items-center">
                            <svg
                              fill="none"
                              aria-hidden="true"
                              className="me-2 h-4 w-4"
                              viewBox="0 0 20 15"
                            >
                              <rect
                                width="19.6"
                                height="14"
                                y=".5"
                                fill="#fff"
                                rx="2"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path
                                  fill="#D02F44"
                                  fillRule="evenodd"
                                  d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                  clipRule="evenodd"
                                />
                                <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                <g filter="url(#filter0_d_343_121520)">
                                  <path
                                    fill="url(#paint0_linear_343_121520)"
                                    fillRule="evenodd"
                                    d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_343_121520"
                                  x1=".933"
                                  x2=".933"
                                  y1="1.433"
                                  y2="6.1"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#fff" />
                                  <stop offset="1" stopColor="#F0F0F0" />
                                </linearGradient>
                                <filter
                                  id="filter0_d_343_121520"
                                  width="6.533"
                                  height="5.667"
                                  x=".933"
                                  y="1.433"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset dy="1" />
                                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_343_121520"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_343_121520"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                            United States (+1)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          <span className="inline-flex items-center">
                            <svg
                              className="me-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 20 15"
                            >
                              <rect
                                width="19.6"
                                height="14"
                                y=".5"
                                fill="#fff"
                                rx="2"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                <path
                                  fill="#fff"
                                  fillRule="evenodd"
                                  d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                                  clipRule="evenodd"
                                />
                                <path
                                  stroke="#DB1F35"
                                  strokeLinecap="round"
                                  strokeWidth=".667"
                                  d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                                />
                                <path
                                  fill="#E6273E"
                                  fillRule="evenodd"
                                  d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </svg>
                            United Kingdom (+44)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          <span className="inline-flex items-center">
                            <svg
                              className="me-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 20 15"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="19.6"
                                height="14"
                                y=".5"
                                fill="#fff"
                                rx="2"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                <path
                                  fill="#fff"
                                  stroke="#fff"
                                  strokeWidth=".667"
                                  d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                                />
                                <path
                                  fill="url(#paint0_linear_374_135177)"
                                  fillRule="evenodd"
                                  d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                                  clipRule="evenodd"
                                />
                                <path
                                  fill="url(#paint1_linear_374_135177)"
                                  fillRule="evenodd"
                                  d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                                  clipRule="evenodd"
                                />
                                <path
                                  fill="#fff"
                                  fillRule="evenodd"
                                  d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                  clipRule="evenodd"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_374_135177"
                                  x1="0"
                                  x2="0"
                                  y1=".5"
                                  y2="7.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#fff" />
                                  <stop offset="1" stopColor="#F0F0F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_374_135177"
                                  x1="0"
                                  x2="0"
                                  y1=".5"
                                  y2="7.033"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#FF2E3B" />
                                  <stop offset="1" stopColor="#FC0D1B" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Australia (+61)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          <span className="inline-flex items-center">
                            <svg
                              className="me-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 20 15"
                            >
                              <rect
                                width="19.6"
                                height="14"
                                y=".5"
                                fill="#fff"
                                rx="2"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path
                                  fill="#262626"
                                  fillRule="evenodd"
                                  d="M0 5.167h19.6V.5H0v4.667z"
                                  clipRule="evenodd"
                                />
                                <g filter="url(#filter0_d_374_135180)">
                                  <path
                                    fill="#F01515"
                                    fillRule="evenodd"
                                    d="M0 9.833h19.6V5.167H0v4.666z"
                                    clipRule="evenodd"
                                  />
                                </g>
                                <g filter="url(#filter1_d_374_135180)">
                                  <path
                                    fill="#FFD521"
                                    fillRule="evenodd"
                                    d="M0 14.5h19.6V9.833H0V14.5z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_374_135180"
                                  width="19.6"
                                  height="4.667"
                                  x="0"
                                  y="5.167"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset />
                                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_374_135180"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_374_135180"
                                    result="shape"
                                  />
                                </filter>
                                <filter
                                  id="filter1_d_374_135180"
                                  width="19.6"
                                  height="4.667"
                                  x="0"
                                  y="9.833"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset />
                                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_374_135180"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_374_135180"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                            Germany (+49)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          <span className="inline-flex items-center">
                            <svg
                              className="me-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 20 15"
                            >
                              <rect
                                width="19.1"
                                height="13.5"
                                x=".25"
                                y=".75"
                                fill="#fff"
                                stroke="#F5F5F5"
                                strokeWidth=".5"
                                rx="1.75"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.1"
                                  height="13.5"
                                  x=".25"
                                  y=".75"
                                  fill="#fff"
                                  stroke="#fff"
                                  strokeWidth=".5"
                                  rx="1.75"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path
                                  fill="#F44653"
                                  d="M13.067.5H19.6v14h-6.533z"
                                />
                                <path
                                  fill="#1035BB"
                                  fillRule="evenodd"
                                  d="M0 14.5h6.533V.5H0v14z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </svg>
                            France (+33)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          <span className="inline-flex items-center">
                            <svg
                              className="me-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 20 15"
                            >
                              <rect
                                width="19.6"
                                height="14"
                                y=".5"
                                fill="#fff"
                                rx="2"
                              />
                              <mask
                                id="a"
                                style={{ maskType: "luminance" }}
                                width="20"
                                height="15"
                                x="0"
                                y="0"
                                maskUnits="userSpaceOnUse"
                              >
                                <rect
                                  width="19.6"
                                  height="14"
                                  y=".5"
                                  fill="#fff"
                                  rx="2"
                                />
                              </mask>
                              <g mask="url(#a)">
                                <path
                                  fill="#262626"
                                  fillRule="evenodd"
                                  d="M0 5.167h19.6V.5H0v4.667z"
                                  clipRule="evenodd"
                                />
                                <g filter="url(#filter0_d_374_135180)">
                                  <path
                                    fill="#F01515"
                                    fillRule="evenodd"
                                    d="M0 9.833h19.6V5.167H0v4.666z"
                                    clipRule="evenodd"
                                  />
                                </g>
                                <g filter="url(#filter1_d_374_135180)">
                                  <path
                                    fill="#FFD521"
                                    fillRule="evenodd"
                                    d="M0 14.5h19.6V9.833H0V14.5z"
                                    clipRule="evenodd"
                                  />
                                </g>
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_374_135180"
                                  width="19.6"
                                  height="4.667"
                                  x="0"
                                  y="5.167"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset />
                                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_374_135180"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_374_135180"
                                    result="shape"
                                  />
                                </filter>
                                <filter
                                  id="filter1_d_374_135180"
                                  width="19.6"
                                  height="4.667"
                                  x="0"
                                  y="9.833"
                                  colorInterpolationFilters="sRGB"
                                  filterUnits="userSpaceOnUse"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  />
                                  <feOffset />
                                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                  <feBlend
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_374_135180"
                                  />
                                  <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_374_135180"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                            Germany (+49)
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="phone-input"
                      className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="select_country_input_billing_modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Country*{" "}
                  </label>
                </div>
                <select
                  id="select_country_input_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option selected>United States</option>
                  <option value="AS">Australia</option>
                  <option value="FR">France</option>
                  <option value="ES">Spain</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="select_city_input_billing_modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    City*{" "}
                  </label>
                </div>
                <select
                  id="select_city_input_billing_modal"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option selected>San Francisco</option>
                  <option value="NY">New York</option>
                  <option value="LA">Los Angeles</option>
                  <option value="CH">Chicago</option>
                  <option value="HU">Houston</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Shipping Address*{" "}
                </label>
                <textarea
                  id="address_billing_modal"
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Enter here your address"
                ></textarea>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
              <button
                type="submit"
                className="me-2 inline-flex items-center rounded-lg bg-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white "
              >
                Save inFormation
              </button>
              <button
                type="button"
                data-modal-toggle="billingInhtmlFormationModal"
                className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
