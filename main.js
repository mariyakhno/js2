// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let fruits = ['apple', 'avocado', 'apricot', 'banana', 'kiwi', 'lemon', 'mango', 'grape', 'cherry', 'lime'];
// console.log (fruits [0] );
// console.log (fruits [1] );
// console.log (fruits [2] );
// console.log (fruits [3] );
// console.log (fruits [4] );
// console.log (fruits [5] );
// console.log (fruits [6] );
// console.log (fruits [7] );
// console.log (fruits [8] );
// console.log (fruits [9] );


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let description1 = {title:'Harry Potter and Sorcerer Stone', pageCount:464, genre:'novel'};
// let description2 = { title: 'The Great Gatsby', pageCount:192, genre:'novel' };
// let description3 = { title: ' The Lord of the Rings', pageCount:1178, genre:'fantasy'};
// console.log(description1)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let descrip1 = {title:'Harry Potter and Sorcerer Stone', pageCount:464, genre:'novel', author:[{'J.K.Rowling'}]};
let descrip2 = { title: 'The Great Gatsby', pageCount:192, genre:'novel', author:[{' F. Scott Fitzgerald'}]};
let descrip3 = { title: ' The Lord of the Rings', pageCount:1178, genre:'fantasy', author: [{'J.Tolkien'}]};




// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'mari',
        username: 'mari33',
        password: '12345pm'
    },
    {
        name: 'marina',
        username: 'mari35',
        password: '1235645pm'
    },
    {
        name: 'oleg',
        username: 'oleg33',
        password: '12675pm'
    },
    {
        name: 'daniel',
        username: 'daniel33',
        password: '12985pm'
    },
    {
        name: 'dan',
        username: 'danl33',
        password: '67985pm'
    },
    {
        name: 'lili',
        username: 'lilil33',
        password: '4685pm'
    },
    {
        name: 'yuliya',
        username: 'yuliya73',
        password: '12785pm'
    },
    {
        name: 'emi',
        username: 'emil53',
        password: '12978pm'
    },
    {
        name: 'ann',
        username: 'annl33',
        password: '568985pm'
    },
    {
        name: 'val',
        username: 'val73',
        password: '17285pm'
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);