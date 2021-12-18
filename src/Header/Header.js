import classes from './Header.module.css'



/*Complete the Logic that uses the search to filter the results */
const Header = () => {

    const submitHandler = (e) => {
        e.preventDefault()

    }

    return (
        <div className={classes.topNav}>
            <img src="https://yanniks14.github.io/reddit-client/reddit-logo.svg" width='40px' height='40px' alt='' />
            <h1>Macs Reddit Client</h1>
            <input type='text' placeholder="Search" onSubmit={submitHandler} />
        </div>


    )
}

export default Header