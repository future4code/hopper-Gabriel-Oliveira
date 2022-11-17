import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { Friend } from "../models/Friend";
import { FriendDTO } from "../models/FriendDTO";

export class FriendController {
  async makeFriendsShip(req: Request, res: Response): Promise<void> {
    try {
      const { id_user, id_friend } = req.body;
      const friends: FriendDTO = {
        id_user,
        id_friend,
      };

      const friendBusiness = new FriendBusiness();
      await friendBusiness.makeFriendsShip(friends);

      res.status(200).send({ message: "Friendship made!" });
    } catch (error:any) {
        res.status(400).send(error.message);
    }
  }


  async unfriend(req: Request, res: Response):Promise<void>{
    try {
        const id: string = req.params.id

        const friendBusiness = new FriendBusiness();
        await friendBusiness.unfriend(id)
        
    } catch (error:any) {
        res.status(400).send(error.message);
    }
  }
}
