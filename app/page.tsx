export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-lg p-5 2xl:max-w-screen-xl">
      <header className="flex items-center justify-between gap-28 py-8">
        <div className="flex items-center justify-start gap-28">
          <div>
            <h2 className="inline-block text-3xl font-medium text-black 2xl:text-4xl">
              Recetas
            </h2>
          </div>

          <nav>
            <ul className="flex items-center justify-start gap-3">
              <li>
                <a
                  href="/"
                  className="p-2 font-medium text-black hover:text-neutral-800"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 font-medium text-black hover:text-neutral-800 "
                >
                  Explorar
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <input
            type="text"
            placeholder="Busca una receta"
            className="h-12 w-full max-w-60 rounded-full border border-black bg-transparent px-4 outline-none placeholder:text-neutral-600"
          />
        </div>
      </header>

      <section className="relative flex min-h-[400px] w-full flex-col items-start justify-center overflow-hidden rounded-2xl bg-lime-600 bg-[url(/images/banners/featured.jpg)] bg-cover bg-center before:absolute before:inset-0 before:h-full before:w-full before:bg-black/10 before:content-['']">
        <div className="relative z-10 flex max-w-xl flex-col items-start justify-start gap-5 p-10">
          <h2 className="text-5xl font-semibold leading-tight text-white">
            Fideos con salsa bolognesa
          </h2>
          <button className="relative inline-block rounded-full bg-white px-10 py-3 text-center font-medium capitalize">
            Ver receta
          </button>
        </div>
      </section>
    </div>
  );
}
