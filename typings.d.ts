interface Board {
  columns: Map<TypeColumn, Column>;
}
type TypeColumn = "todo" | "inporgress" | "done";

interface Column {
  id: TypeColumn;
  todos: Todo[];
}
interface Todo{
  $id: string;
  $createdAt: string;
  title: string;
  status: TypeColumn;
  image?: string;
}

interface Image {
  bucketId: string;
  fileId:string
}
