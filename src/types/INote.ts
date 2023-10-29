export interface INote {
  date: string;
  deadline?: string;
  title: string;
  text: string;
  status: string;
  type?: string;
  id: number;
  isArchived: boolean;
}
