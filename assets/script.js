var ingredients = $("#ingredients");
var donateList = $("#donateList");
var firstname = $("#fname");
var AmountDonated = document.getElementById('AmtDonated');
var AmountDue = document.getElementById('Due');
var productPrice = 0;
var total = 0;
let createImage1 = document.createElement('img');


// clear local storage btn
$("[id=ClearStorage]").on("click", localStorage.clear());


//fetch request for Anime of the week section 
const base_url = "https://api.jikan.moe/v3";
function Anime(event) {
    fetch(`${base_url}/manga/1/characters`)
        .then(res => res.json())
        .then(data => //console.log(data)
        {
            var characterImage = data.characters[0].image_url;
            //console.log(characterImage);
            var charactername = data.characters[0].name;

            createImage1.src = characterImage;
            document.getElementById('CharacterName').append(charactername);
            document.getElementById('CharacterName').append(createImage1);
            //console.log(charactername);
        })
}


//.then(updateDom)
//.catch(err=>console.warn(err.message));

//call fuction automatically
Anime();














//calcuate total for buy section
function calculateTotal() {
    var treatselection = document.querySelector('#code');
    var item = treatselection.options[treatselection.selectedIndex].value;

    var Quantity = document.querySelector('#Qnty');
    var Amount = Quantity.options[Quantity.selectedIndex].value;
    // if statements to go through options and assign pricing
    if (item == "Totoro") {
        productPrice = 29.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "DemSlyCake") {
        productPrice = 49.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "SlrMoon") {
        productPrice = 29.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "Pokemon") {
        productPrice = 39.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "DemSlyCakeKyo") {
        productPrice = 19.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "MyHero") {
        productPrice = 49.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "Naruto") {
        productPrice = 59.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "Goku") {
        productPrice = 39.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "Neverland") {
        productPrice = 29.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "SwdArt") {
        productPrice = 15.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "MyHeroKats") {
        productPrice = 39.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "DeathNote") {
        productPrice = 19.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "SwdArtFondant") {
        productPrice = 39.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "AttackLevi") {
        productPrice = 69.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "DrgnCupcakes") {
        productPrice = 15
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "Assassin") {
        productPrice = 49.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "TodorokiDrink") {
        productPrice = 10.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "DeadlyDrink") {
        productPrice = 12.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "StrawberryDrink") {
        productPrice = 9.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
    if (item == "NarutoDrink") {
        productPrice = 10.99
        total = (productPrice * Amount);
        console.log(total);
        AmountDue.textContent = ("$" + total);
    }
}





//donate button
$("[id=DonBtn]").on("click", function (event) {

    var nameInput = $('<li>');
    nameInput.text(firstname.val() + " $" + AmountDonated.value);
    nameInput.attr('id', 'userinput1');
    donateList.append(nameInput);

})

var menu = [

    {
        color: "Whipped Icing",
        series: "Demon Slayer Kyojuro Theme",
        food: "Vanilla Cake",
        //0

    },
    {
        color: "Whipped Icing with Sprinkles",
        series: "My Hero Academia Deku Topper",
        food: " Vanilla Cake",
        //1
    },
    {
        color: "Orange and White",
        series: "Naruto",
        food: "Cupcakes",
        // 2
    },
    {
        color: "White and Red Ganache",
        series: "Naruto Themed Toppers",
        food: "Vanilla Cake",
        // 3
    },
    {
        color: "Pink ButterCream Icing",
        series: "Promised Neverland Topper",
        food: "Confetti Cake",
        // 4
    },
    {
        color: "Black and Red Fondant",
        series: "Death Note Themed",
        food: "Chocolate Cake",
        // 5
    },
    {
        color: "Whipped Base Layer & Fondant",
        series: "Sailor Moon Themed",
        food: "Vanilla Cake",
        // 6
    },
    {
        color: "Green Icing With Ganache Drizzle",
        series: "Demon Slayer Themed Topper",
        food: "Marble Cake",
        // 7 DONE
    },
    {
        color: "Blue Fondant",
        series: "Dragon Ball Z Themed",
        food: "Vanilla Cake",
        // 8
    },
    {
        color: "Black and Red Fondant",
        series: "Sword Art Online Topper",
        food: "Confetti Cake",
        // 9
    },
    {
        color: "Black and Orange Fondant With Buttercream Icing",
        series: "My Hero Academia Katsuki Topper",
        food: "Chocolate Cake",
        // 10
    },
    {
        color: "Red White and Blue Fondant",
        series: "Pokemon Themed",
        food: "Confetti Cake",
        // 11
    },
    {
        color: "Black and Gold Icing ",
        series: "Sword Art Online Design",
        food: " Chocolate Cake",
        // 12

    },
    {
        color: "Blue Icing",
        series: "Bleach Themed",
        food: "Vanilla Cake",
        // 13
    },
    {
        color: "Blue and White Whipped Icing ",
        series: "Attack on Titan Levi Topper",
        food: "Coffee Cake",
        // 14
    },
    {
        color: "Green, Blue, Orange, and Yellow With Multiple Design Options",
        series: "Dragon Ball Z",
        food: "Cupcakes: White or Chocolate ",
        // 15
    },
    {
        color: "White and Red",
        series: "One Peace Themed",
        food: "Marble Cake",
        // 16
    },
    {
        color: "Butter Cream Icing",
        series: "Assassination Classroom Design",
        food: "Vanilla Cake",
        // 17
    },
    {
        color: "Pink Icing",
        series: "Kirby Themed",
        food: "Macaron",
        // 18
    },
    {
        color: "Butter Cream Icing",
        series: "My Neighbor Totoro Topper",
        food: "Marble Cake",
        // 19 
    },
    {
        color: "Rasperry Cream",
        series: "My Hero Academia Beverage",
        food: "Refreshing iced soda",
        // 20
    },
    {
        color: "Island Tropical Mint",
        series: "Promised Neverland",
        food: "Fresh sparkling water",
        // 21
    },
    {
        color: "Vanilla whipped cream topping",
        series: "SpyXFamily Dessert",
        food: "Strawberry Smoothie Blend",
        // 22
    },

    {
        color: "Soft Vanilla Topping",
        series: "Naruto/Jirayah Coffee",
        food: "Spicy Cinnamon Cuppacino Blend",
        // 23 DONE
    },

]
//buttons for each card 
$("[id=ToroBtn]").on("click", function (event) {
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

$("[id=DemonBtn]").on("click", function (event) {
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

$("[id=SailorBtn]").on("click", function (event) {
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
$("[id=PokeBtn]").on("click", function (event) {
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

$("[id=KyojBtn]").on("click", function (event) {
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

$("[id=MyheroBtn]").on("click", function (event) {
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

$("[id=NarutoBtn]").on("click", function (event) {
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

$("[id=GokuBtn]").on("click", function (event) {
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

$("[id=PromisedBtn]").on("click", function (event) {
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

$("[id=SwordBtn]").on("click", function (event) {
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

$("[id=KatsukiBtn]").on("click", function (event) {
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

$("[id=DeathBtn]").on("click", function (event) {
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

$("[id=SwordFondantBtn]").on("click", function (event) {
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

$("[id=AOTBtn]").on("click", function (event) {
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

$("[id=DragonBtn]").on("click", function (event) {
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

$("[id=AssassinBtn]").on("click", function (event) {
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

$("[id=ShotoTodorokiDrinkBtn]").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[20].food);
    anime.text(menu[20].series);
    hue.text(menu[20].color);


    munchies.attr('id', 'the-deets');
    anime.attr('id', 'the-deets');
    hue.attr('id', 'the-deets');

    ingredients.append(munchies).append(anime).append(hue);
})

$("[id=NeverlandDrinkBtn]").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[21].food);
    anime.text(menu[21].series);
    hue.text(menu[21].color);


    munchies.attr('id', 'the-deets');
    anime.attr('id', 'the-deets');
    hue.attr('id', 'the-deets');

    ingredients.append(munchies).append(anime).append(hue);
})

$("[id=SpyxFamilyDrinkBtn]").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[22].food);
    anime.text(menu[22].series);
    hue.text(menu[22].color);


    munchies.attr('id', 'the-deets');
    anime.attr('id', 'the-deets');
    hue.attr('id', 'the-deets');

    ingredients.append(munchies).append(anime).append(hue);
})

$("[id=NarutoDrinkBtn]").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    ingredients.children().remove();
    var munchies = $('<li>');
    var anime = $('<li>');
    var hue = $('<li>');

    munchies.text(menu[23].food);
    anime.text(menu[23].series);
    hue.text(menu[23].color);


    munchies.attr('id', 'the-deets');
    anime.attr('id', 'the-deets');
    hue.attr('id', 'the-deets');

    ingredients.append(munchies).append(anime).append(hue);
})

$("[id=TotalBtn]").on("click", calculateTotal)