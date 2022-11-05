import * as bcrypt from "bcryptjs";

export class HashManager {
  public hash = async (plainText: string) => {
    const count = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(count)
    return bcrypt.hash(plainText, salt)
  };


  public compare = async (plainText: string, cypherText: string) =>{
    return bcrypt.compare(plainText, cypherText)
  }
}
