import React, { FC } from 'react';
import { IList } from '../../types';
import List from '../List/List';
import { listsContainer } from './ListsContainer.css';
import ActionButton from '../ActionButton/ActionButton';

type TListContainerProps = {
    lists: IList[];
    boardId: string;
};

const ListsContainer: FC<TListContainerProps> = ({ lists, boardId }) => {
    return (
        <div className={listsContainer}>
            {
                lists.map(list => (
                    <List
                        key={list.listId}
                        list={list}
                        boardId={boardId}
                    />
                ))
            }
            <ActionButton />
        </div>
    )
}

export default ListsContainer;