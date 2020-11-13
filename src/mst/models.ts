import { Instance, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'

const todoModel = types
    .model({
        id: types.string,
        title: types.string,
        isDone: types.boolean
    })
    .actions(self => ({
        changeStatus() {
            self.isDone = !self.isDone
        }
    }))


export const RootModel = types
    .model({
        todos: types.array(todoModel)
    })
    .actions(self => ({
        addTodo(title: string) {
            let newTodo = {
                id: new Date().toString(),
                title: title,
                isDone: false
            }
            self.todos.unshift(newTodo)
        }
    })
    )

const initialState = RootModel.create({
    todos: [
        {
            id: '123',
            title: 'Todsggdo1',
            isDone: false
        }, {
            id: '1234',
            title: 'Toddgdgo2',
            isDone: false
        }, {
            id: '1235',
            title: 'Todgdgdo3',
            isDone: false
        }, {
            id: '1236',
            title: 'Toddgdgo4',
            isDone: false
        }, {
            id: '1237',
            title: 'Todgdsggho5',
            isDone: false
        }
    ]
})

export type RootInstance = Instance<typeof RootModel>

export type Todo = Instance<typeof todoModel>

export const rootStore = initialState

const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Store cannot be null, please add a context provider");
    }
    return store;
}