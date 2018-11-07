import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArrOfBooks from '../dataArray';

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const FullList = () => (
	<div>
		<ul>
			{
				ArrOfBooks.all().map(p => (
					<li key={p.id}>
						<Link to={`/basicExample/list/${p.id}`}>{p.author}</Link>
					</li>
				))
			}
		</ul>
	</div>
)

// const BookShelf = (props) => {
// 	const book = ArrOfBooks.get(
// 		props.match.params.id
// 	);
// 	// console.log(props.match);
// }

function BookShelf(props){
	const book = ArrOfBooks.get(
		props.match.params.id
	);
	if(book.type === 'theirs'){
		return (
			<div className='paddinged'>
				<h2>{book.author}</h2>
				<h3>{book.books}</h3>
				<Link to='/basicExample/list'>Back</Link>
			</div>
		)
	} else{
		return(
			<div className='paddinged'>
				<h3 className='error-text'>Ошибочный выбор. Попробуйте еще раз.</h3>
				<Link to='/basicExample/list'>Back</Link>
			</div>
		)
	}
}

const List = () => (
	<div>
		<h3 className='paddinged'>Выберите зарубежного автора</h3>
		<Switch>
			<Route exact path='/basicExample/list' component={FullList}/>
			<Route path='/basicExample/list/:id' component={BookShelf}/>
		</Switch>
	</div>
)

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/basicExample/list' component={List}/>
		</Switch>
	</main>
)

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/basicExample/list'>List</Link></li>
			</ul>
		</nav>
	</header>
)

const BasicExample = () => (
	<Router>
		<div>
			<Header />
			<Main />
		</div>
	</Router>
)

export {BasicExample, Home};