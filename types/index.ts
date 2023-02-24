export interface TodoUser {
    id: string;
    firstName: string;
    lastName: string;
}

export interface UserResponse {
    user: any;
    errorMessage: string;
}

export interface RequestTaskData {
    actionType: | "select" | "insert" | "update" | "delete";
    accountId: string;
    id?: number;
    taskName?: string;
    checked: boolean;
    insUser?: string;
    insDate?: Date;
    updDate?: Date;
    deleteFlg: boolean;
}

export interface TodoData {
    id: number;
    taskName: string;
    checked: boolean;
    insUser: string;
    insDate: Date;
    updDate: Date;
    deleteFlg: boolean;
    editFlg: boolean;
}
