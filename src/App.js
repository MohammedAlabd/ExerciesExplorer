import React from 'react';
import { Header, Footer} from "./components/Layout"
import './App.css';
import Exercises from './components/Exercises';
import { muscles, exercises} from "./store"

class App extends React.Component {

  state = {
    exercises,
    exercise:{
      title : 'Welcome!', 
      description : 'Pleas select an exercise from the list'
    }
  }
  
  getExercisesByMuscles = () => {
    return Object.entries(this.state.exercises.reduce( (exercises,exercise) => {
      const {muscles} = exercise
      
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles],exercise]
        : [exercise]

      return exercises
    }, {}))
  }

  handelCategory = category => this.setState({category})

  handleExercise = id =>{
    this.setState(({exercises}) =>({
      exercise : exercises.find(ex => ex.id === id)
    }) )
    console.log("done");
    
  } 

  handleSubmit = (exercise) => {
    this.setState(({exercises}) => ({
      exercises:[...exercises,exercise]
    }))
  }
  render () {
    const exercises = this.getExercisesByMuscles(),
     { category, exercise } = this.state
    return (
      < >
        <Header handleSubmit={this.handleSubmit} />
        <Exercises 
          onSelectEx={this.handleExercise}
          exercise={exercise}
          category={category}
          exercises={exercises} />
        <Footer
          onSelect={this.handelCategory}
          category={category}
          muscles={muscles}
        />
      </>
    );
  }
}

export default App;
