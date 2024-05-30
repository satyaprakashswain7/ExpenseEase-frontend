import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { FinancialRecordsProvider } from './contexts/financial-records-context'
import { SignedIn,UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <Router>
      <div className='app-container'>
        <div className='navbar'>
          <h2>ExpenseEase-Track your Expenses</h2>
          <Link to="/">Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          <Route path='/' 
          element={<FinancialRecordsProvider>
                <Dashboard/>
            </FinancialRecordsProvider>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
