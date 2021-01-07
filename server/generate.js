
var db = {
    customer: [
        {
            id: 1,
            name: 'shivam',
            password: 'sh1234',
            session: false
        },
        {
            id: 2,
            name: 'samad',
            password: 'sh1234',
            session: false
        },
        {
            id: 3,
            name: 'shaishav',
            password: 'sh1234',
            session: false
        },
        {
            id: 4,
            name: 'vamshi',
            password: 'sh1234',
            session: false
        }
    ],

    chef: [
        {
            id: 1,
            name: 'sanjeev',
            password: 'chef1',
            session: false
        },
        {
            id: 2,
            name: 'ranveer',
            password: 'chef1',
            session: false
        }
    ],
    food: [
        {
            id: 1,
            dish: 'Paneer Tikka',
            price: 199,
            chefID: 1
        },
        {
            id: 2,
            dish: 'Moong Daal',
            price: 149,
            chefID: 1
        },
        {
            id: 3,
            dish: 'butter chicken',
            price: 399,
            chefID: 1
        },
        {
            id: 4,
            dish: 'Malia Chicken',
            price: 299,
            chefID: 2
        },
        {
            id: 5,
            dish: 'Dal Tadka',
            price: 149,
            chefID: 2

        },
        {
            id: 6,
            dish: 'Paneer Masala',
            price: 299,
            chefID: 2
        }
    ],
    orders: [],
    drones: [
        {
            id: 1,
            busy: false,
            orderID: null
        },
        {
            id: 2,
            busy: false,
            orderID: null
        },
        {
            id: 3,
            busy: false,
            orderID: null
        },
    ]

}






jsonDataBase = JSON.stringify(db); //converting db object to josn format
console.log(jsonDataBase);         //printing on console to save the value in database.json