import { Fragment, useRef, useEffect, useLayoutEffect } from 'react' // Import useRef
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Socials } from './Socials'
import navigation from 'utils/navigation'
import HeroDesktop from '../images/nordictenors_hero_landscape_2024.webp'
import HeroMobile from '../images/nordictenors_hero_mobile_2024.webp'

export function Hero() {
  // Split "Nordic Tenors" into an array of characters for animation
  const nordicTenors = 'Nordic Tenors'.split('')
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-red-950">
        <Image
          alt="Nordic Tenors"
          src={HeroDesktop}
          width={2362}
          height={1329}
          unoptimized
          priority
          className="mx-auto hidden h-full object-cover object-top lg:block"
        />
        <Image
          alt="Nordic Tenors"
          src={HeroMobile}
          width={2254}
          height={1865}
          unoptimized
          priority
          className="mx-auto h-full object-cover object-top lg:hidden"
        />
      </div>
      <Socials />

      {/* <div className="inset-0 hidden bg-black/20 mix-blend-multiply lg:absolute lg:block" /> */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 mix-blend-multiply lg:absolute lg:block" />

      <div className="py-16 sm:px-2 md:mb-10 lg:relative lg:mb-0 lg:px-0 lg:pb-0 lg:pt-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-3 lg:px-8 xl:gap-x-16 xl:px-12">
          {/* Hero title and description (buttons separate) on large screen */}
          <div className="relative z-10 text-center lg:col-span-3 lg:text-left xl:col-span-2">
            <div className="relative">
              {/* New logo */}
              <Image
                alt="Nordic Tenors"
                src="/logos/Nordic_Tenors_1_linje_gull.webp"
                width={2500}
                height={330}
                unoptimized
                priority
                className="-mb-16 mt-44 h-full object-cover object-top pt-10 sm:mb-0 sm:mt-80 lg:-ml-2 lg:block"
              />

              <p className="mt-3 hidden max-w-xl text-xl tracking-tight text-white lg:block">
                Nordic Tenors kombinerer utsøkt kunstnerisk kvalitet med et vidt
                genrespekter, humor og musikalske overraskelser.
              </p>
              <div className="h-12 sm:hidden" />
              {/* Buttons */}
              <div className="-mb-24 mt-12 flex-col justify-center space-y-7 sm:-mb-20 sm:mt-20 sm:gap-10 lg:hidden lg:justify-start">
                {/* <div>
                  <Button
                    className="relative z-20"
                    href="/#nordic-tenors-a-la-carte"
                    variant="secondary"
                  >
                    À la carte 2025
                  </Button>
                </div> */}

                {/* <div>
                  <Button
                    className="relative z-20"
                    href="/#christmas-with-nordic-tenors"
                  >
                    Julekonserter 2025
                  </Button>
                </div> */}
                <div>
                  <Button
                    className="relative z-20"
                    href="/#jul-november-2026"
                    // variant="secondary"
                  >
                    Julekonserter 2026
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons and socials on large screen */}
          <div className="col-span-3 hidden items-center justify-between lg:flex">
            {/* Buttons */}
            <div className="flex justify-center gap-8 sm:gap-10 lg:-mb-0 lg:mt-0 lg:justify-start">
              {/* <Button
                className="relative z-20"
                href="/#nordic-tenors-a-la-carte"
                variant="secondary"
              >
                À la carte - 2025
              </Button> */}
              {/* <Button
                className="relative z-20"
                href="/#christmas-with-nordic-tenors"
              >
                Julekonserter - 2025
              </Button> */}
              <Button
                className="relative z-20"
                href="/#jul-november-2026"
                // variant="secondary"
              >
                Julekonserter - 2026
              </Button>
            </div>
            {/* Social media icons */}
            <div className="flex items-center justify-center space-x-7 md:order-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-200 ease-in-out hover:text-gold-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className={`${index === 0 ? 'h-6 w-6' : 'h-7 w-7'}`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
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
