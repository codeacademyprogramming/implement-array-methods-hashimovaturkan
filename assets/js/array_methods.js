// const array = [1,2,3,4,5];
const arrayOfUsers = [
    {
        firstname: 'Malak',
        lastname: 'Mukhtarli'
    },
    {
        firstname: 'Turkan',
        lastname: 'Hashimova'
    }
]

const result = arrayOfUsers.map((user) => {
    user.firstname = 'DEFAULT';
    // return user;
    return undefined
});
console.log(result);
console.log(arrayOfUsers);
// console.log(result);
// console.log(array);



function customConcat() {

}

customConcat([12, 23, 24, 234], [123, 123, 121, 4214]); // [12,23,24,234, 123,123,121,4214]
customConcat(1, 23, 4, 5, 6, [123, 214, 421, 41]); // [1, 23, 4, 5, 6, 123, 214, 421, 41]
customConcat(1, 23, 4, 5, 6, 123, 214, 421, 41); // [1, 23, 4, 5, 6, 123, 214, 421, 41]