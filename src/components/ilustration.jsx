import imgMobile from "../assets/images/illustration-sign-up-mobile.svg"
import imgDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import useScreenSize from "../hooks/useScreenSize"
import { useEffect, useState } from "react"

export default function Ilustration() {
    const [headderImg, setHeadderImg] = useState(imgMobile)
    const screenSize = useScreenSize();

  useEffect(() => {
    screenSize.width >= 1024 ? setHeadderImg(imgDesktop) : setHeadderImg(imgMobile)
  },[screenSize]);

    return (
        <div className="h-1/3 lg:h-full  w-full rounded-b-3xl lg:rounded-r-3xl bg-white">
            <img src={headderImg} alt="ilustration" className="w-full h-full object-cover rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none" />
        </div>
    )
}