export type ResourceUrl = string;
export type ResourceId = number;

export interface Resource {
  id: ResourceId;
}

export interface PagedData<T> {
  count: number;
  hasMoreData: boolean;
  data: T[];
}
