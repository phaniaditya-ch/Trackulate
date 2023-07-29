import React, { useContext } from 'react'
import MyContext from '../../../context/context';

function Popupwin() {

    const { state, setState } = useContext(MyContext);

    const handleCardClick = async () => {
        console.log('check1');
        let sit = state.popUpWin
        setState({ ...state, popUpWin: false });
    };

    return (
        <div>
            <div>
                <h2 className='closeIcon' onClick={handleCardClick}>&times;</h2>
                <h1>this is popup window</h1>
            </div>
        </div>
    )
}

export default Popupwin