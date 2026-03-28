import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import {
  ArrowsPointingOutIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

const videoId = 'Z7Pmb8gTuMk'
const posterSource = '/images/hero-video-poster.webp'

function getEmbedUrl(autoplay = false) {
  let params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    modestbranding: '1',
    playsinline: '1',
    rel: '0',
  })

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`
}

export function HeroVideoCard({ className }) {
  let [isInlinePlaying, setIsInlinePlaying] = useState(false)
  let [isModalOpen, setIsModalOpen] = useState(false)

  function startInlinePlayback() {
    setIsModalOpen(false)
    setIsInlinePlaying(true)
  }

  function openModal() {
    setIsInlinePlaying(false)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function restorePoster() {
    setIsInlinePlaying(false)
  }

  return (
    <>
      <section
        className={clsx(
          'relative overflow-hidden rounded-[2rem] border border-white/20 bg-black/50 shadow-[0_18px_44px_-30px_rgba(0,0,0,0.62)] ring-1 ring-inset ring-white/20 backdrop-blur-sm',
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-500/15 via-transparent to-black/50" />

        {isInlinePlaying ? (
          <div className="relative h-52 bg-black sm:h-56 lg:h-64">
            <iframe
              title="Christmas with Nordic Tenors"
              src={getEmbedUrl(true)}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : (
          <div className="relative h-52 sm:h-56 lg:h-64">
            <Image
              src={posterSource}
              alt="Christmas with Nordic Tenors"
              fill
              priority
              unoptimized
              sizes="(min-width: 1280px) 25rem, (min-width: 1024px) 32vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-end p-4 sm:p-5">
              <button
                type="button"
                onClick={openModal}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/80 transition duration-300 hover:border-gold-500/50 hover:text-gold-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
                aria-label="Åpne video i stor visning"
              >
                <ArrowsPointingOutIcon className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={startInlinePlayback}
              className="group absolute inset-0 flex flex-col items-start justify-end p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-500/70 sm:p-6"
              aria-label="Spill av Christmas with Nordic Tenors"
            >
              <span className="mb-auto mt-7 self-center rounded-full border border-gold-500/40 bg-black/55 p-5 text-gold-500 shadow-[0_0_40px_rgba(216,178,79,0.25)] transition duration-300 group-hover:scale-105 sm:mt-9">
                <PlayIcon className="h-8 w-8 translate-x-0.5" />
              </span>
              <div className="max-w-sm">
                <p className="font-display text-xl leading-none tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
                  Christmas with Nordic Tenors
                </p>
              </div>
            </button>
          </div>
        )}
      </section>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50"
      >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

        <div className="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="flex min-h-full items-center justify-center">
            <Dialog.Panel className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <Dialog.Title className="font-display text-2xl text-white sm:text-3xl">
                  Christmas with Nordic Tenors
                </Dialog.Title>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:border-gold-500/40 hover:text-gold-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
                  aria-label="Lukk video"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="relative h-[52vw] max-h-[72vh] min-h-[18rem] bg-black sm:h-[40vw] lg:h-[38rem]">
                <iframe
                  title="Christmas with Nordic Tenors i stor visning"
                  src={getEmbedUrl(true)}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p>
                  Bruk videokontrollen for fullskjerm, eller fortsett på
                  YouTube.
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 font-semibold text-white transition duration-300 hover:border-gold-500/40 hover:text-gold-500"
                >
                  Se på YouTube
                </a>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
