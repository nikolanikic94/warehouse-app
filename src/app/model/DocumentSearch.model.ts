import { Document } from './Document.model';

export class DocumentSearch {
  private count: number;
  private results: Document[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results.map((document: Document) => new Document(document))) ||
      [];
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
   * @return {Document[]}
   */
  public get $results(): Document[] {
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
