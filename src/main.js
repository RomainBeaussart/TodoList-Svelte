import App from './App.svelte';

new App({
  target: document.querySelector('#todoList'),
  props: {
    todos: [{
        name: 'Task 1',
        completed: false,
        id: 0
    },
    {
        name: 'Task 2',
        completed: true,
        id: 1
    }]
  }
});

const app = new App({
  target: document.querySelector('#todoList'),
  props: {
    todos: [{
        name: 'Task 1',
        completed: false,
        id: 2
    }]
  }
});