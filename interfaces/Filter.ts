export default interface Filter {
    ageMin?: number;
    ageMax?: number;
    gameTitle?: string; //May be replaced by Game object
    playAtHome?: boolean;
    playInPublic?: boolean;
  }