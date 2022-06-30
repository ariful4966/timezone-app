
import LocalClock from './components/LocalClock'
import ClockList from './components/ClockList'
import useClock from './hooks/useClock'

function App() {


  const {clock: local}=useClock("UTC", 6*60);
  const {clock: pst}=useClock('PST')
  const {clock: est}=useClock('EST')
  const {clock: pakistan}=useClock('UTC', 5*60)
 console.log('Local UTC', local.date)
 console.log('Local PST', pst.date)
 console.log('Local EST', est.date)
 console.log('Local Pakistan', pakistan.date)
  return (
    <div>
     <LocalClock/>
     <ClockList/>
    </div>
  )
}

export default App
