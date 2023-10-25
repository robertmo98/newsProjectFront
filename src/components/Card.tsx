interface CardProps{
    text: string
}

const Card = (props : CardProps) => {
    return (
        <div>{props.text}</div>
    )
}

export default Card