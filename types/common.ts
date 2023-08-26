export enum placeHolder {
  CARD = "card",
  CONTENT = "content",
  IMAGE = "image",
}
export interface requestType<D> {
  loading: boolean;
  data: null | D;
  error: null | string;
}
