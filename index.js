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
    this.isHavePet = iHP;
}

// user's name, gender, age, email, iHP properties
firstUser = new user("Monica", "Female", 17, "monica@dingdong.com", true);
secondUser = new user("Wendy", "Male", 23, "wendy@dingdong.com", false);


// user's favorite color
firstUser.favoriteColor = ['Yellow', 'Pink', 'White', 'Purple'];
secondUser.favoriteColor = ['Blue', 'Black', 'Grey'];


// user's favorite
firstUser.favoriteRestaurant = new Set(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi']);
secondUser.favoriteRestaurant = new Set(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy']);


// constructor function for user's education
function educationUser1(name, city, graduate){
    this.name = name;
    this.city = city;
    this.graduate = graduate;
}
let user1Edu1 = new educationUser1("SD 01", "Jakarta", 2016);
let user1Edu2 = new educationUser1("SMP 02", "Jakarta", 2019);
let user1Edu3 = new educationUser1("SMA 03", "Tangerang");


function educationUser2(name, city, graduate){
    this.name = name;
    this.city = city;
    this.graduate = graduate;
}
let user2Edu1 = new educationUser2("SD 02", "Jakarta", 2010);
let user2Edu2 = new educationUser2("SMP 03", "Bogor", 2013);
let user2Edu3 = new educationUser2("SMA 01", "Surabaya", 2016);
let user2Edu4 = new educationUser2("Universitas Maju", "Tangerang");


// assign user's education to be an array
firstUser.education = [user1Edu1, user1Edu2, user1Edu3];
secondUser.education = [user2Edu1, user2Edu2, user2Edu3, user2Edu4];


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