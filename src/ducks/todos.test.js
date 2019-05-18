import reducer, {changeNewItemText, deleteItem, defaultState, addNewItem} from "./todos";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";

describe(`ChangeNewItemText`, () => {
    it("works", () => {
        expect(reducer(undefined, changeNewItemText(`some notes`))).toEqual({
            ...defaultState,
            newItemText: "some notes"
        })
    })
});

describe("deleteItem", () => {
    it("works", async () => {
        const stateWithItem = {
            ...defaultState,
            items: [
                {
                    id: 1,
                    text: "buy milk",
                    isDone: true
                },
                {
                    id: 2,
                    text: "go home",
                    isDone: false
                }
            ]
        };

        const api = {
            todos: {
                deleteItem: () => Promise.resolve()
            }
        };

        const store = createStore(
            reducer,
            stateWithItem,
            applyMiddleware(ReduxThunk.withExtraArgument({api}))
        );

        await store.dispatch(deleteItem(1));

        const nextState = store.getState();

        expect(nextState).toEqual({
            ...defaultState,
            items: [
                {
                    id: 2,
                    text: "go home",
                    isDone: false
                }
            ]
        });
    });
});

