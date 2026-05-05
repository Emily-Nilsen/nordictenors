import { useRouter } from 'next/router'

export function HomepageText() {
  const isEnglish = useRouter().pathname.startsWith('/en')
  return (
    <div id="konsertplan">
      <div className="text-base">
        {isEnglish
          ? 'A full list of all upcoming Nordic Tenors concerts is below.'
          : 'En fullstendig liste over alle Nordic Tenors sine planlagte konserter finner du nedenfor.'}
      </div>
    </div>
  )
}
