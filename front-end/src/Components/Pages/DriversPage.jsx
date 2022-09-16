import { useNavigate } from 'react-router-dom'

const DriversPage = () => {
  const navigator = useNavigate()

  return (
    <div>
      <h1>Welcome to the Driver's Page</h1>
      <hr />
      <h2>
        This is where drivers can view their upcoming and current delivery
        tasks!
      </h2>
      <button type='button' onClick={() => navigator('/directions')}>
        See Directions
      </button>
    </div>
  )
}

export default DriversPage
