import Sdata from "./sdata";

 function Card(props)
{
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="mypic" className="card_img_top"/>
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch now</button>
                    </a>
                </div>
                </div>  
        </div>
        </>
    )
}

export default Card;
