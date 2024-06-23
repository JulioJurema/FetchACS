import './Title.css'

interface TitleProps {
    text: string;
    description: string;
}


const Title: React.FC<TitleProps> = ({text, description}) =>{
    return(
        <>
            <h1 className='titlePage'>{text}</h1>
            <span className='descriptionPage'>{description}</span>
        </>
    );

}

export default Title;