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
                <img src="https://o.remove.bg/downloads/d7671f49-1077-477b-8771-a960ae8b5330/phone_1-removebg-preview.png" />
            </div>
        </div>
    )
}

export default About