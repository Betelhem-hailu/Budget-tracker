import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4} from 'uuid'
import { addEntryRedux, editEntryRedux } from "../action/entries.action";
import { editModal } from "../action/modals.actions";

function useEntryDetails(desc="", val="", isExp=true) {

    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);

    const dispatch = useDispatch();

    useEffect(()=>{
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    },[desc, val, isExp]);

    function updateEntry(id){
        dispatch(
            editEntryRedux(
                id,
                {
                    id,
                    description,
                    value,
                    isExpense,
                },)
        )
        dispatch(editModal())
        resetValues()
    }
    function addEntry() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense,
        }))
        resetValues()
    }
    function resetValues(){
        setDescription('');
        setValue('');
        setIsExpense(true);
    }
    

    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry, updateEntry
    }
}

export default useEntryDetails