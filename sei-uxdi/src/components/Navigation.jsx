import { useEffect, useState } from 'react';
import '../App.css';
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";



export default function Navigation() {
  const [state, setState] = useState();

  const knob = document.querySelector(".knob")
  const nav = document.querySelector(".navigation")
  const toggleContainer = document.querySelector(".toggle-container")
  const moon = document.querySelector(".moon-path")
  const sun = document.querySelector(".sun-path")
  const swirl = document.querySelector(".swirl-path")
  const title = document.querySelector(".title")

  function handleClick(event) {
    if (state === "light") {
      setState("dark");
    } else {
      setState("light")
    }
  }

  useEffect(() => {
    if (state === undefined) {
      return
    }
    else if (state === "light") {
      knob.classList.add("knob-dark")
      nav.classList.add("nav-dark")
      toggleContainer.classList.add("toggle-container-dark")
      moon.classList.add("moon-path-dark")
      sun.classList.add("sun-path-dark")
      swirl.classList.add("swirl-path-dark")
      title.classList.add("title-dark")
    } else {
      knob.classList.remove("knob-dark")
      nav.classList.remove("nav-dark")
      toggleContainer.classList.remove("toggle-container-dark")
      moon.classList.remove("moon-path-dark")
      sun.classList.remove("sun-path-dark")
      swirl.classList.remove("swirl-path-dark")
      title.classList.remove("title-dark")
    }
  }, [state])


  return (
    <div className="navigation">
      <span className="title">Milky's Way</span>
      <span className="swirl-container">
        <svg width="29" height="30" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
          <path className="swirl-path" d="M12.5318 24.9455C18.8622 27.4861 26.0854 24.2465 28.9057 22.3091L26.2883 25.4848C21.6622 30.4222 15.839 30.3383 13.5057 29.6792C4.59441 28.3849 0.865134 20.7911 0.11441 17.156C-0.737764 7.74861 3.15789 2.41576 12.2275 0.378499C19.4831 -1.25131 24.6246 2.77528 26.2883 4.99231C32.8135 15.1067 26.0448 20.5514 21.8448 22.0095C13.2257 24.9335 9.97528 19.0734 9.42745 15.7778C8.8918 9.30652 13.5057 8.36778 15.8796 8.70732C17.0564 8.90705 19.2761 10.1094 18.7405 13.3211C18.2048 16.5328 15.2709 16.2971 13.8709 15.7778C16.4518 19.0854 20.0593 18.0748 21.5405 17.156C24.2675 14.8071 23.326 10.9443 22.5144 9.30652C18.4727 2.78727 11.7405 5.27193 8.87963 7.32917C1.03963 16.1493 8.04774 22.7485 12.5318 24.9455Z" />
        </svg>
      </span>
      <div onClick={handleClick} class="toggle-container">
        <span className="moon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="moon-path" d="M10.915 9.14941C7.3877 9.14941 5.19336 7.03711 5.19336 3.61914C5.19336 2.66211 5.35059 1.78711 5.60352 1.30859C5.72656 1.06934 5.76758 0.905273 5.76758 0.720703C5.76758 0.392578 5.50781 0.0712891 5.11133 0.0712891C5.00879 0.0712891 4.83105 0.105469 4.60547 0.194336C2.00781 1.24707 0.223633 3.92676 0.223633 6.8252C0.223633 10.9951 3.25879 14.0371 7.42871 14.0371C10.3887 14.0371 12.8564 12.4375 13.9844 9.85352C14.0869 9.62109 14.1211 9.42285 14.1211 9.29297C14.1211 8.91016 13.8408 8.6709 13.5195 8.6709C13.3555 8.6709 13.1982 8.69824 12.9727 8.80078C12.4668 9.0127 11.6807 9.14941 10.915 9.14941ZM1.7207 6.79102C1.7207 4.98633 2.60254 3.21582 4.05176 2.17676C3.89453 2.67578 3.80566 3.22266 3.80566 3.82422C3.80566 7.9873 6.38281 10.5098 10.6416 10.5098C11.1475 10.5098 11.585 10.4551 11.9951 10.3115C11.0312 11.7129 9.30859 12.54 7.46289 12.54C4.14746 12.54 1.7207 10.1133 1.7207 6.79102Z" />
            <defs>
              <linearGradient id="dark-gradient" x1="-2.5" y1="9" x2="18.5" y2="9" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF00B8" />
                <stop offset="1" stop-color="#FFB800" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="sun">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="sun-path" d="M7.98242 3.18359C8.39258 3.18359 8.73438 2.8418 8.73438 2.43164V1.04395C8.73438 0.640625 8.39258 0.291992 7.98242 0.291992C7.57227 0.291992 7.23047 0.640625 7.23047 1.04395V2.43164C7.23047 2.8418 7.57227 3.18359 7.98242 3.18359ZM11.4346 4.63281C11.7217 4.91309 12.2002 4.91309 12.4941 4.62598L13.4785 3.6416C13.7588 3.35449 13.7588 2.8623 13.4717 2.5752C13.1846 2.29492 12.6992 2.29492 12.4121 2.58203L11.4277 3.57324C11.1406 3.85352 11.1475 4.33887 11.4346 4.63281ZM4.53027 4.63281C4.81738 4.3457 4.81738 3.85352 4.54395 3.57324L3.55957 2.58203C3.2793 2.30176 2.78711 2.29492 2.5 2.5752C2.21289 2.8623 2.21289 3.35449 2.48633 3.63477L3.4707 4.62598C3.75781 4.91309 4.24316 4.91309 4.53027 4.63281ZM7.98242 11.7354C9.99219 11.7354 11.6533 10.0742 11.6533 8.06445C11.6533 6.04785 9.99219 4.38672 7.98242 4.38672C5.97266 4.38672 4.31152 6.04785 4.31152 8.06445C4.31152 10.0742 5.97266 11.7354 7.98242 11.7354ZM7.98242 10.2998C6.75879 10.2998 5.74707 9.28125 5.74707 8.06445C5.74707 6.84082 6.75879 5.8291 7.98242 5.8291C9.19922 5.8291 10.2178 6.84082 10.2178 8.06445C10.2178 9.28125 9.19922 10.2998 7.98242 10.2998ZM12.8633 8.06445C12.8633 8.47461 13.2051 8.81641 13.6152 8.81641H14.9961C15.3994 8.81641 15.748 8.47461 15.748 8.06445C15.748 7.6543 15.3994 7.3125 14.9961 7.3125H13.6152C13.2051 7.3125 12.8633 7.6543 12.8633 8.06445ZM3.1084 8.06445C3.1084 7.6543 2.75977 7.3125 2.35645 7.3125H0.975586C0.56543 7.3125 0.223633 7.6543 0.223633 8.06445C0.223633 8.47461 0.56543 8.81641 0.975586 8.81641H2.35645C2.75977 8.81641 3.1084 8.47461 3.1084 8.06445ZM11.4277 11.5098C11.1406 11.7969 11.1475 12.2754 11.4346 12.5693L12.4258 13.5537C12.7061 13.8408 13.1914 13.8271 13.4854 13.54C13.7656 13.2598 13.7656 12.7744 13.4785 12.4873L12.4873 11.5029C12.2002 11.2227 11.7148 11.2227 11.4277 11.5098ZM4.54395 11.5098C4.25 11.2227 3.75781 11.2227 3.47754 11.5029L2.49316 12.4805C2.20605 12.7676 2.19922 13.2529 2.47949 13.54C2.7666 13.8271 3.25879 13.834 3.5459 13.5469L4.53027 12.5693C4.81738 12.2754 4.81738 11.7969 4.54395 11.5098ZM7.98242 12.9453C7.57227 12.9453 7.23047 13.2871 7.23047 13.6973V15.0781C7.23047 15.4883 7.57227 15.8301 7.98242 15.8301C8.39258 15.8301 8.73438 15.4883 8.73438 15.0781V13.6973C8.73438 13.2871 8.39258 12.9453 7.98242 12.9453Z" fill="url(#light-gradient)" />
            <defs>
              <linearGradient id="light-gradient" x1="-2.5" y1="9" x2="18.5" y2="9" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF00B8" />
                <stop offset="1" stop-color="#FFB800" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <div className="knob">
        </div>
      </div>
    </div>
  )
}