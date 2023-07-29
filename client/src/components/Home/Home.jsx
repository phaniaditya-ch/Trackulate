import React, { useContext, useEffect } from 'react'
import Subcard from './Home-items/Subcard'
import MyContext from '../../context/context';
import './Home.css'
import Popupwin from './Home-items/Popupwin';

function Home() {

	const attendanceData = [
		{
			id: 'compNet',
			title: 'Computer Networks',
			present: 10,
			total: 20
		},
		{
			id: 'opSys',
			title: 'Operating Systems',
			present: 18,
			total: 20
		},
		{
			id: 'machLearn',
			title: 'Machine Learning',
			present: 20,
			total: 20
		},
		{
			id: 'peebm',
			title: 'PEEBM',
			present: 20,
			total: 20
		},
		{
			id: 'softEng',
			title: 'Software Engineering',
			present: 20,
			total: 20
		},
		{
			id: 'markManag',
			title: 'Marketing Management',
			present: 20,
			total: 20
		}
	]

	const { state, setState } = useContext(MyContext);

	const handleCardClick = async () => {
		console.log('check1');
		let sit = state.popUpWin
		setState({ ...state, popUpWin: true });
	  };

	useEffect(() => {
		// This code will run after each render and whenever the state changes
		console.log('check');
		console.log('state: ', state);
	  }, [state]);

	return (
		<>
			<div>
				<div className='popUpWin' style={{'display': (state.popUpWin ? 'block' : 'none')}}>
					<Popupwin />
				</div>
				<div className='cards-div'>
					{attendanceData.map(block => {
						return <div onClick={handleCardClick} className='subCard'  key={block.id}>
							<Subcard id={block.id} title={block.title} present={block.present} total={block.total} />
							</div>
					})}
				</div>
				<div className='attTable'>
					<div className='table-div'>
						<table>
							<thead>
								<tr>
									<th>Day</th>
									<th>8:30 - 9:20</th>
									<th>9:30 - 10:20</th>
									<th>10:30 - 11:20</th>
									<th>11:30 - 12:20</th>
									<th>12:20 - 2:00</th>
									<th>2:00 - 2:50</th>
									<th>3:00 - 3:50</th>
									<th>4:00 - 4:50</th>
									<th>5:00 - 5:50</th>
								</tr>
								<tr>
									<td>Monday</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
								</tr>
								<tr>
									<td>Tuesday</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
								</tr>
								<tr>
									<td>Wednesday</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
								</tr>
								<tr>
									<td>Thursday</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
								</tr>
								<tr>
									<td>Friday</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
									<td>.</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home