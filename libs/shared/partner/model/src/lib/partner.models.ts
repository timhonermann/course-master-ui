export type Partner = {
  id: string;
  name: string;
};

export type PartnerCreation = Omit<Partner, 'id'>;
