var ingredients = $("#ingredients")


var menu = [ 

    {
            color: "Orange",
            series: "Demon Slayer",
            food: "Cake",
            //0

        },
    {
            color: "Green",
            series: "My Hero Academia",
            food: "Cake",
        //1
        },
    {
            color: "Orange and White",
            series: "Naruto",
            food: "Cupcake",
        // 2
        },
    {
            color: "White and red",
            series: "Naruto",
            food: "Cake",
        // 3
        },
    {
            color: "Pink",
            series: "Promised Neverland",
            food: "Cake",
        // 4
        },
    {
            color: "Black and red",
            series: "Death Note",
            food: "Cake",
        // 5
        },
    {
            color: "White",
            series: "Sailor Moon",
            food: "Cake",
        // 6
        },
    {
            color: "Green",
            series: "Demon Slayer",
            food: "Cake",
        // 7 DONE
        },
    {
            color: "Blue",
            series: "Dragon Ball Z",
            food: "Cake",
        // 8
        },
    {
            color: "Black and red",
            series: "Sword Art Online",
            food: "Cake",
        // 9
        },
    {
            color: "Black and orange",
            series: "My Hero Academia",
            food: "Cake",
        // 10
        },
    {
            color: "Red white and blue",
            series: "Pokemon",
            food: "Cake",
        // 11
        },
    {
            color: "Black and gold",
            series: "Sword Art Online",
            food: "Cake",
            // 12

        },
    {
            color: "Blue",
            series: "Bleach",
            food: "Cake",
        // 13
        },
    {
            color: "Blue and white",
            series: "Attack on Titan",
            food: "Cake",
        // 14
        },
    {
            color: "Green, blue, orange, and yellow",
            series: "Dragon Ball Z",
            food: "Cupcake",
        // 15
        },
    {
            color: "White and red",
            series: "One Peace",
            food: "Cake",
        // 16
        },
    {
            color: "Yellow",
            series: "Assassination Classroom",
            food: "Cake",
        // 17
        },
    {
            color: "Pink",
            series: "Kirby",
            food: "Macaron",
        // 18
        },
    {
            color: "Brown",
            series: "My Neighbor Totoro",
            food: "Cake",
        // 19 DONE
        },
    ]

    $("[id=ToroBtn]").on("click", function(event)
    {
       event.stopPropagation();
       event.stopImmediatePropagation();
       ingredients.children().remove();

       var munchies = $('<li>');
       var anime = $('<li>');
       var hue = $('<li>');

       munchies.text(menu[19].food);
        anime.text(menu[19].series);
        hue.text(menu[19].color);

        
        munchies.attr('id', 'the-deets');
        anime.attr('id', 'the-deets');
        hue.attr('id', 'the-deets');
        
        ingredients.append(munchies).append(anime).append(hue);

   })

   $("[id=DemonBtn]").on("click", function(event)
   {
      event.stopPropagation();
      event.stopImmediatePropagation();

      ingredients.children().remove();
      var munchies = $('<li>');
      var anime = $('<li>');
      var hue = $('<li>');

      munchies.text(menu[7].food);
       anime.text(menu[7].series);
       hue.text(menu[7].color);

       
       munchies.attr('id', 'the-deets');
       anime.attr('id', 'the-deets');
       hue.attr('id', 'the-deets');

       ingredients.append(munchies).append(anime).append(hue);
  })

  $("[id=SailorBtn]").on("click", function(event)
   {
      event.stopPropagation();
      event.stopImmediatePropagation();

      ingredients.children().remove();
      var munchies = $('<li>');
      var anime = $('<li>');
      var hue = $('<li>');

      munchies.text(menu[6].food);
       anime.text(menu[6].series);
       hue.text(menu[6].color);

       
       munchies.attr('id', 'the-deets');
       anime.attr('id', 'the-deets');
       hue.attr('id', 'the-deets');

       ingredients.append(munchies).append(anime).append(hue);
  })
  $("[id=PokeBtn]").on("click", function(event)
  {
     event.stopPropagation();
     event.stopImmediatePropagation();

     ingredients.children().remove();
     var munchies = $('<li>');
     var anime = $('<li>');
     var hue = $('<li>');

     munchies.text(menu[11].food);
      anime.text(menu[11].series);
      hue.text(menu[11].color);

      
      munchies.attr('id', 'the-deets');
      anime.attr('id', 'the-deets');
      hue.attr('id', 'the-deets');

      ingredients.append(munchies).append(anime).append(hue);
 })

 $("[id=KyojBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[0].food);
     anime.text(menu[0].series);
     hue.text(menu[0].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=MyheroBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[1].food);
     anime.text(menu[1].series);
     hue.text(menu[1].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=NarutoBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[3].food);
     anime.text(menu[3].series);
     hue.text(menu[3].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=GokuBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[8].food);
     anime.text(menu[8].series);
     hue.text(menu[8].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=PromisedBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[4].food);
     anime.text(menu[4].series);
     hue.text(menu[4].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=SwordBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[9].food);
     anime.text(menu[9].series);
     hue.text(menu[9].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=KatsukiBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[10].food);
     anime.text(menu[10].series);
     hue.text(menu[10].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=DeathBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[5].food);
     anime.text(menu[5].series);
     hue.text(menu[5].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=SwordFondantBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[12].food);
     anime.text(menu[12].series);
     hue.text(menu[12].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=AOTBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[14].food);
     anime.text(menu[14].series);
     hue.text(menu[14].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=DragonBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[15].food);
     anime.text(menu[15].series);
     hue.text(menu[15].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})

$("[id=AssassinBtn]").on("click", function(event)
 {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[17].food);
     anime.text(menu[17].series);
     hue.text(menu[17].color);

     
     munchies.attr('id', 'the-deets');
     anime.attr('id', 'the-deets');
     hue.attr('id', 'the-deets');

     ingredients.append(munchies).append(anime).append(hue);
})