export default function Todo() {
    return(
        <div>
            <h1>Todo Page</h1>
            <form className="flex flex-col gap-2 w-96 mx-auto">
                <input type="text" placeholder="New Todo" className="bg-amber-100 p-2" />
                <input type="text" placeholder="Descrição" className="bg-amber-100 p-2"  />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}