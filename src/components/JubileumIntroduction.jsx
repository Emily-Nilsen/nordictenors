export function JubileumIntroduction({ location, day, date, month }) {
  return (
    <div>
      <p>
        <span className="capitalize">{day}</span>{' '}
        <span className="font-bold">
          {date}. {month}
        </span>
        , 2024 feirer Nordic Tenor sitt 20-årsjubileum med en enestående
        jubileumskonsert i {location}, ledsaget av den virtuose pianisten
        Torgeir Koppang. Se frem til å oppleve et utvalg av deres mest elskede
        sanger i kombinasjon med nye dristige numre, alt servert med den unike
        formidlingsgleden som har begeistret publikum i alle år.
      </p>
    </div>
  )
}
