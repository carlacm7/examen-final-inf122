
import style from "./stats.module.css";


function Stats ({hp,attack,defense,speed}){
    
    return(
        <div className={style.stats}>
            <h2>Stats</h2>
            <div className={style.container}>
                <div className={style.atributo}>
                    <p >HP</p>
                    <p >Attack</p>
                    <p >Defense</p>
                    <p >Speed</p>
                </div>    
                <div className={style.caract}>
                  
                    <p>{hp}</p>
                    <p>{attack}</p>
                    <p>{defense}</p>
                    <p>{speed}</p>
                   
                </div>
            </div>
        </div>
    );
}

export default Stats;