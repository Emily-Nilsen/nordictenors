import { Fragment, useRef, useEffect, useLayoutEffect } from 'react' // Import useRef
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { GlitterLights } from '@/components/GlitterLights'

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-red-950">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Nordic%20Tenors/Hero_x7vgvv.webp"
          width={3000}
          height={1570}
          unoptimized
          priority
          className="mx-auto h-full object-cover object-center"
        />
      </div>
      {/* <div className="inset-0 hidden bg-black/20 mix-blend-multiply lg:absolute lg:block" /> */}
      <div className="inset-0 hidden bg-gradient-to-tr from-black/70 mix-blend-multiply lg:absolute lg:block" />

      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 text-center sm:mt-72 lg:text-left">
            <div className="relative">
              <p
                className="relative inline font-display text-4xl font-medium tracking-tight sm:text-6xl "
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)',
                }}
              >
                Nordic Tenors
              </p>
              <p className="absolute inset-0 inline bg-gradient-to-r from-white via-amber-300 to-white bg-clip-text font-display text-4xl font-medium tracking-tight text-transparent sm:text-6xl ">
                Nordic Tenors
              </p>
              <p className="mt-3 hidden max-w-xl text-xl tracking-tight text-white xl:block">
                Nordic Tenors kombinerer utsøkt kunstnerisk kvalitet med et vidt
                genrespekter, humor og musikalske overraskelser.
              </p>
              <div className="h-12 sm:h-44 xl:hidden" />
              <div className="-mb-20 mt-32 flex justify-center gap-8 sm:-mb-20 sm:mt-20 sm:gap-10 lg:-mb-0 lg:mt-8 lg:justify-start">
                <Button className="relative z-20" href="/#november">
                  Jubileum 2024
                </Button>
                <Button
                  className="relative z-20"
                  href="/docs/#november"
                  variant="secondary"
                >
                  Julekonserter 2024
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
