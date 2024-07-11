import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
    const greeting = "Welcome to the best store for geeks!";
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting={greeting}/>
        </>
    )
}

export default App;