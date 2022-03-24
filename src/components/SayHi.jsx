type GreetingProps = {
    name: String
}

export const SayHi = (props: GreetingProps) => {
    return(
        <h1>How are ya { props.name }</h1>
    )
}