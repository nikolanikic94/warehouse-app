import { BuisinessPartner } from './BuisinessPartner.model';

export class Document {
  private _id: number;
  private dateOfRecording: string;
  private dateOfCreation: string;
  private transactionType: string;
  private status: string;
  private year: number;
  private businessPartner: BuisinessPartner;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.dateOfRecording = (obj && obj.dateOfRecording) || '';
    this.dateOfCreation = (obj && obj.dateOfCreation) || '';
    this.transactionType = (obj && obj.transactionType) || '';
    this.status = (obj && obj.status) || '';
    this.year = (obj && obj.year) || null;
    this.businessPartner = (obj && obj.businessPartner) || {};
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter $dateOfRecording
   * @return {string}
   */
  public get $dateOfRecording(): string {
    return this.dateOfRecording;
  }

  /**
   * Getter $dateOfCreation
   * @return {string}
   */
  public get $dateOfCreation(): string {
    return this.dateOfCreation;
  }

  /**
   * Getter $transactionType
   * @return {string}
   */
  public get $transactionType(): string {
    return this.transactionType;
  }

  /**
   * Getter $status
   * @return {string}
   */
  public get $status(): string {
    return this.status;
  }

  /**
   * Getter $year
   * @return {number}
   */
  public get $year(): number {
    return this.year;
  }

  /**
   * Getter $businessPartner
   * @return {BuisinessPartner}
   */
  public get $businessPartner(): BuisinessPartner {
    return this.businessPartner;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter $dateOfRecording
   * @param {string} value
   */
  public set $dateOfRecording(value: string) {
    this.dateOfRecording = value;
  }

  /**
   * Setter $dateOfCreation
   * @param {string} value
   */
  public set $dateOfCreation(value: string) {
    this.dateOfCreation = value;
  }

  /**
   * Setter $transactionType
   * @param {string} value
   */
  public set $transactionType(value: string) {
    this.transactionType = value;
  }

  /**
   * Setter $status
   * @param {string} value
   */
  public set $status(value: string) {
    this.status = value;
  }

  /**
   * Setter $year
   * @param {number} value
   */
  public set $year(value: number) {
    this.year = value;
  }

  /**
   * Setter $businessPartner
   * @param {BuisinessPartner} value
   */
  public set $businessPartner(value: BuisinessPartner) {
    this.businessPartner = value;
  }
}
