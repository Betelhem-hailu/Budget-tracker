import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux/es/hooks/useSelector';
function App() {


  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  const entries = useSelector((state) => state.entries);
  const {isOpen, id} = useSelector((state) => state.modals);

  const [entry,setEntry] = useState();

  useEffect(()=>{
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index]);
  },[isOpen, id])

  useEffect(()=>{
    let totalIncome = 0;
    let totalExpense = 0; 
    entries.map(entry=>{
      if(entry.isExpense){
        return totalExpense += Number(entry.value);
      }
        return  totalIncome += Number(entry.value);
    })
    setTotal(totalIncome-totalExpense);
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
  }, [entries])


  return (
    <Container>
  
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your Balance:' value={total} size='small'/>
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense}/>

      <MainHeader title='History' type='h3'/>
      <EntryLines entries={entries} />
      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;
