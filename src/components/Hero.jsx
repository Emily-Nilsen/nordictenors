import { Fragment, useRef, useEffect, useLayoutEffect } from 'react' // Import useRef
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'

export function Hero() {
  // Split "Nordic Tenors" into an array of characters for animation
  const nordicTenors = 'Nordic Tenors'.split('')
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
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 mix-blend-multiply lg:absolute lg:block" />

      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-3 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 text-center sm:mt-72 lg:col-span-2 lg:text-left">
            <div className="relative">
              <div>
                {/* lg:text-7xl */}
                <p className="hidden font-hero tracking-normal text-amber-300 sm:block sm:text-6xl lg:text-[6.5rem]">
                  {/* Animate each letter */}
                  {nordicTenors.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: 'easeOut',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </div>
              <div>
                <p className="-mb-40 mt-40 font-hero text-4xl tracking-normal text-amber-300 sm:hidden">
                  {/* Animate each letter */}
                  {nordicTenors.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: 'easeOut',
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </div>
              <p className="mt-3 hidden max-w-xl text-xl tracking-tight text-white lg:block">
                Nordic Tenors kombinerer utsøkt kunstnerisk kvalitet med et vidt
                genrespekter, humor og musikalske overraskelser.
              </p>
              <div className="h-12 sm:hidden" />
              <div className="-mb-24 mt-32 flex justify-center gap-8 sm:-mb-20 sm:mt-20 sm:gap-10 lg:-mb-0 lg:mt-8 lg:justify-start">
                <Button className="relative z-20" href="/#konsertplan">
                  Jubileum
                </Button>
                <Button
                  className="relative z-20"
                  href="/#julekonsertstart"
                  variant="secondary"
                >
                  Julekonserter
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
