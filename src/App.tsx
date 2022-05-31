import { Suspense, lazy, useState } from "react"
// import { Org } from "./components/Org"
// import { Profile } from "./components/Profile"

const Profile = lazy(() => import('./components/Profile/'))
const Org = lazy(() => import('./components/Org'))

function App() {
  const [showOrg, setShowOrg] = useState(false)

  return (
    <Suspense fallback={"Loading"}>
     <Profile/>

    <button onClick={()=> setShowOrg(true)}>Show org</button>

     {showOrg && (
       <Suspense fallback={"Loading org"}>
       <Org/>
       </Suspense>
     )}
     
    </Suspense>
  )
}

export default App
