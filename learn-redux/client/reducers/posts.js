// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  console.log('The Post will change');
  console.log(state, action);

  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return the updated state
      console.log('Incrementing likes!!');
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ]

    default:
      return state;
  }
}

export default posts;