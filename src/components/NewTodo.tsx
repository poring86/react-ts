import { useRef, FormEvent, FC } from "react";

import "./NewTodo.css";

type NewTodoProps = {
	onAddTodo: (todoText: string) => void;
};

const NewTodo: FC<NewTodoProps> = (props) => {
	const textInputref = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: FormEvent) => {
		event.preventDefault();
		if (textInputref.current) {
			const enteredText = textInputref.current.value;
			props.onAddTodo(enteredText);
		}
	};
	return (
		<form onSubmit={todoSubmitHandler}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo text</label>
				<input type="text" id="todo-text" ref={textInputref} />
			</div>
			<button type="submit">ADD TODO</button>
		</form>
	);
};

export default NewTodo;
