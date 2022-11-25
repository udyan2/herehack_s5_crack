import Map from "../components/Map";
const DEFAULT_CENTER = [38.907132, -77.036546];
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Map className="w=[70vw] h-screen" center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
      <section className="w-[30vw] flex flex-col text-2xl items-center">
        <a>1. location Name 1</a>
        <a>2. location Name 2</a>
        <a>3. location Name 3</a>
        <a>1. location Name 1</a>
        <a>2. location Name 2</a>
        <a>3. location Name 3</a>
        <a>1. location Name 1</a>
        <a>2. location Name 2</a>
        <a>3. location Name 3</a>
      </section>
    </div>
  );
}
