import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className="text-area">
                <h2 className="title">We Can Fix It Almost
                    As Fast As You Can
                    Break It.</h2>

                <p className="about-text">We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your phone in and out in 45 minutes or less.</p>
                <button className='btn-learn'>About Us</button>
            </div>
            <div className="image">
                <img src="https://o.remove.bg/downloads/7c63f37f-9735-4e35-a87b-91c7c6438165/phone_1-removebg-preview.png" />
            </div>
        </div>
    )
}

export default About