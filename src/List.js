// import './App.css';

function List() {
	const todos = [
		{ id: 'odjfdsdsddojf', text: 'da;ljf;yweyeyeyetryjdaf;lkj' },
		{ id: 'odjffgfgdojf', text: 'da;ljfhjfjghgjh;jdaf;lkj' },
		{ id: 'odjfd5656ojf', text: 'da;ljf;fjhkjkjkjkjdaf;lkj' },
	];

	return (
		<ul className="List">
			{todos.map(el => (
				<li key={el.id}>
					<input type="checkbox" />
					{el.text}
				</li>
			))}
		</ul>
	);
}

export default List;
