//React dependencies
import React, {useState, useEffect} from 'react'
//Components
import Button from "../components/Button/Button"
import Input from "../components/Input/Input"
import List, {ListDataType} from "../components/List/List"

type StarwarsCharType = {
  name: string,
  height: number,
  mass: number,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: [],
  vehicles: [],
  starships: string[],
  created: string,
  edited: string,
  url:string
}

const StarwarsView:React.FunctionComponent = () => {
  const [character, setCharacter] = useState<undefined | StarwarsCharType>(undefined)
  const [nPersonaje, setNPersonaje] = useState<number>(1)

  const getStarwarsData = async () => {
    const data = await fetch(`https://swapi.dev/api/people/${nPersonaje}/`)
    .then((response:any) => {
      return response.json()
    })
    setCharacter(data)
  }

  const nextCharacter = (btnName:string) => {
    setNPersonaje(nPersonaje + 1)
    console.log(`click desde ${btnName}`)
  }

  const setListData = () => {
    const listDataFormatted:ListDataType[] = []
    console.log(Object.entries(character != undefined ? character : {}))
    Object.entries(character != undefined ? character : {}).forEach(element => {
      listDataFormatted.push({
        value: element[1],
        name: element[0],
        origin: "swapi"
      })
    })
    return listDataFormatted
  }

  useEffect(() => {
    getStarwarsData()
  }, [nPersonaje])

  return (
    <div>
      Hola desde Starwars, el personaje que estamos viendo es {character != undefined ? character.name : null}
      <List
        data={setListData()}
      />
      <Button
        action={nextCharacter}
        text="siguiente"
        disabled={false}
        name="btn siguiente"
      />
    </div>
  )
}
export default StarwarsView