export interface Pokemon {
  name: string;
  id: number;
  height: number;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name:string;
    }
  }>;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}