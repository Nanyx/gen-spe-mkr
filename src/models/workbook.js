class Workbook {

  specs = [];
  current = null;

  constructor(name=""){
    this.id = Date.now();
    this.name = name;
  }

}

export default Workbook;