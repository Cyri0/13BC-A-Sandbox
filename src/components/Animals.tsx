const Animals = () => {
  const allatok = ["kutya","macska","ló","kecske","kacsa"]
  return (
    <>
        {allatok.map((allat) => <h3>{allat}</h3>)}
        {allatok.map((allat, idx) => <h3>{idx}. {allat}</h3>) }
        {allatok.map((allat, idx, array) => <h3>{idx+1} / {array.length} {allat}</h3>)}
    </>
  )
}

export default Animals