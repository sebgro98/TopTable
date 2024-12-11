import Game from "./Game";
import User from "./User";

export default interface Group {
  id: string;
  type: "g";
  username: string;
  bio: string;
  members: User[]; //Might replace with user id for less space
  admin: User; //Might replace with user id for less space
  games: Game[];
  playAtHome?: boolean;
}
