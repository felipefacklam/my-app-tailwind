interface CircleProps {
    numb: number
    name: string
    almostPerfect?: boolean
}

export default function Circle(props : CircleProps){
    console.log(props)
    
    return (
        <div className={`
            flex justify-center items-center
            h-[300px] w-[300px]
            bg-cyan-500
            text-5xl font-thin
            ${props.almostPerfect ? 'rounded-3xl' : 'rounded-full'}
        `}>
            {props.name}
        </div>
    )
}