import '../views/Nav.scss';

const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="timer">Timer Ạpps</a>
            <a href="todo">Todo Apps</a>
            <a href="secret">Secret</a>
        </div>
    );
}

export default Nav;