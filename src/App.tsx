import "./index.css";

function App() {
  return (
    <>
      <div
        className="w-screen h-screen p-4 flex flex-col items-center
            bg-white xxs:bg-emerald-200 xs:bg-sky-200 sm:bg-pink-300 md:bg-slate-400
            lg:bg-amber-200 xl:bg-slate-200 2xl:bg-purple-200 3xl:bg-indigo-300
        "
      >
        <main
          className="max-w-screen-lg px-4 p-3 rounded-md flex flex-col gap-4 border-3 border-gray-200
        phone:bg-white tablet:bg-sky-300 desktop:bg-emerald-200
        "
        >
          <h1 className="text-4xl font-semibold text-red-500 md:text-white lg:text-slate-700">
            Configurazioni di Tailwind
          </h1>
          <p className="text-lg text-gray-500 sm:text-gray-700 md:text-gray-200 lg:text-gray-600">
            In questa repo impareremo a personalizzare Tailwind per il nostro
            progetto, usando una semplice app di React.js
          </p>
          <button className="bg-tahiti-75 hover:bg-tahiti-500 w-128 px-4 py-2 rounded-md">
            Personal Color
          </button>
          <blockquote className="bg-tahiti w-fit px-4 py-2 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            laborum possimus perspiciatis ad minus est, sunt exercitationem. Nam
            labore quae quibusdam excepturi, iste nihil deleniti adipisci
            molestiae, molestias enim neque!
          </blockquote>

          <div className="bg-band/75 px-4 py-3 rounded">
            <h2 className="text-primary-color">Primary text</h2>
            <p className="text-secondary-color">Secondary text</p>
            <p className="text-warning">Tertiary text</p>
          </div>

          <h1 className="text-4xl">Plugins</h1>
          <article className="prose lg:prose-xl">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>

          <form>
            <select className="px-4 py-3 rounded-full">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input
              type="email"
              className="form-input px-4 py-3 rounded-full"
              placeholder="your email..."
            />
            <input type="checkbox" className="rounded text-pink-500" />
          </form>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
