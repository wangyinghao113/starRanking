// 提交 mutations是更改Vuex状态的唯一合法方法
export const ANameclick = (state, name) => { // A组件点击更改餐馆名称为 A餐馆
    state.infoName = name // 把方法传递过来的参数，赋值给state中的resturantName
}
export const BNameclick = (state, name) => { // B组件点击更改餐馆名称为 B餐馆
    state.infoName = name
}
export const Name = (state, name) => { // B组件点击更改餐馆名称为 B餐馆
    state.nickName = name
}

export const starList = (state,name)=>{
  
   
    state.starData = name
}
