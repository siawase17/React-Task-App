import React, { FC } from 'react'
import { container, description, title } from './Task.css';
import { Draggable } from 'react-beautiful-dnd';

type TTaskProps = {
    taskName: string;
    taskDescription: string;
    id: string;
    boardId: string;
    index: number;
}

const Task: FC<TTaskProps> = ({
    taskName,
    taskDescription,
    id,
    boardId,
    index,
}) => {
    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={container}
                >
                    <div className={title}>{taskName}</div>
                    <div className={description}>{taskDescription}</div>
                </div>
            )}
        </Draggable>

    )
}

export default Task;
