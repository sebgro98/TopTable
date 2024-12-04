import User from "./User";

export default interface Group {
    id: string;
    type: "g"; // Discriminator
    name: string;
    members: User[];
    game: string;
    playAtHome: boolean;
  }