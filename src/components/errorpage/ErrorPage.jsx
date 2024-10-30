import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error=useRouteError()

  return (


    <div className="text-center font-bold text-3xl mt-[200px]">
        <h1 className="text-[100px]">Oops!!!</h1>
        <p className="mt-[100px]">{error.statusText || error.message}</p>
    </div>
  )
}
