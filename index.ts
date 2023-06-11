//Типы ответов от сервера
export enum ApiResponseState {
    OK = 0,
    CLIENT_ERROR = 1,
    BACKEND_ERROR = -1,
}

export interface ApiResponse<T> {
    state: ApiResponseState; // Статус ответа
    data?: T; // Данные ответа
    message?: string; // Сообщение клиенту (какая ошибка или просто сообщение)
    error?: any, //Доп информация об ошибке
}

export type ApiRes<T> = Promise<ApiResponse<T>>

export interface Paggination<T, T2> {
    currentPage: number; //Текущая страница
    totalPages: number; //Всего страниц

    totalItems: number; //Всего элементов
    itemsPerPage: number; //Элементов на странице

    items?: T;
    
    payload?: T2 //Дополнительная информация
}
