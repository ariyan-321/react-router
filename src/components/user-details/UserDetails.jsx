import { useLoaderData, useNavigate } from "react-router-dom"

export default function UserDetails() {
    const user=useLoaderData()
    const {id,name}=user;

    const navigate=useNavigate()

    const handleGoBack=()=>{
        navigate(-1)
    }

  return (
    <div className="font-bold text-3xl text-center mt-7 space-y-4 border-2 mx-auto w-[90%] md:w-[50%] lg:w-[40%] rounded-xl p-7">
        <h1>name: {name}</h1>
        <p>id: {id}</p>
        <button onClick={handleGoBack} className="btn">go back</button>
    </div>
  )
}
