import { HeroList } from "../components"





export const MarvelPage = () => {
  const publisher  = 'Marvel Comics'

  return (
    <div className="p-5">
      <h1>Marvel Page</h1>
    <hr />
      <HeroList publisher={publisher} />
    </div>
  )
}
