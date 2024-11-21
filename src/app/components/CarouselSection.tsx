"use client"
import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { AlbumType } from "../types"

const InfiniteCarousel = dynamic(() => import("./InfiniteCarousel"), {
  ssr: false,
  loading: () => (
    <div className="h-[250px] md:h-[400px] bg-neutral-800 animate-pulse" />
  ),
})

const CarouselPlaceholder = () => (
  <div className="h-[250px] md:h-[400px] bg-neutral-800 animate-pulse" />
)

interface CarouselSectionProps {
  albums: AlbumType[]
  direction: "left" | "right"
  speed: number
}

export default function CarouselSection({
  albums,
  direction,
  speed,
}: CarouselSectionProps) {
  return (
    <Suspense fallback={<CarouselPlaceholder />}>
      <section className="py-0">
        <InfiniteCarousel albums={albums} direction={direction} speed={speed} />
      </section>
    </Suspense>
  )
}
