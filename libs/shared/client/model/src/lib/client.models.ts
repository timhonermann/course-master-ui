export type Client = {
  id: string;
  name: string;
};

export type ClientCreation = Omit<Client, 'id'>;
