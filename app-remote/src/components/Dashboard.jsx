import React from 'react'

const Dashboard = () => {
    const handleClick = () => {
        alert("Welcome user 😊")
    }
  return (
    <div>
        <h3>User Dashboard</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque iure facilis molestias voluptas. Soluta illo eligendi iste aspernatur ea! Nobis deserunt, dolorem quaerat obcaecati optio delectus nesciunt pariatur aliquid.</p>
        <button onClick={handleClick}>click me to greet!</button>
    </div>
  )
}

export default Dashboard