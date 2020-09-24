import { ItemType } from "../enums";
import { IMenuItem, IWings, IHouseSpecialityItem } from "../interfaces";

interface IMenuItems {
  AppetizerItems: IMenuItem[];
  SandwichItems: IMenuItem[];
  SideItems: IMenuItem[];
  BurgerItems: IMenuItem[];
  PlatterItems: IMenuItem[];
  ComboPlatterItems: IMenuItem[];
  RonsPlatterItems: IMenuItem[];
  TacoItems: IMenuItem[];
  WingItems: IWings;
  SecretMenuItems: IMenuItem[];
  SaladMenuItems: IMenuItem[];
  SoupMenuItems: IMenuItem[];
  KidMenuItems: IMenuItem[];
  DessertMenuItems: IMenuItem[];
  HouseSpecialityItems: IHouseSpecialityItem[];
}

export const MenuItems: IMenuItems = {
  AppetizerItems: [
    {
      id: 1,
      ItemName: "Chips N Salsa",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 4,
      ItemDesc: "House made salsa and chips fried to order.",
    },
    {
      id: 2,
      ItemName: "Fried Green Tomatoes",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 6,
      ItemDesc: "Hand breaded served with house made remoulade sauce.",
    },
    {
      id: 3,
      ItemName: "Fried Okra",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 6,
      ItemDesc: "Lightly breaded served with  house made ranch dressing.",
    },
    {
      id: 4,
      ItemName: "Fried Pickle Spears",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 6,
      ItemDesc: "Hand breaded served with house made ranch dressing.",
    },
    {
      id: 5,
      ItemName: "Fried Clam Strips",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 8,
      ItemDesc: "Lightly breaded served with cocktail sauce.",
    },
    {
      id: 6,
      ItemName: "Bermuda Triangles",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 6,
      ItemDesc: "Breaded mozzarella cheese fried served with marinara.",
    },
    {
      id: 7,
      ItemName: "Fried Mushrooms",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 6.5,
      ItemDesc: "Crispy battered mushrooms served with Ranch dressing.",
    },
    {
      id: 8,
      ItemName: "Poutine",
      MenuItemType: ItemType.Appetizer,
      ItemCost: 9,
      ItemDesc:
        "Crispy fries smothered with gravy, cheese curds, bacon, egg and scallions.",
    },
    {
      id: 9,
      ItemName: "Loaded Nachos",
      MenuItemType: ItemType.Appetizer,
      ItemCost: [
        { OptionName: "Pork", OptionValue: 9 },
        { OptionName: "Chicken", OptionValue: 9 },
        { OptionName: "Shrimp", OptionValue: 11 },
      ],
      ItemDesc:
        "Corn chips smothered with queso ,black beans,pico, chipolte aioli & cotija cheese",
    },
  ],

  SandwichItems: [
    {
      id: 10,
      ItemName: "Po'Boy Sandwich",
      MenuItemType: ItemType.Lunch,
      ItemCost: [
        {
          OptionName: "Fish",
          OptionValue: 11,
          OptionCookVariation: "Choose blackened, fried or grilled",
        },
        {
          OptionName: "Shrimp",
          OptionValue: 11,
          OptionCookVariation: "Choose blackened, fried, or grilled",
        },
        {
          OptionName: "Fried Oysters",
          OptionValue: 14,
          OptionCookVariation: "Stuffed with lightly fried oysters",
        },
        {
          OptionName: "Fried Shrimp & Fried Oysters",
          OptionValue: 14,
          OptionCookVariation: "Stuffed with the best of both",
        },
      ],
      ItemDesc:
        "Authentic Leidenheimer French rolls topped with mayo, creole mustard, lettuce, tomato, pickles. All Po'Boys come with one side",
    },
  ],

  SideItems: [
    {
      id: 11,
      ItemName: "French Fries",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
    {
      id: 12,
      ItemName: "Cole Slaw",
      MenuItemType: ItemType.Lunch,
      ItemCost: 2.5,
    },
    {
      id: 13,
      ItemName: "Wasabi Slaw",
      MenuItemType: ItemType.Lunch,
      ItemCost: 2.5,
    },
    {
      id: 14,
      ItemName: "Sweet Potato Fries",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
    {
      id: 15,
      ItemName: "Onion Strings",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
    {
      id: 16,
      ItemName: "Cucumber Salad",
      MenuItemType: ItemType.Lunch,
      ItemCost: 2.5,
    },
    {
      id: 17,
      ItemName: "Tater Tots",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
    {
      id: 18,
      ItemName: "Cilantro Rice",
      MenuItemType: ItemType.Lunch,
      ItemCost: 2.5,
    },
    {
      id: 19,
      ItemName: "Fried Okra",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
    {
      id: 20,
      ItemName: "Hush Puppies",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
    {
      id: 21,
      ItemName: "Mac Salad",
      MenuItemType: ItemType.Lunch,
      ItemCost: 3,
    },
  ],

  BurgerItems: [
    {
      id: 22,
      ItemName: "Average Joe",
      MenuItemType: ItemType.Lunch,
      ItemCost: [
        { OptionName: "No Additions", OptionValue: 10 },
        { OptionName: "Bacon", OptionValue: 11 },
      ],
      ItemDesc: "American Cheese, lettuce, tomato, onion & pickle.",
    },
    {
      id: 23,
      ItemName: "Blackened Blue",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "Blackened patty with bacon, blue cheese, lettuce, tomato, onion, & pickle.",
    },
    {
      id: 24,
      ItemName: "Country Boy",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "House-made pimento cheese, fried green tomato, caramelized onions & remoulade.",
    },
    {
      id: 25,
      ItemName: "Patty Melt",
      MenuItemType: ItemType.Lunch,
      ItemCost: 10,
      ItemDesc:
        "Caramelized onions, American cheese, Swiss cheese, served toasted rye.",
    },
    {
      id: 26,
      ItemName: "Red White & Blue",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "Lettuce, tomato, bacon, American cheese, onion rings, & an over easy egg.",
    },
    {
      id: 27,
      ItemName: "Tijuana",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "Mexican seasoned patty with escobeche, green chile, Monterey jack cheese, & jalapeno bacon.",
    },
    {
      id: 28,
      ItemName: "The Western",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "American cheese, bacon, onion strings, served with Cantonese BBQ.",
    },
  ],

  PlatterItems: [
    {
      id: 29,
      ItemName: "Fried Chicken Tenders",
      MenuItemType: ItemType.Lunch,
      ItemCost: 10.5,
    },
    {
      id: 30,
      ItemName: "Beer Batter Cod",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11.5,
    },
    {
      id: 31,
      ItemName: "Mahi Mahi",
      MenuItemType: ItemType.Lunch,
      ItemCost: 12.5,
    },
    {
      id: 32,
      ItemName: "Fried Shrimp",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11.5,
    },
    {
      id: 33,
      ItemName: "Fried Oysters",
      MenuItemType: ItemType.Lunch,
      ItemCost: 14.5,
    },
  ],

  ComboPlatterItems: [
    {
      id: 34,
      ItemName: "Fried Shrimp & Fried Cod",
      MenuItemType: ItemType.Lunch,
      ItemCost: 17,
    },
    {
      id: 35,
      ItemName: "Fried Shrimp & Fried Oysters",
      MenuItemType: ItemType.Lunch,
      ItemCost: 21,
    },
    {
      id: 36,
      ItemName: "Fried Shrimp & Clam Strips",
      MenuItemType: ItemType.Lunch,
      ItemCost: 18,
    },
    {
      id: 37,
      ItemName: "Fried Cod & Clam Strips",
      MenuItemType: ItemType.Lunch,
      ItemCost: 17,
    },
    {
      id: 38,
      ItemName: "Fried Cod & Fried Oysters",
      MenuItemType: ItemType.Lunch,
      ItemCost: 21,
    },
    {
      id: 39,
      ItemName: "Fried Oysters & Clam Strips",
      MenuItemType: ItemType.Lunch,
      ItemCost: 19,
    },
  ],

  RonsPlatterItems: [
    {
      id: 40,
      ItemName:
        "Fried Shrimp, Fried Cod, Fried Oysters, Clam Strips, Hushpuppies & Slaw",
      MenuItemType: ItemType.Lunch,
      ItemCost: 26,
    },
  ],

  TacoItems: [
    {
      id: 41,
      ItemName: "Carnitas",
      MenuItemType: ItemType.Lunch,
      ItemCost: 10.5,
      ItemDesc:
        "Mexican seasoned pulled pork; topped with cabbage, cilantro, onions, jalapeno aioli, & hot sauce.",
    },
    {
      id: 41,
      ItemName: "Chicken",
      MenuItemType: ItemType.Lunch,
      ItemCost: 10,
      ItemDesc:
        "Choose blackened, fried, or grilled; topped with lettuce, tomato, onion, & cheddar cheese.",
    },
    {
      id: 42,
      ItemName: "Shrimp",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "Choose blackened, fried, or grilled; topped with cabbage, cilantro, onions, jalapeno aioli, & cotija cheese.",
    },
    {
      id: 42,
      ItemName: "Cod",
      MenuItemType: ItemType.Lunch,
      ItemCost: 11,
      ItemDesc:
        "Choose blackened, fried, or grilled; topped with cabbage, cilantro, onions, sweet jalapeno aioli, & cotija cheese.",
    },
    {
      id: 43,
      ItemName: "Mahi Mahi",
      MenuItemType: ItemType.Lunch,
      ItemCost: 12,
      ItemDesc:
        "Choose blackened, fried, or grilled; topped with cabbage, cilantro, onions, sweet jalapeno aioli, & cotija cheese.",
    },
    {
      id: 44,
      ItemName: "Teriyaki",
      MenuItemType: ItemType.Lunch,
      ItemCost: [
        { OptionName: "Shrimp", OptionValue: 11 },
        { OptionName: "Fish", OptionValue: 11 },
        { OptionName: "Chicken", OptionValue: 10 },
      ],
      ItemDesc: "Topped with wasabi slaw, onions, and cilantro.",
    },
  ],

  WingItems: {
    id: 45,
    ItemName: `Ron's Wings`,
    MenuItemType: ItemType.Lunch,
    Counts: [
      { Count: 6, Value: 7 },
      { Count: 12, Value: 13 },
    ],
    Sauces: [
      "Mild",
      "Medium",
      "Buffalo",
      "Honey Buffalo",
      "Honey Garlic Buffalo",
      "Lemon Pepper",
      "Bold Cantonese BBQ",
      "Sweet Mandarin BBQ",
      "Kansas City BBQ",
      "Teriyaki",
      "Peruvian",
      "Garlic Parmesan",
      "Jamaican Jerk",
      "Sweet Thai Chili",
      "Mango Habanero",
    ],
  },

  SecretMenuItems: [
    {
      id: 46,
      ItemName: "Chef's Favorite Triple B Sandwich",
      MenuItemType: ItemType.Lunch,
      ItemCost: 14,
      ItemDesc: `
    Hickory smoked Angus brisket baked with our Cantonese BBQ, topped with creamy brie cheese, caramelized onions, and horseradish mayo, on a brioche bun.
    `,
    },
    {
      id: 47,
      ItemName: "Gyro Sandwich",
      MenuItemType: ItemType.Lunch,
      ItemCost: 9.5,
      ItemDesc: `
    Lamb & beef, tzatziki sauce, lettuce, tomato, red onion, wrapped in a pita.
    `,
    },
    {
      id: 48,
      ItemName: "Pulled Pork Sandwich",
      MenuItemType: ItemType.Lunch,
      ItemCost: 13,
      ItemDesc: `
    Tender pulled pork piled on a brioche bun. Served with your choice of cole slaw or wasabi slaw, & Cantonese or Mandarin BBQ on the side.
    `,
    },
    {
      id: 49,
      ItemName: "Vietnamese Ban Mi Sandwich",
      MenuItemType: ItemType.Lunch,
      ItemCost: 13.5,
      ItemDesc: `
    Pulled pork simmered in our Sweet Mandarin BBQ sauce, served on a French roll topped with mayo, soy sauce,
cucumbers, cilantro, & pickled daikon radish and carrot.
    `,
    },
    {
      id: 50,
      ItemName: "Cajun Chicken Sandwich",
      MenuItemType: ItemType.Lunch,
      ItemCost: 10,
      ItemDesc: `
    Cajun seasoned chicken breast topped with swiss cheese, lettuce, tomato & chipolte aioli.
    `,
    },
  ],

  SaladMenuItems: [
    {
      id: 51,
      ItemName: "Ceasar",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Romaine, red onion, parmesan cheese & croutons.
    `,
    },
    {
      id: 52,
      ItemName: "House",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
     Romaine, tomato, red onion, cheddar cheese, & croutons.
    `,
    },
    {
      id: 53,
      ItemName: "Chopped",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Romaine, red onion, blue cheese crumbles & candied pecans.
    `,
    },
    {
      id: 54,
      ItemName: "Side Salad",
      MenuItemType: ItemType.Lunch,
      ItemCost: 4.5,
      ItemDesc: `
    Choice of Caesar, House or Chopped.
    `,
    },
    {
      id: 55,
      ItemName: "Salad Buffet",
      MenuItemType: ItemType.Lunch,
      ItemCost: [
        { OptionName: "As it's own", OptionValue: 8.5 },
        { OptionName: "Add to any meal", OptionValue: 5 },
      ],
    },
  ],

  SoupMenuItems: [
    {
      id: 56,
      ItemName: "Blue Crab Soup",
      MenuItemType: ItemType.Lunch,
      ItemCost: [
        { OptionName: "Cup", OptionValue: 4.5 },
        { OptionName: "Bowl", OptionValue: 7.5 },
      ],
      ItemDesc: `
    Creamy & Delicious.
    `,
    },
  ],

  KidMenuItems: [
    {
      id: 57,
      ItemName: "I Don't Like Fish",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Hand breaded chicken tenders.
    `,
    },
    {
      id: 58,
      ItemName: "I Don't Want Meat",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6,
      ItemDesc: `
    Grilled cheese sandwich.
    `,
    },
    {
      id: 59,
      ItemName: "I Don't Know",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Hamburger or Cheeseburger.
    `,
    },
    {
      id: 60,
      ItemName: "I Don't Care",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Corndog.
    `,
    },
    {
      id: 61,
      ItemName: "I Don't Want That",
      MenuItemType: ItemType.Lunch,
      ItemCost: 7,
      ItemDesc: `
    Fried Cod or Fried Shrimp.
    `,
    },
  ],

  DessertMenuItems: [
    {
      id: 62,
      ItemName: "Deep Fried Cheesecake",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Served hot & fresh with a scoop of vanilla ice cream and drizzled with chocolate sauce.
    `,
    },
    {
      id: 63,
      ItemName: "Bavarian Cream Stuffed Churros",
      MenuItemType: ItemType.Lunch,
      ItemCost: 6.5,
      ItemDesc: `
    Served hot & fresh rolled in cinnamon sugar with a scoop of vanilla ice cream & drizzled with caramel.
    `,
    },
    {
      id: 64,
      ItemName: "Killer Key Lime Pie",
      MenuItemType: ItemType.Lunch,
      ItemCost: 5.5,
      ItemDesc: `
    Tart & fresh taste of the coast.
    `,
    },
  ],

  HouseSpecialityItems: [
    {
      ItemName: "Triple B Sandwich",
      ItemDesc: `
    Brisket and Brie on Brioche.  Tender Angus Brisket hickory smoked, topped with creamy brie, horseradish mayo and caramelized onions.  Your choice of a side.
    `,
    },
    {
      ItemName: "Vietnamese Banh Mi",
      ItemDesc: `
    Our take on this Vietnamese classic.  Smoked pork simmered in our Mandarin BBQ sauce (char siu) on our light crusty french roll, topped with soy sauce, mayo, thinly sliced jalapeno, cucumber, daikon radish/carrot pickle and cilantro.
    `,
    },
    {
      ItemName: "Pulled Pork",
      ItemDesc: `
    House rubbed pork shoulder hickory smoked slow and low.  Topped  with your choice of Cantonese BBQ (bold), Mandarin BBQ (sweet) and KC BBQ all made in house, comes with your choice of house slaw or wasabi slaw to top it off.
    `,
    },
  ],
};
