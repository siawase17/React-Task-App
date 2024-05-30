import { FC } from 'react'
import { GrSubtract } from 'react-icons/gr';
import Task from '../Task/Task';
import ActionButton from '../ActionButton/ActionButton';
import { IList, ITask } from '../../types';
import { useTypedDispatch } from '../../hooks/redux';
import { deleteList, setModalActive } from '../../store/slices/boardsSlice';
import { addLog } from '../../store/slices/loggerSlice';
import { v4 } from 'uuid';
import { setModalData } from '../../store/slices/modalSlice';
import { deleteButton, header, listWrapper, name } from './List.css';
import { Droppable } from 'react-beautiful-dnd';

type TListProps = {
    boardId: string;
    list: IList;
}

const List: FC<TListProps> = ({ list, boardId }) => {
    const dispatch = useTypedDispatch();
    const handleListDelete = (listId: string) => {
        dispatch(deleteList({ boardId, listId }));
        dispatch(addLog({
            logId: v4(),
            logMessage: `리스트 삭제하기: ${list.listName}`,
            logAuthor: 'User',
            logTimestamp: String(Date.now())
        }))
    };

    const handleTaskChange = (
        boardId: string,
        listId: string,
        task: ITask
    ) => {
        dispatch(setModalData({ boardId, listId, task }));
        dispatch(setModalActive(true));
    }

    console.log(list)

    return (
        <Droppable droppableId={list.listId}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className={listWrapper}>
                    <div className={header}>
                        <div className={name}>{list.listName}</div>
                        <GrSubtract
                            onClick={() => handleListDelete(list.listId)}
                            className={deleteButton}
                        />
                    </div>
                    <div>
                        {list.tasks.map((task, index) => (
                            <div
                                key={task.taskId}
                                onClick={() => handleTaskChange(boardId, list.listId, task)}
                            >
                                <Task
                                    taskName={task.taskName}
                                    taskDescription={task.taskDescription}
                                    id={task.taskId}
                                    boardId={boardId}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                    {provided.placeholder}
                    <ActionButton boardId={boardId} listId={list.listId} />
                </div>
            )}
        </Droppable>
    )
}

export default List;