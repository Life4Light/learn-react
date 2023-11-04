interface CountProps{
    count: number;
    onClick: () => void;
}

export function MyButton( {count, onClick }: CountProps){



    return (
        <button onClick={onClick}>Clicked {count} times</button>
    )
}