export function JulekonsertIntro2025({ location, day, date, month }) {
  return (
    <div>
      <p>
        Kom i førjulsstemning med Nordic Tenors sin julekonsert i {location}{' '}
        {day}{' '}
        <span className="font-bold">
          {date}. {month}
        </span>{' '}
        2025. Opplev unike stemmer, varme, humor og et tradisjonelt
        julerepertoar med Jan-Tore Saltnes, Nils Georg Nilsen og Espen Solsbak.
      </p>
    </div>
  )
}
