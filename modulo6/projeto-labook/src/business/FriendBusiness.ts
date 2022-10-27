import { FriendDataBase } from "../data/FriendsDataBase";
import { FriendDTO } from "../models/FriendDTO";


export class FriendBusiness{
    public async makeFriendsShip(friend: FriendDTO){

        const friendDataBase = new FriendDataBase();
        await friendDataBase.makeFriendsShip(friend)
    }

    public async unfriend(id: string){

        const friendDataBase = new FriendDataBase();
        await friendDataBase.unfriend(id)
    }
}