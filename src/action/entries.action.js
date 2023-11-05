export const addEntryRedux = (payload)=>{
    return {type: 'ADD_ENTRY', payload};
  }

export const removeEntryRedux = (payload)=>{
return {type: 'DELETE_ENTRY', payload};
}

export const editEntryRedux = (id, entry)=>{
  return { type: 'UPDATE_ENTRY', payload: {id, entry}}
}