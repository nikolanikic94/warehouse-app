export class Article {
  private name: string;
  private code: string;
  private _id: number;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.code = (obj && obj.code) || '';
    this._id = (obj && obj._id) || null;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $code
   * @return {string}
   */
  public get $code(): string {
    return this.code;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $code
   * @param {string} value
   */
  public set $code(value: string) {
    this.code = value;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }
}
