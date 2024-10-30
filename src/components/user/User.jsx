import { Link } from "react-router-dom"

export default function User({user}) {
    const {id,name,email,website}=user
  return (
    <div className="border-2 p-5 rounded-xl w-full space-y-5">
        <h1>name: {name}</h1>
        <p>id: {id}</p>
        <p>contact: {email}</p>
        <p>website: {website}</p>

        <Link to={`/user/${id}`}>
        <button className="btn">show details</button>

        </Link>

    </div>
  )
}
