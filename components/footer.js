import Container from "./container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-violet-300 border-t border-accent-2 pt-8 pb-6">
      {/*<Container>*/}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-half lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-slate-700">
              Find out more!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-slate-500">
              We are on these platforms, and we respond in 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a
                className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                href="https://www.lexingtontech.us/"
                target="_blank"
                rel="noreferrer"
                title="Lexington Tech LLC"
              >
                <button
                  className="bg-pink-500 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fa-solid fa-l"></i>
                </button>
              </a>
              <a
                className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                href="https://www.linkedin.com/company/lexingtontech"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <button
                  className="bg-pink-500 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
              </a>
              <a
                className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                href="https://angel.co/company/lexingtontech/"
                target="_blank"
                rel="noreferrer"
                title="Angel"
              >
                <button
                  className="bg-pink-500 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-angellist"></i>
                </button>
              </a>
              <a
                className="hover:text-slate-300 text-slate-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                href="https://discord.gg/RcEeXkdGcQ"
                target="_blank"
                rel="noreferrer"
                title="Discord"
              >
                <button
                  className="bg-pink-500 text-slate-900 hover:text-slate-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-discord"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-half lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="text-1xl block uppercase text-slate-900 font-semibold mb-2">
                  Lexington Tech LLC
                </span>
                <a href="https://app.cosmicjs.com/add-bucket?import_bucket=62b0fd9ea03a790009c7c94c">
                  <img src="https://web-assets.cosmicjs.com/images/powered-by-cosmic.svg" />
                </a>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-slate-900 text-sm font-semibold mb-2">
                  Legal
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="https://lexingtontech.us/terms">
                      <a
                        href="https://lexingtontech.us/terms"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        Terms of Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://lexingtontech.us/privacy">
                      <a
                        href="https://lexingtontech.us/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      >
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-text-slate-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://lexingtontech.us"
                className="text-slate-500 hover:text-slate-300"
              >
                Lexington Tech LLC
              </a>
              .
            </div>
          </div>
        </div>

        {/*<div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
       */}
      </div>
      {/*</Container>*/}
    </footer>
  );
}
