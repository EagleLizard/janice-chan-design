export default function constEnum(...keys){
  return keys.reduce((acc, curr)=>
    (acc[curr] = curr, acc)
  , {});
}