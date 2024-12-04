export default interface User {
    id: string;
    type: "u"; // Discriminator
    name: string;
    age: number;
    game: string;
    playAtHome: boolean;
  }