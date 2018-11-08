export class User {
  	id: number;
  	name: string;
  	email: string;
  	password: string;
  	remember_token: string;
  	created_at: string;
  	updated_at: string;

  	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}