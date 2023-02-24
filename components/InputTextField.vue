<script setup lang="ts">
import { Field, Form } from "vee-validate";
import { required } from "@vee-validate/rules";
import "@mdi/font/css/materialdesignicons.css";

const addText = ref("");

interface Props{
    name: string;
    type: string;
    placeHolder: string;
}

const props = withDefaults(defineProps<Props>(), {
    name: "",
    type: "",
    placeHolder: "",
});

interface Emits{
    (e: "update:onAdd", addText: string): void
}

const emit = defineEmits<Emits>()

function onAdd(resetForm: any) {
    // vuetifyのclickイベントでは$event.target.valueを取得出来ない
    // また引数にtextをセットする事も出来ない
    emit("update:onAdd", addText.value);

    addText.value="";
    // vee-validate初期化
    resetForm();
}
</script>

<template>
    <v-card variant="outlined">
        <Form 
            as ="v-form" 
            v-slot="{ meta: formMeta, resetForm }">
            <Field 
                :name="name" 
                :rules="required"
                v-slot="{ field, errors }">
                <v-list>
                    <v-list-item>
                        <v-text-field 
                            v-model="addText"
                            v-bind="field"
                            :error-messages="errors"
                            :type="type"
                            variant="plain"
                            :placeholder="placeHolder"
                        />

                        <!-- Enterキー対策 -->
                        <!-- Form内にInputが1つのみでEnterを押下するとリロードされてしまう -->
                        <input type="text" style="display: none;"/>

                        <template v-slot:prepend>
                            <v-icon icon="mdi-application-edit"></v-icon>
                        </template>
                        
                        <template v-if="formMeta.valid" v-slot:append>
                            <v-btn
                                icon="mdi-plus"
                                variant="text"
                                @click="onAdd(resetForm)">
                                </v-btn>
                        </template>
                    </v-list-item>
                </v-list>
            </Field>
        </Form>
    </v-card>
</template>