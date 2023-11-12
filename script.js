// Declare the arrays for each category

const colors = [
    "#FF0000", // Red
    "#FFA500", // Orange
    "#FFFF00", // Yellow
    "#008000", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#EE82EE", // Violet
    "#FFC0CB", // Pink
    "#A52A2A", // Brown
    "#800000", // Maroon
    "#FFD700", // Gold
    "#00FFFF", // Cyan
    "#40E0D0", // Turquoise
    "#E6E6FA", // Lavender
    "#FF00FF", // Magenta
    "#FFDAB9"  // Peach
];

const gender = [
    "male",
    "female"
];

const adj = [
    "adventurous",
    "bossy",
    "caring",
    "compassionate",
    "cheerful",
    "defiant",
    "entertaining",
    "enigmatic",
    "forgiving",
    "gullible",
    "helpful",
    "intelligent",
    "joyous",
    "kind",
    "loyal",
    "moody",
    "mysterious",
    "noisy",
    "opinionated",
    "popular",
    "quiet",
    "rich",
    "silly",
    "thoughtful",
    "unlucky",
    "valiant",
    "wise",
    "youthful",
    "zealous"
];

const age = [
    "infant",
    "toddler",
    "child",
    "kid",
    "tween",
    "teen",
    "young adult",
    "adult",
    "middle-aged",
    "elderly"
];

const hair_color = [
    "fiery red",
    "orange",
    "sunny yellow",
    "golden",
    "verdant green",
    "turquoise",
    "ocean blue",
    "sky blue",
    "night blue",
    "purple",
    "raven black",
    "brown",
    "strawberry blonde",
    "silvery gray"
];

const hair_adj = [
    "sticks out in all directions",
    "a voluminous mane",
    "styled with care",
    "silky and straight",
    "wavy",
    "very long",
    "short and choppy",
    "unkempt and messy"
];

const eyes_color = [
    "brown",
    "black",
    "gray",
    "amber",
    "hazel",
    "green",
    "blue",
    "turquoise",
    "yellow-colored",
    "violet-hued",
    "a color that changes with each mood"
];

const eyes_adj = [
    "huge",
    "squinty",
    "cold",
    "laughing",
    "glittering",
    "hidden behind sunglasses",
    "terrified",
    "cloudy",
    "twinkling"
];

const height = [
    "towers over everyone else",
    "quite tall",
    "tall",
    "sort of tall",
    "average height",
    "kind of short",
    "short",
    "really short",
    "half the height of everyone else"
];

const clothes = [
    "artsy and unique",
    "eccentric",
    "biker style",
    "bohemian clothing",
    "businessy and formal",
    "casual outfits",
    "classic and timeless",
    "steampunk",
    "flamboyant and vibrant",
    "playful",
    "loungewear",
    "rural clothing",
    "urban clothing",
    "nerdy",
    "trendy",
    "old-fashioned",
    "modern",
    "cowboy-esque, Wild West style",
    "adventurous"
];

const bonus = [
    "wears a mask, representing the hidden layers of this person's personality",
    "always holding a book",
    "loves animals",
    "forever hungry for something",
    "always drinking coffee",
    "enjoys playing sports",
    "can see the future",
    "likes cryptography",
    "forever reading minds",
    "finds everything funny",
    "hilarious",
    "scared of everything",
    "hates bananas",
    "builds websites",
    "draws people",
    "designs games",
    "full of practical jokes"
];


// random number generator
function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};


// pick random element from an array
function randelem(arr) {
    return arr[randint(0, arr.length - 1)];
};


// HTML elements
let h_colors = document.getElementsByClassName("color");
let h_gen = document.getElementById("gender");
let h_adj = document.getElementById("adjective");
let h_age = document.getElementById("age");
let h_hair = document.getElementById("hair");
let h_eyes = document.getElementById("eyes");
let h_height = document.getElementById("height");
let h_clothes = document.getElementById("clothes");
let h_bonus = document.getElementById("bonus");
let h_bonus1 = document.getElementById("bonus1");
let h_bonus2 = document.getElementById("bonus2");


// create the colors array
function generate_colors() {
    let main_i = randint(0, colors.length - 1); // generate the first color
    let accent_i, accent2_i

    if (main_i > colors.length - 3) { // if it's near the end
        accent_i = main_i - randint(1, 2); // a color 1-2 colors away
    } else if (main_i < 2) { // if it's near the beginning
        accent_i = main_i + randint(1, 2); // a color 1-2 colors away
    } else {
        accent_i = main_i + randint(1, 2);
    };

    let b_or_w = randint(0, 1)
    if (b_or_w == 0) {
        accent2_i = "#000000";
    } else {
        accent2_i = "#FFFFFF";
    };

    return [colors[main_i], colors[accent_i], accent2_i]
};


// change the colors in the color palette
function change_colors(colors_array) {
    for (
        let i = 0;
        i < h_colors.length;
        i++
        ) {
            console.log(i);
            h_colors[i].style.backgroundColor = colors_array[i];
        };
};


// change the HTML elements!
function change_HTML() {
    change_colors(generate_colors())
    h_gen.innerHTML = randelem(gender);
    h_adj.innerHTML = randelem(adj);
    h_age.innerHTML = randelem(age);
    h_hair.innerHTML = randelem(hair_color) + "; " + randelem(hair_adj);
    h_eyes.innerHTML = randelem(eyes_color) + "; " + randelem(eyes_adj);
    h_height.innerHTML = randelem(height);
    h_clothes.innerHTML = randelem(clothes);
    h_bonus.innerHTML = randelem(bonus);
    h_bonus1.innerHTML = randelem(bonus);
    h_bonus2.innerHTML = randelem(bonus);
};