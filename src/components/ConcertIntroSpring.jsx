export function ConcertIntroSpring({ location, day, date, month }) {
  return (
    <div>
      <p>
        Kom i stemning med Nordic Tenors sin À la carte konsert i {location}{' '}
        {day}{' '}
        <span className="font-bold">
          {date}. {month}
        </span>{' '}
        2025. Opplev unike stemmer, varme, humor og et variert repertoar med
        Jan-Tore Saltnes, Nils Georg Nilsen og Espen Solsbak.
      </p>
    </div>
  )
}
