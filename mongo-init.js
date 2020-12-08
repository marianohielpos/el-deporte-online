db.createUser({
  user: 'app',
  pwd: 'password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

db.product.save(
    {
      name: 'Pelota',
      short_description: 'Pelota de futbol 5',
      long_description: 'Una pelota muy buena de marca Adidas',
      show_catalog: true,
      image: 'mock_image/pelota.jpeg'
    });

