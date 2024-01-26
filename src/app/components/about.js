

import style from "./about.module.css";


function About ({type,height,weight,abilities}){
  

    return(
        <div className={style.about}>
            <h2>About</h2>
            <div className={style.container}>
                <div className={style.atributo}>
                    <p >Type</p>
                    <p >Height</p>
                    <p >Height</p>
                    <p >Abilities</p>
                </div>    
                <div className={style.caract}>
                    <p>{type}</p>
                    <p>{height} m</p>
                    <p>{weight} kg</p>
                    <p>{abilities}</p>
                </div>
            </div>
        </div>
    );
}

export default About;