<script setup lang="ts">
import { Field } from "vee-validate";
import { required } from "@vee-validate/rules";

const text = ref("");

interface Props{
    name: string;
    type: string;
    prependIcon: string;
    placeHolder: string;
}

const props = withDefaults(defineProps<Props>(), {
    name: "",
    type: "",
    prependIcon: "",
    placeHolder: "",
});

interface Emits{
    (e: "update:modelValue", name: string): void
}

const emit = defineEmits<Emits>()

function onChange(value: string){
    emit("update:modelValue", value)
}
</script>

<template>
    <Field 
        :name="name" 
        :rules="required"
        v-slot="{ field, errors }">
        <v-text-field 
            :modelValue="text"
            v-bind="field"
            :type="type"
            :error-messages="errors"
            :prepend-icon="prependIcon"
            clearable
            variant="outlined"
            :placeholder="placeHolder"
            @input="onChange($event.target.value)"
        />
    </Field>
</template>