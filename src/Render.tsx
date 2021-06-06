import React, { useState, useEffect } from 'react';
import CatImage from './catimage';
import SubmitImage from './submitimage'
import SelectDropdown from './selectdropdown'
import CommentHolder from './commentholder'

type RenderProps = {
  catArray: string[],
  fetchFunc: (url: string, callBack: (data: string | object[]) => void) => void
}

const Render: React.FC<RenderProps> = ({ catArray,  fetchFunc }) => {

  const [index, inCreaseIndex] = useState<number>(0)
  const [nextPic, selectNextPic] = useState<any>([{ "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"}])
  const [displayPic, changePic] = useState<string>("")
  const [breedsArray, importBreeds] = useState<any>([])
  const [breed, chooseBreed] = useState<any>("")
  const [catComments, addComment] = useState<any>([])
  const [breedPic, generateBreedPic] = useState("")
  
  const rednerNewPic = () => fetchFunc("https://api.thecatapi.com/v1/images/search", selectNextPic)
  const breedSearchFetch = () => fetchFunc("https://api.thecatapi.com/v1/breeds", importBreeds)

  const displayEvent = () => changePic("")
  const removeBreed = () => generateBreedPic("")

  const comment = (string: string) => addComment([...catComments, string])
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    chooseBreed(e.target.value)
    findBreedImage()
  }

  const findBreedImage = () => {
    type cat = {
      image: {
        url: string
      }
    }

    if (breed != ""){
      const breedObj: cat = breedsArray.find((cat: any) => cat.description === breed)
      generateBreedPic(breedObj.image["url"])
    }
  }
  
  useEffect(breedSearchFetch, [])

  return (
    <div style={{ padding: "10vw", backgroundColor: "coral", color: "white"  }}>
      <SelectDropdown array={breedsArray} onChangeFunc={(e) => handleOnChange(e)}/>
      <CommentHolder comments={[breed]} />
      <CatImage string={breedPic} eventHandler={() => removeBreed()}/>
      <SubmitImage  eventHandler={(string) => changePic(string)} buttonText={"Submit Cat Here"}/>
      <CatImage string={displayPic} eventHandler={() => displayEvent()}/> 
      <CatImage string={catArray[index]} eventHandler={() => inCreaseIndex(index >= catArray.length ? 0 : index + 1)}/>
      <SubmitImage  eventHandler={(string) => comment(string)} buttonText={"Leave A Comment"}/>
      <CommentHolder comments={catComments}/>
      <CatImage string={nextPic[0].url as string} eventHandler={() => rednerNewPic()} />
      <SubmitImage  eventHandler={(string) => comment(string)} buttonText={"Leave A Comment"}/>
      <CommentHolder comments={catComments}/>
    </div>
  )
}

export default Render;
