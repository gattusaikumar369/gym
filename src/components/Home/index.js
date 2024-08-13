import Header from'../Header'

import './index.css'

console.log("Hello")
const Home=()=>{
    return(
     <div className='app-container'>
        <Header/>
        <div className='home-container'>
            <div className='content-cnt'>
                <h1 className='home-heading'>Transform Your Fitness Journey</h1>
                <p className='home-description'>
                Unlock your full potential with personalized workout plans, 
                expert guidance, and a supportive community. Whether you're aiming to build strength, 
                improve endurance, or enhance your overall well-being, 
                we provide the tools and motivation you need to achieve your fitness goals. 
                Start your journey today and experience a healthier, more confident you!
                </p>

                <button className='start-btn'>Start Journey</button>
            </div>
            <div className='img-cnt'>
                <img src="./gym.jpg" className='home-img' alt="home-img"/>
            </div>
        </div>    
     </div>
    ) 
}
export default Home