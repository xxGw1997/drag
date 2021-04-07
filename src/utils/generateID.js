//用于生成全局唯一id
let id = 0
export default function generateID(){
  return id++
}