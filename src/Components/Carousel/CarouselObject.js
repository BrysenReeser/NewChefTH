import './styles.css'

function PrepTime(props) {
    if (props.prepTime != null) {
      return <h2 class="prepTime">Total Cooking Time: {props.prepTime} Minutes</h2>
    }
    return <></>;
  }

function Instructions(props) {
    try {
        return props.instructions.map((instruction) => (
            <li class="instructions"> {instruction.display_text} </li>
        ))
    } catch (e) {
        return <></>
    }
    // if (!typeof(props.instructions[0].display_text) == 'undefined') {
    //   return props.instructions.map((instruction) => (
    //         <li class="instructions"> {instruction.display_text} </li>
    //     ))
    // }
    // return <></>;
  }

export default function CarouselObject(props) {
    return (
        <div class="background">
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{paddingLeft:'2rem'}}>
                    <h1 class="recipeName">{props.title}</h1>
                    <PrepTime prepTime={props.prepTime}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", paddingRight:'3rem', paddingTop:'2rem'}}>
                    <img 
                        src={props.image} 
                        style={{
                            display:'block',
                            width:'auto', 
                            height:'auto', 
                            maxWidth:'230px',
                            maxHeight:'230px',
                            paddingBottom:'20px'
                        }}>
                    </img>
                </div>
            </div>
            <div style={{paddingTop:'3rem'}}>
                <Instructions instructions={props.instructions}/>
            </div>
        </div>
    )
}