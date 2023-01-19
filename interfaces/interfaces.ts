export interface IReceivedData {
  results: { name: string; url: string }[];
}

export interface IPokemonData {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
}
