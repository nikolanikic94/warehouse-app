import { Item } from './Item.model';

export class ItemSearch {
  private count: number;
  private results: Item[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results.map((item: Item) => new Item(item))) || [];
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Getter $results
   * @return {Item[]}
   */
  public get $results(): Item[] {
    return this.results;
  }

  /**
   * Setter $count
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }
}
