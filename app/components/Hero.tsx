"use client"
import Image from "next/image"
import profilepic from "../assets/profilepic.png"
import { TypeAnimation } from "react-type-animation"
import { Clouds } from "./ui/Clouds"
import React, { useRef } from "react"

export const Hero = () => {
    const parallaxRef = useRef(null)
    return (
        <>
            <Clouds parallaxRef={parallaxRef} />
        </>
    )
}