import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

export default function Todo() {
    return (
        <div>
            <h1>Todo Page</h1>
            <h2>versão 2</h2>

            <form>
                <input type="text" placeholder="New todo" />
                <button
                    type="submit"
                    className="bg-violet-500 flex gap-2 items-center justify-center text-white px-5 py-1 rounded-full"
                >
                    Add <FaPlus />
                </button>

                <button type="button" className="ml-3">Remover <FaRegTrashAlt /></button>
            </form>
        </div>
    );
}