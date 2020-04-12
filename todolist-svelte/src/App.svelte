<script>
    import Todo from './components/Todo.svelte'
    
    export let todos

    let newTodo = ''
    let showCompleted = false

    // Reactif variable with $:
    $: filtered = todos.filter(t => showCompleted ? true : t.completed === false) 

    function addTodo() {
        todos = [...todos, {
            name: newTodo,
            completed: false,
            id: Date.now()
        }]
        newTodo = ''
        // Mutation detection like ReactJS
    }

    function changeTodo(todo, detail) {
        todos = todos.map(t => {
            if(t === todo) {
                return{...todo, ...detail}
            }
            return t
        })
    }

    function deleteTodo(todo) {
        todos = todos.filter( t => t !== todo)
    }
</script>

<main>
	<h1>TODO LIST!</h1>
    <label>
        <input type="checkbox" bind:checked={showCompleted}> Afficher les taches complétés
    </label>
	<ul>
        {#each filtered as todo (todo.id)}
        <Todo 
            todo={todo}
            on:delete={() => deleteTodo(todo)}
            on:change={(e) => changeTodo(todo, e.detail)}
        />
        {/each}
    </ul>
    <input type="text" bind:value={newTodo}><button on:click|preventDefault={addTodo}>Ajouter</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>