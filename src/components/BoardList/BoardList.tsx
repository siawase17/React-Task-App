import React, { FC, useState, useRef } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiPlusCircle, FiLogIn } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { container, title, addSection, addButton, boardItem, boardItemActive } from './BoardList.css';
import clsx from 'clsx';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { setUser, resetUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';

type TBoardListProps = {
    activeBoardId: string;
    setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
}

const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
    const dispatch = useTypedDispatch();
    const { boardArray } = useTypedSelector(state => state.boards);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const { isAuth } = useAuth();

    const handleBoardAdd = () => {
        setIsFormOpen(!isFormOpen)
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(userCredential => {
                dispatch(setUser({
                    email: userCredential.user.email,
                    id: userCredential.user.uid
                }))
            }).catch(err => console.log(err));
    };

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            dispatch(resetUser());
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <div className={container}>
            <div className={title}>
                게시판
            </div>
            {boardArray.map((board, index) => (
                <div key={board.boardId}
                    onClick={() => setActiveBoardId(boardArray[index].boardId)}
                    className={
                        clsx(
                            {
                                [boardItemActive]:
                                    boardArray.findIndex(b => b.boardId === activeBoardId) === index
                            },
                            {
                                [boardItem]:
                                    boardArray.findIndex(b => b.boardId === activeBoardId) !== index
                            }
                        )
                    }
                >
                    <div>
                        {board.boardName}
                    </div>
                </div>
            ))}
            <div className={addSection}>
                {isFormOpen ? <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
                    :
                    <FiPlusCircle className={addButton} onClick={handleBoardAdd} />}
                {isAuth ? <GoSignOut className={addButton} onClick={handleLogout} />
                    : <FiLogIn className={addButton} onClick={handleLogin} />}
            </div>
        </div>
    )
}

export default BoardList;