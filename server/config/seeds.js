const db = require('./connection');
const { User, Activity, Travel } = require('../models');

db.once('open', async () => {
 // ======== USERS ========
    await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  
    
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

    await User.create({
    firstName: 'Betty ',
    lastName: 'White',
    email: 'bwhite@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

 
// ========= ACTIVITIES ========

    await Activity.deleteMany();

await Activity.create ({    
when: "10/23/21",
where: "Hollywood",
description: "Movie Premier",

});

await Activity.create ({    
    when: "10/30/21",
    where: "St. Louis",
    description: "Halloween party",
    
    });

console.log ('activities seeded')

// ======== TRAVELS ========

await Travel.deleteMany();

await Travel.create ({
  who: "Robinson Family",
  how: "Plane",
  arrive: "8:00 am 10/22/21",
  depart: "9:00 am 10/28/21"

});

await Travel.create ({
  who: "Smith Family",
  how: "Car",
  arrive: "3:00 pm 10/21/21",
  depart: "12:00 pm 10/28/21"
})

console.log ('travels seeded')


process.exit ();

});