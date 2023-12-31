
const reducer = (state = initialEntries, action)=>{
    let newEntries;
    switch(action.type){
      case 'ADD_ENTRY':
        {
         newEntries = state.concat({...action.payload});
         return newEntries;
        }
      case 'DELETE_ENTRY':
        {
         newEntries = state.filter((entry) => entry.id !== action.payload.id);
         return newEntries;
        }
      case 'UPDATE_ENTRY':
        {
          newEntries = [...state];
          const index = newEntries.findIndex(entry => entry.id === action.payload.id);
          newEntries[index] = {...action.payload.entry};
          return newEntries;
        }
      default:
        return state;
    }
  }

  export default reducer;

  var initialEntries = [
    {
      id:1,
      description:"Work income",
      value: 10000,
      isExpense:false,
    },
    {
      id:2,
      description:"Water bill",
      value: 20,
      isExpense:true,
    },
    {
      id:3,
      description:"Rent",
      value: 300,
      isExpense:true,
    },
    {
      id:4,
      description:"Power bill",
      value: 50,
      isExpense:true,
    },
  ]