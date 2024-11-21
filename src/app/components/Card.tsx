"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface CardProps {
  albumId: string
  url: string
  title: string
  description: string
}

export const Card = ({ albumId, url, title, description }: CardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    router.push(`/album/${albumId}`)
  }

  return (
    <div
      className="group relative h-[150px] sm:h-[180px] md:h-[250px] w-[150px] sm:w-[180px] md:w-[300px] overflow-visible cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{
          scale: 1.1,
          zIndex: 20,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-neutral-800 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <div className="relative w-full h-full">
            <Image
              src={url}
              alt={title}
              fill
              sizes="(max-width: 480px) 150px, (max-width: 768px) 180px, 300px"
              className={`object-cover transition-transform duration-500 will-change-transform ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setIsLoaded(true)}
              quality={85}
              priority
            />
            <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
            <motion.div
              className="absolute bottom-0 z-10 p-2 sm:p-3 md:p-4 w-full"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              <h2 className="text-sm sm:text-base md:text-xl font-bold text-white mb-0.5 sm:mb-1 transform transition-transform group-hover:translate-y-[-5px] line-clamp-1">
                {title}
              </h2>
              <p className="text-xs md:text-sm text-white/80 max-w-md line-clamp-2 transform transition-transform group-hover:translate-y-[-5px] hidden sm:block">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
