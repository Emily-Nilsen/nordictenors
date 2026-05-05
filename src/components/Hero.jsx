import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { HeroVideoCard } from '@/components/HeroVideoCard'
import { Socials } from './Socials'
import navigation from 'utils/navigation'
import HeroDesktop from '../images/nordictenors_hero_landscape_2024.webp'
import HeroMobile from '../images/nordictenors_hero_mobile_2024.webp'

export function Hero() {
  return (
    <>
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

        <div className="py-16 sm:px-2 md:mb-10 lg:relative lg:mb-0 lg:px-0 lg:pb-6 lg:pt-20 xl:pb-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-3 lg:px-8 xl:gap-x-16 xl:px-12">
            {/* Hero title and description (buttons separate) on large screen */}
            <div className="relative z-10 text-center lg:col-span-3 lg:text-left xl:col-span-2">
              <div className="relative">
                <Image
                  alt="Nordic Tenors"
                  src="/logos/Nordic_Tenors_1_linje_gull.webp"
                  width={2500}
                  height={330}
                  unoptimized
                  priority
                  className="-mb-8 mt-32 h-full object-cover object-top pt-10 sm:mb-0 sm:mt-80 lg:-ml-2 lg:block lg:w-[92%] xl:w-[88%]"
                />

                <p className="mt-3 hidden max-w-xl text-xl tracking-tight text-white lg:block">
                  Nordic Tenors kombinerer utsøkt kunstnerisk kvalitet med et vidt
                  genrespekter, humor og musikalske overraskelser.
                </p>

                <div className="h-8 sm:hidden" />

                <div className="-mb-24 mt-8 flex-col justify-center space-y-7 sm:-mb-20 sm:mt-20 sm:gap-10 lg:hidden lg:justify-start">
                  <div>
                    <Button
                      className="relative z-20"
                      href="/#jul-november-2026"
                    >
                      Julekonserter 2026
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
            <div className="absolute right-0 top-16 z-10 w-[min(39vw,31rem)] xl:right-0 xl:top-20 xl:w-[min(42vw,33rem)]">
              <HeroVideoCard />
              <Link
                href="https://nordictenors.us17.list-manage.com/subscribe?u=067fa210513aeafa6dfc27206&id=136c1bfdb3"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-gold-500 hover:underline"
              >
                Påmelding nyhetsbrev <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            </div>
            <div className="col-span-3 hidden items-center justify-between lg:flex">
              <div className="flex justify-center gap-8 sm:gap-10 lg:-mb-0 lg:mt-0 lg:justify-start">
                <Button
                  className="relative z-20"
                  href="/#jul-november-2026"
                >
                  Julekonserter - 2026
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-7 md:order-2 lg:translate-y-4 xl:translate-y-6">
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

      <div className="relative z-20 mt-2 px-4 lg:hidden">
        <HeroVideoCard className="mx-auto max-w-md text-left" />
        <Link
          href="https://nordictenors.us17.list-manage.com/subscribe?u=067fa210513aeafa6dfc27206&id=136c1bfdb3"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-4 block max-w-md text-center text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-gold-500 hover:underline"
        >
          Påmelding nyhetsbrev <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </>
  )
}
