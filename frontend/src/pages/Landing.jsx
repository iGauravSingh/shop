import { useNavigate } from "react-router-dom"


const Landing = () => {

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/container/shop')
  }
  return (
    <>
      <h2>Landing Page</h2>
      <button onClick={handleClick}>Shop Now</button>
    </>
  )
}

export default Landing