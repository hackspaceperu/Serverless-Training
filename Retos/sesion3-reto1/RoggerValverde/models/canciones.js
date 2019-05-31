class CancionModel {
	constructor(db) {
		this.db = db;
		this.asientoModel = this.db.Asientos;
		return this;
  }
  

}