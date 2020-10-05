const express = require('express');
const app = express();
const favicon = require('serve-favicon')
const path = require('path')
// destruct uniq id with uuid 
const { v4 : uuidv4 } = require('uuid')

// add engine to render html
app.set('view engine', 'ejs')

//add favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.jpg')))

app.get('/', (req, res) => {

	res.redirect(`/${uuidv4()}`);
})

app.get('/:room',(req, res) => {
	
	res.status(200).render('room', { roomID : req.params.room })
})

const server = require('http').Server(app);


server.listen(3030);