import CurrentDateTime from '../data/getData';
import s from './style.module.css';

function Header() { 
    return (
        <>
            <header className={s.header}>
                <div className={s.title}>
                    <h1>МАДИ</h1>
                    <p>Кафедра “Автоматизированные системы управления”</p>
                </div>
                <CurrentDateTime/>
            </header>    
        </>
    )
}
export default Header;