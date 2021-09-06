function RestrictedPage ({isLoggedIn, user, login, logout}) {
    return (
        <>
            {isLoggedIn ? 
            <div>
                <p>Bem vindo, {user}!</p>
                <button onClick={logout}>Logout</button>
            </div> :
            <div>
                <p>Você não pode acessar essa página</p>
                <button onClick={login}>Login</button>
            </div>
            }
        </>
    )
}

export default RestrictedPage