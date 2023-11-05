export const openEditModal = (id) =>{
    return { type: 'OPEN_MODAL', payload: id}
}

export const editModal =() =>{
    return { type: 'CLOSE_MODAL'}
}