import { TaskStatus } from "./enums/task-status";

export interface TaskModel {
    id: number;
    title: string;
    createdByUserId?: number;
    creationTime?: Date;
    description: string;
    dueDate?: Date;
    status?: TaskStatus;
    userId?: number;
    userName?: string;
    categories?: Category[];
}

export interface Category {
    id: number;
    name: string;
}
