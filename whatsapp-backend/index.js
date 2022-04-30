//importing
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import http from 'http'
//socket io vala part
import { Server } from "socket.io";



///////////////////////////////////////////////////////////
//app config
const app = express()
const port = process.env.PORT || 3001
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",//where our frontend is running
      methods: ["GET", "POST"],
    },
  });

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database: 'dbms',
});


io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
        console.log("a message was sent = ",data.MESSAGE_text);
        socket.to(4).emit("receive_message", data);
    });

    // socket.on("user_clicked",(data)=>{
    //     socket.emit("user_clickedd",data);
    // })
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });


// app.post('/create',(req,res)=>{
//     const message= req.body.message;
//     const messegeSender = req.body.loggedinUser;
//     const messegeReceiver = req.body.contactID;
//     console.log(message+"   "+messegeSender+"  "+messegeReceiver);
//     const datetime=new Date().toISOString().split("T");
//     const dt = datetime[0]+" "+datetime[1].substring(0,8);
//     db.query("INSERT INTO message (idMESSAGE,MESSAGE_sent_time,SENDER_id,MESSAGE_text) VALUES (?,?,?,?)",[1,dt,messegeSender,message],(err,result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("message details inserted into message");
//         }
//     });
//     db.query("INSERT INTO normal_chat (MESSAGE_idMESSAGE,MESSAGE_RECIVER_id,MESSAGE_SENDER_id) VALUES (?,?,?)",[1,messegeReceiver,messegeSender],(err,result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("message details inserted into normal_chat");
//         }
//     });
// });


//SENDS list of users from DB to frontend(sidebar.js)
app.get('/users',(req,res)=>{
    db.query("SELECT * FROM user",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});
//SENDS list of messages from DB to frontend(sidebarChat.js)
app.get('/messages',(req,res)=>{
    db.query("SELECT idMESSAGE,MESSAGE_SENDER_id,MESSAGE_RECIVER_id,MESSAGE_text,MESSAGE_sent_time FROM dbms.message as m JOIN normal_chat as n on m.idMESSAGE = n.MESSAGE_idMESSAGE where n.MESSAGE_SENDER_id = 4 or n.MESSAGE_RECIVER_id = 4 ",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.get('/allmessages',(req,res)=>{
    db.query("SELECT * FROM dbms.message",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});
//middleware

//DB config

//????

//api routes
// app.get('/',(req,res)=>res.status(200).send('hello world'))

// //listen
 app.listen(port,()=>console.log(`Listening on localhost:${port}`));
 server.listen(3002, () => {
    console.log("socket SERVER RUNNING on ",3002);
  });