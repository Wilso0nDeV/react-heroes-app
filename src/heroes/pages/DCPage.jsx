import { HeroList } from "../components"





export const DCPage = () => {

  const publisher  = 'DC Comics'
  return (
    <div className="p-5">
    <h1>DCPage</h1>
    <hr />
    <HeroList publisher={publisher} />
    </div>
  )
}


