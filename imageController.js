const mongoose = require('mongoose');
const Male = mongoose.model('Male');
const Female = mongoose.model('Female');

exports.getImages = async (req, res) => {
  try {
    const index = req.query.index;
    const indexHalf = Math.floor(index || 0);
    const males = await Male.where('index')
      .gte(indexHalf)
      .lt(indexHalf + 50);
    const females = await Female.where('index')
      .gte(indexHalf)
      .lt(indexHalf + 50);

    const combined = [];
    males.forEach((male, i) => {
      combined.push(male);
      combined.push(females[i]);
    });
    const formattedPeople = combined.map((person, i) => {
      return {
        id: parseInt(index) + parseInt(i),
        url: person.url,
        source: person.source,
        name: person.name,
        details: person.details
      };
    });

    console.log('images found:', formattedPeople.length);
    res.json(formattedPeople);
  } catch (error) {
    console.log('error finding images:');
    console.log(error);
    res.end('fail');
  }
};
