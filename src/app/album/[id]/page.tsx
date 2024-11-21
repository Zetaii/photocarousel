import React from "react"
import Image from "next/image"
import Link from "next/link"
import { allAlbums } from "@/app/data/albums"

export default function AlbumPage({ params }: { params: { id: string } }) {
  const album = allAlbums.find((a) => a.id === params.id)

  if (!album) {
    return <div>Album not found</div>
  }

  return (
    <main className="min-h-screen bg-neutral-900 p-8">
      <Link
        href="/"
        className="text-white mb-8 inline-block hover:text-gray-300"
      >
        ← Back to Albums
      </Link>

      <h1 className="text-4xl font-bold text-white mb-4">{album.title}</h1>
      <p className="text-white/80 mb-8">{album.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {album.images.map((image) => (
          <div
            key={image.id}
            className="relative h-[300px] rounded-lg overflow-hidden"
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75" />
            <div className="absolute bottom-0 p-4">
              <h2 className="text-xl font-bold text-white">{image.title}</h2>
              <p className="text-white/80">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
