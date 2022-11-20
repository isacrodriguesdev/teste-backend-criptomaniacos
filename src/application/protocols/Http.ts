
interface HttpData {
  body: any;
  user?: any;
}

export interface HttpResponse extends HttpData {
  status: number;
}

export interface HttpRequest extends HttpData {
  params?: any;
  query?: any;
  headers?: any;
}