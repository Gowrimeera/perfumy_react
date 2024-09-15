
import two from "../images/meera project.jpg"
import three from "../images/meera project1.jpg"
import four from "../images/meera project2.jpg"
import five from "../images/meera project3.jpg"


function Recommend(){
return(

<div class="recommend">
        <h1 class="recommend__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommend__container">
            <div class="course-card">
                <img src={two} alt=" "></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={three} alt=" "></img>
                <h3>2023 Python</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={four} alt=" "></img>
                <h3>2023 Web Development bootcamp</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={five} alt=" "></img>
                <h3>2023 Artificial Intellegence </h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
        </div>
    </div>
)
}

export default Recommend