import mongoose from "mongoose";
import Message from "./Message";
import User from "./User";
import Video from "./Video";

export default interface Conversation {
    _id?: mongoose.Types.ObjectId
    conversationLink: string
    users: User[]
    messages: Message[]

    //constructor(conversationLink: string, users: User[], messages: Message[]){
   //         this.conversationLink = conversationLink
    //        this.users = users
    //        this.messages = messages
    //}
}