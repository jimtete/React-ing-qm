import './Card.css'

function Card(args){
    const classes = 'card ' + args.className;

    return <div className={classes}>{args.children}</div>
}

export default Card;