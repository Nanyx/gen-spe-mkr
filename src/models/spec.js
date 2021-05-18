import Info from './info';

class Tree {
  talents=[];
  lines=[];
}

class Spec {
  constructor(career="", spec=""){
    this.id = Date.now();
    this.info = new Info(career, spec);
    this.tree = new Tree();
  }
}

export default Spec;