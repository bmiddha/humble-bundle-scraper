const fs = require('fs');
const download = require('download');

download('http://unicorn.com/foo.jpg', 'dist').then(() => {
    console.log('done!');
});

download('http://unicorn.com/foo.jpg').then(data => {
    fs.writeFileSync('dist/foo.jpg', data);
});

download('unicorn.com/foo.jpg').pipe(fs.createWriteStream('dist/foo.jpg'));

Promise.all([
    'unicorn.com/foo.jpg',
    'cats.com/dancing.gif'
].map(x => download(x, 'dist'))).then(() => {
    console.log('files downloaded!');
});