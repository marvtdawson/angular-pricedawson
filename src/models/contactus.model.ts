

export class ContactusModel {
  public uname: string;
  public email: string;
  public state: string;
  public city: string;
  public comment: string;

  constructor(uname: string, email: string, state: string, city: string, comment: string) {
    this.uname    = uname;
    this.email    = email;
    this.state    = state;
    this.city     = city;
    this.comment  = comment;
  }
}
