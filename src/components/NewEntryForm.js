import { Form  } from 'semantic-ui-react'
import ButtonSaveorCancel from './ButtonSaveorCancel'
import EntryForm from './EntryForm';


import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
  
  const {
    description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
  } = useEntryDetails();

  return (
    <Form unstackable>
      <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense}/>
      <ButtonSaveorCancel addEntry={addEntry} />
    </Form>
  )
}

export default NewEntryForm