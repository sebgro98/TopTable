import Game from "./Game";
import Group from "./Group";

export default interface User {
    id: string;
    type: "u"; 
    name: string;
    age: number;
    bio: string;
    games: Game[];
    playAtHome: boolean;
    playInPublic: boolean;
    friendsList: (User | Group)[];
  }