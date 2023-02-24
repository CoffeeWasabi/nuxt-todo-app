import cloneDeep from "lodash/cloneDeep";
import { defineStore } from "pinia"
import { TodoData, RequestTask } from "~/types"

// ユーザー情報
export const userStore = defineStore("user", {
    state: () => ({
        _accountId: "",
        _firstName: "",
        _lastName: "",
    }),

    getters: {
        accountId: (state) => {
            return state._accountId;
        },
        firstName: (state) => {
            return state._firstName;
        },
        lastName: (state) => {
            return state._lastName;
        },
    },
    actions: {
        setUser(param: any) {
            this._accountId = param.accountId;
            this._firstName = param.firstName;
            this._lastName = param.lastName;
        },
        resetUser() {
            this._accountId = "";
            this._firstName = "";
            this._lastName = "";
        }
    },
});

// Todoリスト情報
export const todoListStore = defineStore("todoList", {
    state: () => ({
        _todoList: Array<TodoData>,
    }),

    getters: {
        todoList: (state) => {
            return state._todoList;
        },
    },
    actions: {
        async select(selectQuery: RequestTask) {
            const { data, error } = await useFetch("/api/db/task", {
                method: "post",
                body: selectQuery
            });
            if(error.value){
                throw new Error("selectに失敗しました。${error.value}");
            }

            const todoList = new Array<TodoData>;
            if(Array.isArray(data.value)){
                data.value.forEach(task => {
                    const response = {
                        id: task.id,
                        taskName: task.taskName,
                        checked: task.checked,
                        insUser: task.insUser,
                        insDate: task.insDate,
                        updDate: task.updDate,
                        deleteFlg: task.deleteFlg,
                        editFlg: false,
                    };
                    todoList.push(response);
                });
            };
            // ディープコピーしてセットしないとエラーが出る
            this._todoList = cloneDeep(todoList);
        },
        async add(param: any) {
            const { data:addTask, error:addTaskError } = await useFetch("/api/db/task", {
                method: "post",
                body: param
            });
        },
        async update(param: any) {
            const { data:updateTask, error:addTaskError } = await useFetch("/api/db/task", {
                method: "post",
                body: param
            });
        },
        async delete(param: any) {
            const { data:deleteTask, error:addTaskError } = await useFetch("/api/db/task", {
                method: "post",
                body: param
            });
        },
    },
});
