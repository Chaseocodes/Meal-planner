import React, {useState} from "react"
import MealList from "./MealList"

function App(){
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function handleChange(e){
    setCalories(e.target.value)
  }
  
  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=830e428a53d8447e8b82d19d00eb109c&timeFrame=day&targetCalories=${calories}`
    )
    .then((response)=> response.json())
    .then((data) =>{
      setMealData(data)
    })
    .catch(()=>{
      console.log("error")
    })
  }

  return <div className="App">
    <section className="controls">
      <input className="input-bordered input-info w-full max-w-xs"
      type="number" 
      placeholder = "Calories (e.g. 2000)"
      onChange={handleChange}
      />
    </section>
    <button className="btn btn-info" onClick={getMealData}>Get Daily Meal Plan</button>
    {mealData && <MealList mealData ={mealData} />}
  </div>
}
export default App;
