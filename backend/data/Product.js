const products = [
    {
      name: "Bread Pudding",
      imageUrl:
        "https://therecipecritic.com/wp-content/uploads/2021/09/crossaintbreadpudding.jpg",
      description:
      "Sugar, milk, and a thickening agent such as cornstarch, gelatin, eggs, rice or tapioca to create a sweet, creamy dessert",
      price: 12.99,
      countInStock: 10,
    },
    {
      name: "Avocado Toast",
      imageUrl:
        "https://www.cookinwithmima.com/wp-content/uploads/2021/09/Avocado-Toast-With-Eggs.jpg",
      description:
        "Mashed avocado spread over crusty whole-wheat bread, finished with olive oil, red pepper flakes, and flaky sea salt and boiled egg ",
      price: 19.99,
      countInStock: 10,
    },
    {
      name: "French Toast",
      imageUrl:
        "https://natashaskitchen.com/wp-content/uploads/2021/03/French-Toast-8.jpg",
      description:
        "Bread is dipped into eggs and seasonings and then fried to a golden brown",
      price: 10.99,
      countInStock: 10,
    },
    {
      name: "Croissant Toast",
      imageUrl:
        "https://www.culinaryhill.com/wp-content/uploads/2021/03/Croissant-French-Toast-Culinary-Hill-LR-07.jpg",
      description:
        "Yeast leavened dough that has been laminated with butter, in multiple layers",
      price: 10.99,
      countInStock: 10,
    },
    {
        name: "Diner Double",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-2.jpeg",
        description:
          "8 oz. Steakburger. Double Patty with American Cheese and our Signature Sauce",
        price: 13.99,
        countInStock: 10,
    },
    {
        name: "Lasagna",
        imageUrl:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
        description:
          "A baked Italian dish consisting of wide strips of pasta cooked and layered with meat or vegetables, cheese, and tomato sauce",
        price: 20.99,
        countInStock: 10,
    },
    {
        name: "Pasta",
        imageUrl:
          "https://assets.bonappetit.com/photos/5f48ef0f683772f4cb97e816/6:9/w_1312,h_1968,c_limit/Basically-ZucchiniPasta05.jpg",
        description:
          "A baked Italian dish consisting of wide strips of pasta cooked and layered with meat or vegetables, cheese, and tomato sauce",
        price: 21.99,
        countInStock: 10,
    },
    {
        name: "Salad",
        imageUrl:
          "https://www.washingtonpost.com/resizer/do_86Rt3d3Dv_96lQ-5LfNIdaq4=/arc-anglerfish-washpost-prod-washpost/public/M6SARCQFXEI6ZM6EYRRLD3OPZA.jpg",
        description:
          "Raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients",
        price: 13.99,
        countInStock: 10,
    },
    {
        name: "Cuban Sandwich",
        imageUrl:
          "https://www.seriouseats.com/thmb/2OxF-UNLyWo2qMLSc6unSi7yH5o=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20160623-cubano-roast-pork-sandwich-recipe-19-57695d21e77947538db375d1d30b4bdf.jpg",
        description:
          "Roast pork layered with ham (yes, that's two kinds of pig), Swiss cheese, pickles and yellow mustard makes for an addictive combo on its own",
        price: 13.99,
        countInStock: 10,
    },
    {
        name: "Godzilla Milkshake",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-3.jpeg",
        description:
          "Blended with banana & mint chocolate chip ice cream, drizzled with melted chocolate & topped with more ice cream & Milo",
        price: 6.99,
        countInStock: 10,
    },
    {
        name: "Country Delight",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-4.jpeg",
        description:
          "English muffin, cut in half, toasted, and topped with Canadian bacon, poached eggs, and classic French Hollandaise sauce",
        price: 20.99,
        countInStock: 10,
    },
    {
        name: "Egg Attack",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-5.jpeg",
        description:
          "Bacon, Cheddar Cheese, Eggs, Beef",
        price: 22.99,
        countInStock: 10,
    },
    {
        name: "Oreo Dream",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-6.jpeg",
        description:
          "Chocolate ice cream, chocolate syrup, whipped cream, vanilla ice cream, oreo cookies",
        price: 18.99,
        countInStock: 10,
    },
    {
        name: "Bacon Overflow",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-7.jpeg",
        description:
          "Bacon, Eggs, Bread, Cheese",
        price: 8.99,
        countInStock: 10,
    },
    {
        name: "American Classic",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-8.jpeg",
        description:
          "Dill pickle chips, sliced onions and tomato, crisp lettuce leaves, ketchup and mayo",
        price: 12.99,
        countInStock: 10,
    },
    {
        name: "Quarantine Buddy",
        imageUrl:
          "https://afsarsoft.github.io/124-menu-v1/images/item-9.jpeg",
        description:
          "Refillable Milkshake",
        price: 16.99,
        countInStock: 10,
    },
    {
        name: "Mimosa",
        imageUrl:
          "https://www.simplyrecipes.com/thmb/Pnl4onjUO7FWANCnpdVWeWW5iy0=/735x0/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__04__Orange-Mimosa-LEAD-3-993b1a0de5e2479c9e1a8b8a5330e1e0.jpg",
        description:
          "Champagne and citrus juice, orange juice",
        price: 7.99,
        countInStock: 10,
    },
    {
        name: "Iced Coffee",
        imageUrl:
        "https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2.jpg",
        description:
          "Simple syrup, cream, instant coffee, sweetened condensed milk, ",
        price: 4.99,
        countInStock: 10,
    },
    {
        name: "Beer",
        imageUrl:
        "https://assets.newatlas.com/dims4/default/0cc6699/2147483647/strip/true/crop/1999x1333+0+56/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F88%2Fb2%2F8b138bdf42e798306be28558f48a%2Fdepositphotos-31940281-l-2015.jpg",
        description:
          "Heineken, Coors Light, Bud Light, Miller Light",
        price: 4.99,
        countInStock: 10,
    }
    
    
  
  ];
  
  module.exports = products;
  