const faker = require('faker');
const fs = require('fs');

const generateData = (path, start) => {
  let i = 10000000 - start;
  const limit = i - 1000000;
  const writer = fs.createWriteStream(path);
  writer.write('photoTitle,photoDate,photoDescription,src,width,height\n');

  const write = () => {
    let ok = true;

    do {
      const photoTitle = `${faker.commerce.productName()}.`;
      const photoDate = `${faker.date.month()} ${Math.floor(Math.random() * 28 + 1)}. ${Math.floor(Math.random() * 9 + 2010)}`;
      const photoDescription = faker.commerce.productMaterial();
      const num = Math.round(Math.random() * 3300 + 1);
      const src = `https://source.unsplash.com/collection/597305/480x480/?sig=${num}`;

      const samplePhoto = `${photoTitle},${photoDate},${photoDescription},${src},400,400\n`;

      i--;
      if (i === limit) {
        writer.write(samplePhoto);
        console.log(path, 'GENERATED');
      } else {
        ok = writer.write(samplePhoto);
      }
    } while (i > limit && ok);
    if (i > limit) {
      writer.once('drain', write);
    }
  };

  write();
};

generateData('database/csv/images1.csv', 0);
generateData('database/csv/images2.csv', 1000000);
generateData('database/csv/images3.csv', 2000000);
generateData('database/csv/images4.csv', 3000000);
generateData('database/csv/images5.csv', 4000000);
generateData('database/csv/images6.csv', 5000000);
generateData('database/csv/images7.csv', 6000000);
generateData('database/csv/images8.csv', 7000000);
generateData('database/csv/images9.csv', 8000000);
generateData('database/csv/images10.csv', 9000000);
