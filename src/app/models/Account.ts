export interface Account {
  name:String;
  available:Number;
  change:ChangeObject;
}

interface ChangeObject {
    percent:Number,
    amount:Number,
    dir:String
}