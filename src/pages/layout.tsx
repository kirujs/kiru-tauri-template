import { Link, useFileRouter } from "kiru/router"

export default function RootLayout({ children }: { children: JSX.Children }) {
  const { state } = useFileRouter()

  return (
    <div className="min-h-screen flex flex-col gap-20 justify-between px-10 py-20">
      <h1 className="text-3xl md:text-4xl md:leading-normal font-bold text-center">
        Welcome to your Kiru Tauri app!
      </h1>
      <div className="flex gap-4 justify-center">
        <Link to="/" className={state.path === "/" ? "" : "underline"}>
          Home
        </Link>
        <Link
          to="/todos"
          className={state.path === "/todos" ? "" : "underline"}
        >
          Todos
        </Link>
      </div>
      {children}
      <div className="text-center text-stone-200">
        <p>Learn at</p>
        <div className="flex gap-4 text-xl w-full justify-center">
          <a
            href="https://kirujs.dev"
            target="_blank"
            className="font-semibold flex items-center gap-1 w-full justify-end"
          >
            <img className="w-5 h-5" src="/favicon.svg" alt="kiru logo" />
            kirujs.dev
          </a>
          <a
            href="https://tauri.app"
            target="_blank"
            className="font-semibold flex items-center gap-1 w-full justify-start"
          >
            <img className="w-5 h-5" src="/tauri.png" alt="Tauri logo" />
            tauri.app
          </a>
        </div>
      </div>
    </div>
  )
}
