import { AlbumType } from "../types"
import { cardsSet1, cardsSet2, cardsSet3, cardsSet4 } from "./cardSets"

// Nature Albums
export const natureAlbums: AlbumType[] = [
  {
    id: "nature-wonders",
    title: "Nature Wonders",
    description: "Explore the breathtaking beauty of natural landscapes",
    coverImage: cardsSet1[0].url,
    images: cardsSet1,
  },
  {
    id: "mountain-majesty",
    title: "Mountain Majesty",
    description: "Towering peaks and dramatic vistas",
    coverImage: cardsSet1[1].url,
    images: cardsSet1,
  },
  {
    id: "wild-rivers",
    title: "Wild Rivers",
    description: "Rushing waters and serene streams",
    coverImage: cardsSet1[2].url,
    images: cardsSet1,
  },
  {
    id: "autumn-colors",
    title: "Autumn Colors",
    description: "The vibrant hues of fall foliage",
    coverImage: cardsSet1[3].url,
    images: cardsSet1,
  },
  {
    id: "spring-bloom",
    title: "Spring Bloom",
    description: "Nature awakening in vibrant colors",
    coverImage: cardsSet1[4].url,
    images: cardsSet1,
  },
]

// Forest Albums
export const forestAlbums: AlbumType[] = [
  {
    id: "mystic-forests",
    title: "Mystic Forests",
    description: "Journey through enchanted woodland realms",
    coverImage: cardsSet2[0].url,
    images: cardsSet2,
  },
  {
    id: "ancient-woods",
    title: "Ancient Woods",
    description: "Centuries-old trees and timeless forests",
    coverImage: cardsSet2[1].url,
    images: cardsSet2,
  },
  {
    id: "forest-light",
    title: "Forest Light",
    description: "Sunbeams dancing through the canopy",
    coverImage: cardsSet2[2].url,
    images: cardsSet2,
  },
  {
    id: "woodland-secrets",
    title: "Woodland Secrets",
    description: "Hidden wonders of the forest floor",
    coverImage: cardsSet2[3].url,
    images: cardsSet2,
  },
  {
    id: "forest-seasons",
    title: "Forest Seasons",
    description: "The changing faces of woodland life",
    coverImage: cardsSet2[4].url,
    images: cardsSet2,
  },
]

// Beach Albums
export const beachAlbums: AlbumType[] = [
  {
    id: "tropical-paradise",
    title: "Tropical Paradise",
    description: "Discover pristine beaches and coastal beauty",
    coverImage: cardsSet3[0].url,
    images: cardsSet3,
  },
  {
    id: "ocean-waves",
    title: "Ocean Waves",
    description: "The endless rhythm of the sea",
    coverImage: cardsSet3[1].url,
    images: cardsSet3,
  },
  {
    id: "coastal-life",
    title: "Coastal Life",
    description: "Living by the ocean's edge",
    coverImage: cardsSet3[2].url,
    images: cardsSet3,
  },
  {
    id: "beach-sunsets",
    title: "Beach Sunsets",
    description: "Golden hours by the shore",
    coverImage: cardsSet3[3].url,
    images: cardsSet3,
  },
  {
    id: "island-escapes",
    title: "Island Escapes",
    description: "Remote paradises and hidden coves",
    coverImage: cardsSet3[4].url,
    images: cardsSet3,
  },
]

// Desert Albums
export const desertAlbums: AlbumType[] = [
  {
    id: "desert-dreams",
    title: "Desert Dreams",
    description: "Experience the mystique of arid landscapes",
    coverImage: cardsSet4[0].url,
    images: cardsSet4,
  },
  {
    id: "sand-dunes",
    title: "Sand Dunes",
    description: "Endless waves of golden sand",
    coverImage: cardsSet4[1].url,
    images: cardsSet4,
  },
  {
    id: "desert-nights",
    title: "Desert Nights",
    description: "Starlit skies over endless horizons",
    coverImage: cardsSet4[2].url,
    images: cardsSet4,
  },
  {
    id: "desert-life",
    title: "Desert Life",
    description: "Survival in the harshest conditions",
    coverImage: cardsSet4[3].url,
    images: cardsSet4,
  },
  {
    id: "canyon-wonders",
    title: "Canyon Wonders",
    description: "Nature's grand desert sculptures",
    coverImage: cardsSet4[4].url,
    images: cardsSet4,
  },
]

// Export all albums for the album page
export const allAlbums = [
  ...natureAlbums,
  ...forestAlbums,
  ...beachAlbums,
  ...desertAlbums,
]
