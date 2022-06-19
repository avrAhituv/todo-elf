export interface TodoItem{
    id: number;
    title: string;
    isComplete: boolean;
    dateLoaded?: Date
}

export interface User{
    id: number;
    fullname: string;
    phone?: string;
    email?: string;
}