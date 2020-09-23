export interface IMenuItem {
  id: number;
  ItemName: string;
  MenuItemType: string;
  ItemDesc?: string;
  ItemCost: number | IVaribleItemPrice[];
}

export interface IWings {
  id: number;
  ItemName: string;
  MenuItemType: string;
  Counts: IWingCount[];
  Sauces: string[];
}
export interface IWingCount {
  Count: number;
  Value: number;
}

export interface IVaribleItemPrice {
  OptionName: string;
  OptionValue: number;
  OptionCookVariation?: string;
}

export interface IHouseSpecialityItem {
  ItemName: string;
  ItemDesc: string;
}
