import IUpload from "./IUpload";

export default interface IPost {
  id: string;
  title: string;
  upload: IUpload[]
  description: string;
  create_at: Date;
}
