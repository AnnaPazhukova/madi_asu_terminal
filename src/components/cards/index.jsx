import s from './style.module.css';

export function CardList() {
  return (
  <>
  <div className={s.cards}>
    <p>Расписание по группам</p>
    <p>Расписание экзаменов</p>
    <p>Расписание преподавателей кафедры АСУ</p>
    <p>Список свободных кабинетов</p>
  </div>
  </>
  );
}