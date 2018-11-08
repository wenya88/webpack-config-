require('babel-runtime/regenerator');//识别es8
require('./main.css');
require('./index.html');

const prom=new Promise((resolve,reject)=>{
    let mRandom=Math.random();
    if(mRandom<0.5){
        resolve(mRandom);
    }else{
        reject(mRandom)
    }
});
async function fun(){
    let pro=await prom;
    return pro
}
fun().then(val=>{
    console.log('resolve:'+val)
}).catch(val=>{
    console.log('reject:'+val)
})