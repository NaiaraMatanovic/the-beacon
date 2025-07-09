import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  // const [target, setTarget] = useState<HTMLElement | null>(null);
  let target: HTMLElement;
  useEffect(() => {
    const cursor = document.getElementById("cursor_circle");
    const navLinks = document.querySelectorAll("header nav ul li a");

    document.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.animate(
          {
            translate: `${e.clientX - 3}px ${e.clientY - 3}px`,
          },
          { duration: 500, fill: "forwards" }
        );
        // Continue after mouse movement

        // Check if the cursor overlaps an anchor element
        const demo = e.target as HTMLElement;
        if (demo.tagName.toLowerCase() === "a") {
          target = demo;
        }
      }
      // const target = document.querySelector(".initial_target");
      if (cursor && target) {
        const cursorRect = cursor.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        console.log(cursorRect);
        console.log(targetRect);
        // Check if the cursor overlaps the target element
        if (
          ((cursorRect.top < targetRect.top &&
            cursorRect.bottom > targetRect.top) ||
            (cursorRect.top < targetRect.bottom &&
              cursorRect.bottom > targetRect.bottom) ||
            (cursorRect.top > targetRect.top &&
              cursorRect.bottom < targetRect.bottom)) &&
          ((cursorRect.left < targetRect.left &&
            cursorRect.right > targetRect.left) ||
            (cursorRect.left < targetRect.right &&
              cursorRect.right > targetRect.right) ||
            (cursorRect.left > targetRect.left &&
              cursorRect.right < targetRect.right))
        ) {
          target.classList.add("hovered");

          cursor.animate(
            {
              width: "70px",
              height: "70px",
              transform: "translate(-25%, -25%)",
            },
            { duration: 500, fill: "forwards" }
          );
        } else {
          navLinks.forEach((link) => {
            link.classList.remove("hovered");
          });
          cursor.animate(
            {
              width: "15px",
              height: "15px",
              transform: "translate(25%, 25%)",
            },
            { duration: 500, fill: "forwards" }
          );
        }
      }
    });
  }, []);
  // If the target element changes, check if the cursor overlaps it
  useEffect(() => {}, []);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".hero",
    //     pin: true, // pin the trigger element while active
    //     start: "top top", // when the top of the trigger hits the top of the viewport
    //     end: "bottom top", // end after scrolling 500px beyond the start
    //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   },
    // });
  }, []);

  return (
    <>
      <div className="cursor_circle" id="cursor_circle"></div>
      <Home />
    </>
  );
}

export default App;
