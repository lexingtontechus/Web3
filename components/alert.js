import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "@/lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              <a
                href="https://app.cosmicjs.com/add-bucket?import_bucket=62b0fd9ea03a790009c7c94c"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://web-assets.cosmicjs.com/images/powered-by-cosmic.svg"
                  alt="Cosmic"
                />
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
