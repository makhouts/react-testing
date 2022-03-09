import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {Todo} from '../Todo';

afterEach(() => {
    cleanup();
})

test('should render non-todo ', () => {
    const todo = {
      id: 1,
      task: "washdishes",
      completed: false,
    };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).not.toContainHTML('<strike>')
});

test('should render completed todo', () => {
    const todo = {
      id: 2,
      task: "wash car",
      completed: true,
    };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).not.toContainHTML('<strike>');
});

test('matches snapshot', () => {
    const todo = {
        id: 1,
        task: "washdishes",
        completed: false,
      };

    const tree = renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
})