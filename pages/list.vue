<script setup lang="ts">
import { userStore, todoListStore } from "~/store/todoStore";
import { RequestTask, TodoData } from "~/types";
import InputTextField from "~/components/InputTextField.vue";
import TodoList from "~/components/TodoList.vue";

// ヘッダー、フッターを切り替える
definePageMeta({
  layout: 'loggedin',
});

const addTaskName = ref("");

const user = userStore();
// ユーザー情報が取得出来ない場合はログイン画面にリダイレクト
if(!user || !user.accountId){
    const router = useRouter();
    router.replace("/login");
}

// ストアからTodoリストを呼び出す
const todoStore = todoListStore();
const todoList = ref(new Array());

const onSelect = async (): Promise<void> => {
    await todoStore.select({
        actionType: "select",
        accountId: user.accountId,
    });
    todoList.value = todoStore.todoList;
};

const onAdd = async (addText: string): Promise<void> => {
    const insertData: RequestTask = {
        actionType: "insert",
        accountId: user.accountId,
        taskName: addText,
    };
    await todoStore.add(insertData);
    // 再読み込み
    onSelect();
};

const onUpdate = async (items: any): Promise<void> => {
    const updateData: RequestTask = {
        actionType: "update",
        id:items.id,
        taskName: items.taskName,
        checked: items.checked,
    };
    await todoStore.update(updateData);
    items.editFlg = false;
    onSelect();
};

const onDelete = async (items: any): Promise<void> => {
    const updateData: RequestTask = {
        actionType: "delete",
        id:items.id,
    };
    await todoStore.delete(updateData);
    onSelect();
};

const onEnable = (items: any) => {
    items.editFlg = true;
};

const onDisable = (items: any) => {
    items.editFlg = false;
    onSelect();
};

const onChange = async (items: any) => {
    const updateData: RequestTask = {
        actionType: "update",
        id:items.id,
        checked: items.checked,
    };
    await todoStore.update(updateData);
    items.editFlg = false;
    onSelect();
};

onMounted(() => {
    onSelect();
});
</script>

<template>
    <div>
        <div class="text-h4 text-center">Todo List</div>
        <v-container>
            <InputTextField
                v-model="addTaskName"
                name="Todo name"
                type="text"
                placeHolder="Input todo name"
                @update:onAdd="onAdd"
            />
        </v-container>
        <v-container>
            <TodoList 
                :todoList="todoList"
                @update:onChange="onChange"
                @update:onUpdate="onUpdate"
                @update:onDelete="onDelete"
                @update:onEnable="onEnable"
                @update:onDisable="onDisable"
                />
        </v-container>
    </div>
</template>