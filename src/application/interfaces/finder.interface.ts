export interface Finder {
  findById(id: string): Promise<object | any>;
  exists(id: string): Promise<boolean>;
}