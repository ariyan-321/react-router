import { useLoaderData } from "react-router-dom"
import User from "../user/User";

export default function Users() {

    const users=useLoaderData();

  return (
    <div className="text-center text-xl font-bold">
        <h1>users:{users.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-7">
        {
            users.map(user=> <User key={user.id} user={user}></User>)
        }
        </div>
    </div>
  )
}
