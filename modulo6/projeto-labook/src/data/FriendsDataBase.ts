import { Friend } from "../models/Friend";
import { BaseDataBase } from "./BaseDataBase";

const TABLE_FRIENDS = 'labook_friends'

export class FriendDataBase extends BaseDataBase{
    public async makeFriendsShip({id_user, id_friend}:any){
        await BaseDataBase.connection(TABLE_FRIENDS)
        .insert({
            id_user,
            id_friend
        })
    }

    public async unfriend (id: string){
        await BaseDataBase.connection(TABLE_FRIENDS)
        .where('id_user', id)
        .del()
    }
}