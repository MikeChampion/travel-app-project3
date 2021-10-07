const db = require('./connection');
const { User, Activity } = require('../models');

db.once('open', async () => {

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
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

db.once('open', async () => {

    await Activity.deleteMany();

await Activity.create ({    
when: "10/23/21",
where: "Hollywood",
description: "Movie Premier"
});

await Activity.create ({    
    when: "10/30/21",
    where: "St. Louis",
    description: "Halloween party"
    });

console.log ('activities seeded')

process.exit ();

});