"use client"
import React from "react"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import { Card } from "./Card"
import { AlbumType } from "../types"

interface InfiniteCarouselProps {
  direction?: "left" | "right"
  speed?: number
  albums: AlbumType[]
}

const InfiniteCarousel = ({
  direction = "left",
  speed = 20,
  albums,
}: InfiniteCarouselProps) => {
  const controls = useAnimationControls()
  const triplicatedAlbums = [...albums, ...albums, ...albums]

  useEffect(() => {
    const animate = async () => {
      const startX = direction === "left" ? "0%" : "-33.33%"
      const endX = direction === "left" ? "-33.33%" : "0%"

      await controls.start({
        x: [startX, endX],
        transition: {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        },
      })
    }

    animate()

    // Pause animation when the tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        controls.stop()
      } else {
        animate()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [direction, speed, controls])

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900">
      <motion.div
        className="flex gap-6 sm:gap-0 md:gap-0"
        initial={{ x: direction === "left" ? "0%" : "-33.33%" }}
        animate={controls}
        style={{
          width: "300%",
        }}
      >
        {triplicatedAlbums.map((album, index) => (
          <Card
            key={`${album.id}-${index}`}
            albumId={album.id}
            url={album.coverImage}
            title={album.title}
            description={album.description}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteCarousel
