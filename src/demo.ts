export interface Duck {
  id: number;
  name: string;
  numleg: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  id: 1,
  name: "hihi",
  numleg: 2,
  makeSound: (sound: any) => console.log(sound),
};
const duck2: Duck = {
  id: 2,
  name: "haha",
  numleg: 2,
  makeSound: (sound: any) => console.log(sound),
};
const duck3: Duck = {
  id: 3,
  name: "leuleu",
  numleg: 2,
  makeSound: (sound: any) => console.log(sound),
};

duck1.makeSound("quack");

export const ducks = [duck1, duck2, duck3];
