import "./bouncing-letter.css";

interface BouncingLettersProps {
    string: string;
}

const BouncingLetters = ({ string }: BouncingLettersProps) => {
    return (
        <div className="font-extrabold text-white">  
            {string.split('').map((letter, index) => (
                <span key={index} className="letter">
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default BouncingLetters;