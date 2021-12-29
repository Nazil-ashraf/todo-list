import reducer, {addtodo, deletetodo, updateTodo} from './todo-reducer'

test('add todo', () => {
    const previousState = { todolist:[] }
    const expectedState = { todolist:[{id: 0}] }
    expect(reducer(previousState, addtodo({ids: 0}))).toEqual(expectedState)
})

test('update todo', () => {
    const previousState = { todolist:[{id:0}] }
    const expectedState = { todolist:[{id: 0, value: 'milk'}] }
    expect(reducer(previousState, updateTodo({ids: 0,value:'milk'}))).toEqual(expectedState)
})

test('delete todo', () => {
    const previousState = { todolist:[{id: 0, value: 'milk'}] }
    const expectedState = { todolist:[] }
    expect(reducer(previousState, deletetodo(0))).toEqual(expectedState)
})
