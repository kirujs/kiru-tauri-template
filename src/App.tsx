import { Counter } from "./components/Counter"

export function App() {
  return (
    <div className="min-h-screen flex flex-col gap-20 justify-between px-10 py-20">
      <h1 className="text-3xl md:text-4xl md:leading-normal font-bold text-center">
        Welcome to your Kaioken Tauri app!
      </h1>
      <Counter />
      <div className="flex justify-center">
        <span className="text-stone-200">
          Learn at{" "}
          <a href="https://kaioken.dev" target="_blank" className="underline">
            kaioken.dev
          </a>
        </span>
      </div>
    </div>
  )
}
