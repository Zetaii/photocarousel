"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiMenuAlt2 } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

interface SidebarProps {
  albums: {
    category: string
    items: {
      id: string
      title: string
    }[]
  }[]
}

export default function Sidebar({ albums }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  const toggleSidebar = () => setIsOpen(!isOpen)

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
      >
        {isOpen ? (
          <IoClose className="w-6 h-6" />
        ) : (
          <HiMenuAlt2 className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="fixed left-0 top-0 h-full w-64 bg-neutral-900 z-50 shadow-xl"
      >
        <SimpleBar className="h-full pt-20" autoHide={false}>
          <div className="p-6">
            {albums.map((category) => (
              <div key={category.category} className="mb-8">
                <h3 className="text-neutral-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((album) => (
                    <Link
                      key={album.id}
                      href={`/album/${album.id}`}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        pathname === `/album/${album.id}`
                          ? "bg-neutral-800 text-white"
                          : "text-neutral-300 hover:bg-neutral-800/50"
                      }`}
                      onClick={toggleSidebar}
                    >
                      {album.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SimpleBar>
      </motion.div>

      <style jsx global>{`
        .simplebar-scrollbar::before {
          background-color: #525252;
        }

        .simplebar-track.simplebar-vertical {
          width: 6px;
          background-color: #262626;
        }

        .simplebar-scrollbar.simplebar-visible:before {
          opacity: 0.5;
        }
      `}</style>
    </>
  )
}
