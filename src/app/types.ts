export interface ImageType {
  url: string
  title: string
  description: string
  id: number
}

export interface CardType {
  url: string
  title: string
  description: string
  id: number
}

export interface AlbumType {
  id: string
  title: string
  description: string
  coverImage: string
  images: ImageType[]
}
