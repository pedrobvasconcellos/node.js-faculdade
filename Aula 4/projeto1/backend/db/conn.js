//7//
import mongoose from 'mongoose';
async function main(){
    await mongoose.connect('mongodb://localhost:27017/projeto1')
    console.log('Conectou Mongoose'); 
}
main().catch((err) => console.log(err));
export default mongoose;
////