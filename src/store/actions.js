// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
export function ANameclick({commit}, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'
    return commit ('ANameclick', name)
}

export function BNameclick({commit}, name) {
    return commit ('BNameclick', name)
}
export function Name({commit}, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'
return commit ('Name', name)
}

// ES6精简写法
// export const modifyAName = ({commit},name) => commit('modifyAName', name)
