import express from 'express';
import { FriendController } from '../controller/FriendController';


export const friendsRouter = express.Router();

const friendController = new FriendController();

friendsRouter.post('/create', friendController.makeFriendsShip)
friendsRouter.delete('/delete/:id', friendController.unfriend)