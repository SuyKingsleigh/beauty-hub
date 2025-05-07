export interface Crud<T> {
  create(data: any): Promise<T>;

  findById(id: string): Promise<T | null>;

  updatePartial(id: string, partial: Partial<T>): Promise<T>;

  delete(id: string): Promise<T>;

  exists(id: string): Promise<boolean>;
}
