import Expenses from './components/Expenses/Expenses'
import './App.css';

function App(props) {

  const expenses = [
    {
      id: 'e1',
      title: 'Iphone 13',
      amount: 150,
      date: new Date(2022, 11, 31)
    },
    {
      id: 'e2',
      title: 'MacBook Air',
      amount: 50000,
      date: new Date(2019, 9, 11)
    },
    {
      id: 'e3',
      title: 'iPad',
      amount: 1000,
      date: new Date(2020, 3, 30)
    },
    {
      id: 'e4',
      title: 'MSI Modern 15',
      amount: 4500,
      date: new Date(2021, 4, 12)
    },
  ];
  
  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
