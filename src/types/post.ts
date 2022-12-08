export interface PostResponse {
    result: string;
    message: string;
    data: PostData;
  }
  
  export interface PostData {
    data: Datum[];
  }
  
  export interface Datum {
    _id: string;
    name: string;
    detail: string;
    timestamp: Date;
  }