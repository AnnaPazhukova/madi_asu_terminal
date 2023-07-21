import {Table as AntTable} from 'antd';
import api from '../../constants/api';


let content = [];

await api.getTeacherSchedule(20)
    .then((data) => {
        content = data['schedule']['Вторник'];
    })

    
const dataTeachers = content?.map(day => ({
    time: day.time,
    group: day.group,
    name: day.name,
    type: day.type,
    frequency: day.frequency,
    auditorium: day.auditorium,
}))


export const TableAboutTeachers = () => {

    const columns = [
        {
            title: 'time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'group',
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'frequency',
            dataIndex: 'frequency',
            key: 'frequency',
        },
        {
            title: 'auditorium',
            dataIndex: 'auditorium',
            key: 'auditorium',
        },
    ];
    return <AntTable dataSource={dataTeachers} columns={columns}/>
}
export default TableAboutTeachers;