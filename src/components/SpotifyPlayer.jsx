export function SpotifyPlayer() {
  return (
    <div className="mx-left mt-16 w-full max-w-xl overflow-hidden rounded-xl">
      <iframe
        src="https://open.spotify.com/embed/track/6vyCyUMe15ZGkrwYOqO7UL?si=6h4yd_ttT1OWIW9iaTfn3w"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className="shadow-lg"
      ></iframe>
    </div>
  )
}
