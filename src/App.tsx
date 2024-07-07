import "./index.css";

function App() {
  return (
    <>
      <div
        className="w-screen h-screen p-4 flex flex-col items-center
            bg-white xxs:bg-emerald-200 xs:bg-sky-200 sm:bg-pink-300 md:bg-slate-400
            lg:bg-amber-200 xl:bg-slate-200 2xl:bg-purple-200 3xl:bg-indigo-300
        ">

        <main className="max-w-screen-lg px-4 p-3 rounded-md flex flex-col gap-4 border-3 border-gray-200
        phone:bg-white tablet:bg-sky-300 desktop:bg-emerald-200
        ">
          <h1 className="text-4xl font-semibold text-red-500 md:text-white lg:text-slate-700">
            Configurazioni di Tailwind
          </h1>
          <p className="text-lg text-gray-500 sm:text-gray-700 md:text-gray-200 lg:text-gray-600">
            In questa repo impareremo a personalizzare Tailwind per il nostro
            progetto, usando una semplice app di React.js
          </p>
          <button className="bg-tahiti-75 hover:bg-tahiti-500 w-fit px-4 py-2 rounded-md">
            Personal Color</button>
            <blockquote className="bg-tahiti w-fit px-4 py-2 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum possimus perspiciatis ad minus est, sunt exercitationem. Nam labore quae quibusdam excepturi, iste nihil deleniti adipisci molestiae, molestias enim neque!</blockquote>
        </main>
      </div>
    </>
  );
}

export default App;
