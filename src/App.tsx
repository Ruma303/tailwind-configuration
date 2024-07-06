import './index.css'

function App() {

  return (
    <>
      <div className="w-screen h-screen p-4 flex flex-col items-center
        bg-white xxs:bg-pink-200 xs:bg-sky-200 sm:bg-slate-300 md:bg-slate-400
        lg:bg-slate-500 xl:bg-slate-600 2xl:bg-slate-700 3xl:bg-slate-800
      ">
        <main className='bg-purple-100 xxs:bg-white max-w-screen-lg px-4 p-3 rounded-md flex flex-col gap-4'>
            <h1 className="text-4xl font-semibold text-red-500">Configurazioni di Tailwind</h1>
            <p className="text-lg text-gray-500">In questa repo impareremo a personalizzare Tailwind per il nostro progetto, usando una semplice app di React.js</p>
            <p>
            </p>

        </main>
       </div>
    </>
  )
}

export default App
