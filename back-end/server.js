// import
import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import Messages from './dbMessages.js'
import cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
  appId: '1125216',
  key: '7dbc8afb19b69f06c71b',
  secret: '1a599041f0a5102a2ea0',
  cluster: 'eu',
  useTLS: true,
})

// middleware
app.use(express.json())
app.use(cors())

// DB config
const connection_url =
  'mongodb+srv://admin:XzG6PIiNfL6Pv88w@cluster0.jme2z.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
  console.log('DB connected')

  const msgCollection = db.collection('messagecontents')
  const changeStream = msgCollection.watch()

  changeStream.on('change', (change) => {
    console.log('change', change)
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      })
    } else {
      console.log('error triggering Pusher')
    }
  })
})

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/api/messages/sync', (req, res) => {
  const dbMessage = req.body
  Messages.find(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/api/messages/new', (req, res) => {
  const dbMessage = req.body
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(`new message created \n ${data}`)
    }
  })
})

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`))
