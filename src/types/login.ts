export interface LoginResponse {
    result:  string;
    message: string;
    data:    Data;
}

export interface Data {
    user_id: string;
    email:   string;
    name:    string;
    tel:     string;
}
