export interface Crud<T> {
  create(data: any): Promise<T>;

  findById(id: string): Promise<T | null>;

  update(id: string, data: any): Promise<T>;

  delete(id: string): Promise<T>;
}
