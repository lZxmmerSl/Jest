const bufferSize = 5;
let read: number = 0;
let write: number = 0;
let arrCircular: number[] = new Array<number>(bufferSize);

let isOver = false

export const put = (input: number) => {
  arrCircular[write] = input;
  if(write >= bufferSize){
    write = 0
    isOver = true
  }else{
    write++;
  }
};

export const get = () => {
  if(isOver){
    read ++;
    isOver = false
  }
  let temread = arrCircular[read];
  return temread;
};
