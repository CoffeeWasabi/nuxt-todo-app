<script setup lang="ts">
import { TodoData } from "~/types";

// Todoリストのフィルター情報
const filter = ref("all");

interface Props{
    todoList: Array<TodoData>;    
}

const props = withDefaults(defineProps<Props>(), {
    todoList: () => new Array(),
});

interface Emits{
    (e: "update:onChange", todo: TodoData): void // チェックボックス更新
    (e: "update:onUpdate", todo: TodoData): void // Todo内容更新
    (e: "update:onDelete", todo: TodoData): void // 削除
    (e: "update:onEnable", todo: TodoData): void // 更新モードOn
    (e: "update:onDisable", todo: TodoData): void // 更新モードOff
};

const emit = defineEmits<Emits>();

function onChange(todo: TodoData){
    emit("update:onChange", todo)
};

function onEnable(todo: TodoData){
    if(!todo.checked){
        emit("update:onEnable", todo);
    }
};

function onDisable(todo: TodoData){
    emit("update:onDisable", todo)
};

function onUpdate(todo: TodoData){
    emit("update:onUpdate", todo)
};

function onDelete(todo: TodoData){
    emit("update:onDelete", todo)
};

function onFilter(){
    if(filter.value === "all"){
        return props.todoList;
    } else if(filter.value === "unchecked"){
        return props.todoList.filter(todo => !todo.checked)
    } else if(filter.value === "checked"){
        return props.todoList.filter(todo => todo.checked)
    }
};

</script>

<template>
    <v-card 
        variant="outlined">
        <v-list>
            <v-list-subheader>
                <v-spacer></v-spacer>
                <v-btn-toggle
                    v-model="filter"
                    rounded="0"
                    group
                >
                    <v-btn value="all" @click="onFilter()">all</v-btn>
                    <v-btn value="unchecked" @click="onFilter()">unchecked</v-btn>
                    <v-btn value="checked" @click="onFilter()">checked</v-btn>
                </v-btn-toggle>
            </v-list-subheader>
            <v-list-item
                v-for="(todo, i) in onFilter()"
                :key="i"
                :value="todo"
                variant="plain">
                <template v-slot:prepend>
                    <v-checkbox-btn
                        v-model="todo.checked"
                        class="pe02"
                        @change="onChange(todo)">
                    </v-checkbox-btn>
                </template>
                <v-list-item-title
                    v-if="!todo.editFlg"
                    v-text="todo.taskName"
                    :class="{'text-decoration-line-through': todo.checked }"
                    @click="onEnable(todo)"
                    ></v-list-item-title>
                <v-text-field
                    v-else
                    v-model="todo.taskName"
                    variant="plain"
                    @keyup.enter="onUpdate(todo)"
                    @blur="onUpdate(todo)"
                    @keyup.esc="onDisable(todo)"
                    ></v-text-field>
                <template v-slot:append>
                    <v-icon 
                        v-if="!todo.editFlg" 
                        icon="mdi-close"
                        @click="onDelete(todo)"
                        ></v-icon>
                    <v-icon 
                        v-else 
                        icon="mdi-pencil"
                        @click="onUpdate(todo)"></v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-card>
</template>