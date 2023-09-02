const initialState = {
    helloText: 'Hello, World!',
  };
  
  const helloReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TEXT':
        return { ...state, helloText: action.payload };
      default:
        return state;
    }
  };
  
  export default helloReducer;
  