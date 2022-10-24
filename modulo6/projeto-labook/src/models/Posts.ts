enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }


export class Posts {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private created_at: Date,
        private author_id: string
    ) { }


    getId(){
        return this.id
    }

    getPhoto(){
        return this.photo
    }

    getDescription(){
        return this.description
    }

    getType(){
        return this.type
    }

    getCreatedAt(){
        return this.created_at
    }

    getAuthorId(){
        return this.author_id
    }


    setId(newId: string){
        this.id = newId
    }

    setPhoto(newPhoto: string){
        this.photo = newPhoto
    }

    setDescription(newDescription: string){
        this.description = newDescription
    }

    setTypes(newType: POST_TYPES){
        this.type = newType
    }

    setCreatedAt(newCreatedAt: Date){
        this.created_at = newCreatedAt
    }

    setAuthorId(newAuthorId: string){
        this.author_id = newAuthorId
    }

 }
    