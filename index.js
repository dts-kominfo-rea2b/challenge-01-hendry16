// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let firstUser = {};
let secondUser = {};

// constructor function for user's name, gender, age, email, isHavePet
function user(name, gender, age, email, iHP){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.favoriteColor = function(color){
        this.favoriteColor = color;
    }
    this.isHavePet = iHP;
    this.favoriteRestaurant = function(favRest){
        this.favoriteRestaurant = new Set(favRest);
    }
}
firstUser = new user("Monika", "Female", 17, "monica@dingdong.com", "Yes");
secondUser = new user("Wendy", "Male", 23, "wendy@dingdong.com", "No");

firstUser.favoriteColor([['Yellow', 'Pink', 'White', 'Purple']]);
secondUser.favoriteColor([['Blue', 'Black', 'Grey']]);

firstUser.favoriteRestaurant(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi']);
secondUser.favoriteRestaurant(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy']);

firstUser.education = [
    {'name' : 'SD 01', 'city' : 'Jakarta', 'graduate' : 2016},
    {'name' : 'SMP 02', 'city' : 'Jakarta', 'graduate' : 2019},
    {'name' : 'SMA 03', 'city' : 'Tangerang'}
];

secondUser.education = [
    {'name' : 'SD 02', 'city' : 'Jakarta', 'graduate' : 2010},
    {'name' : 'SMP 03', 'city' : 'Bogor', 'graduate' : 2013},
    {'name' : 'SMA 03', 'city' : 'Surabaya', 'graduate' : 2016},
    {'name' : 'Universitas Maju', 'city' : 'Tangerang'}
];


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [
    firstUser,
    secondUser
];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};