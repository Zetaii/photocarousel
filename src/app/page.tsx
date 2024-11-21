import React from "react"
import CarouselSection from "./components/CarouselSection"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {
  natureAlbums,
  forestAlbums,
  beachAlbums,
  desertAlbums,
} from "./data/albums"

// Organize albums for sidebar navigation
const sidebarAlbums = [
  {
    category: "Nature & Landscapes",
    items: natureAlbums.map(({ id, title }) => ({ id, title })),
  },
  {
    category: "Forests & Mountains",
    items: forestAlbums.map(({ id, title }) => ({ id, title })),
  },
  {
    category: "Beaches & Coasts",
    items: beachAlbums.map(({ id, title }) => ({ id, title })),
  },
  {
    category: "Deserts & Canyons",
    items: desertAlbums.map(({ id, title }) => ({ id, title })),
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Sidebar albums={sidebarAlbums} />
      <Header />

      <section className="">
        <CarouselSection albums={natureAlbums} direction="left" speed={55} />
      </section>

      <section className="">
        <CarouselSection albums={forestAlbums} direction="right" speed={55} />
      </section>

      <section className="">
        <CarouselSection albums={beachAlbums} direction="left" speed={55} />
      </section>

      <section className="">
        <CarouselSection albums={desertAlbums} direction="right" speed={55} />
      </section>
    </main>
  )
}
