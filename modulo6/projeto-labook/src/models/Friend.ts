export class Friend{
    constructor(
       private id_user: string,
       private  id_friend: string
    ){

    }

    getId(){
        return this.id_user
    }

    getIdFriend(){
        return this.id_friend
    }

    setId(newId: string){
        this.id_user = newId
    }

    setIdFriend(newIdFriend: string){
        this.id_friend = newIdFriend
    }
}
