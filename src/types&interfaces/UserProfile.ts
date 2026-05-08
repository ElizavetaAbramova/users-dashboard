export type UserProfile = {
  address: UserAddress;
  age: number;
  birthDate: string;
  bloodGroup: string;
  company: {
    department: "Engineering";
    name: "Dooley, Kozey and Cronin";
    title: "Sales Manager";
    address: UserAddress;
  };
  email: string;
  firstName: string;
  gender: string;
  height: 193.24;
  id: 1;
  image: string;
  lastName: string;
  phone: string;
  university: string;
  weight: number;
};

type UserAddress = {
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
};
