import React, { useState, ChangeEvent, FC, useRef } from 'react'
import { FiCheck } from 'react-icons/fi';
import { icon, input, sideForm } from './SideForm.css';
import { useTypedDispatch } from '../../../hooks/redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import { v4 as uuid4 } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';

type TSideFormProps = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    inputRef: React.RefObject<HTMLInputElement>;
}

const SideForm: FC<TSideFormProps> = ({ setIsFormOpen, inputRef }) => {
    const [inputText, setInputText] = useState('');
    const dispatch = useTypedDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleOnBlur = () => {
        setIsFormOpen(false);
    };

    const handleClick = () => {
        if (inputText) {
            dispatch(
                addBoard({
                    board: {
                        boardId: uuid4(),
                        boardName: inputText,
                        lists: []
                    }
                })
            )
            dispatch(
                addLog({
                    logId: uuid4(),
                    logMessage: `게시판 등록: ${inputText}`,
                    logAuthor: "User",
                    logTimestamp: String(Date.now()),
                })
            )
        }
    }

    return (
        <div className={sideForm}>
            <input
                className={input}
                ref={inputRef}
                //autoFocus
                type="text"
                placeholder='새로운 게시판 등록'
                value={inputText}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            <FiCheck className={icon} onMouseDown={handleClick} />
        </div>
    )
}

export default SideForm