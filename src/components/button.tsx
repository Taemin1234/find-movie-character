import styles from './button.module.css'

type ButtonProps = {
    content: string;
    type?: string;
    onClick?: () => void;
};

const Button = ({content, type, onClick}: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${type ? styles[type] : ""}`} onClick={onClick}>{content}</button>
    )
}

export default Button