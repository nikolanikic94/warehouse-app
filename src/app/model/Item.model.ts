export class Item {
  private price: number;
  private documents: number;
  private _id: number;
  private article: string;
  private quantity: number;

  constructor(obj?: any) {
    this.price = (obj && obj.price) || null;
    this.documents = (obj && obj.documents) || null;
    this._id = (obj && obj._id) || null;
    this.article = (obj && obj.article) || '';
    this.quantity = (obj && obj.quantity) || null;
  }

  /**
   * Getter $price
   * @return {number}
   */
  public get $price(): number {
    return this.price;
  }

  /**
   * Getter $documents
   * @return {number}
   */
  public get $documents(): number {
    return this.documents;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter $article
   * @return {string}
   */
  public get $article(): string {
    return this.article;
  }

  /**
   * Getter $quantity
   * @return {number}
   */
  public get $quantity(): number {
    return this.quantity;
  }

  /**
   * Setter $price
   * @param {number} value
   */
  public set $price(value: number) {
    this.price = value;
  }

  /**
   * Setter $documents
   * @param {number} value
   */
  public set $documents(value: number) {
    this.documents = value;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter $article
   * @param {string} value
   */
  public set $article(value: string) {
    this.article = value;
  }

  /**
   * Setter $quantity
   * @param {number} value
   */
  public set $quantity(value: number) {
    this.quantity = value;
  }
}
