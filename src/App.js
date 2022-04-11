import ExpenseItem from './components/ExpenseItem'
import './App.css';

function App(props) {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 150,
      date: new Date(2022, 11, 31)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 50000,
      date: new Date(2022, 9, 11)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 1000,
      date: new Date(2022, 3, 30)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4500,
      date: new Date(2021, 4, 12)
    },
  ];
  
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  )
}

export default App;
