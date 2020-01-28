class Info {
  career="";
  spec="";
  skills="";
}

class Tree {
  talents=[];
  lines=[];
}

export default class {
  info = new Info();
  tree = new Tree();
  constructor(){
    this.id = Date.now();
  }
}