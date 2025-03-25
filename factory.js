function LinkedList () {
    let list = []
    function append(value) {
        if(list.length===0) {
            list.push(node(value))
        } else {
            list.push(node(value))
            list.at(-2).nextNode= list.at(-1).value
        }
    }
    function prepend(value) {
        if (list.length===0) {
            list.push(node(value))
        } else {
            list.unshift(node(value,list.at(0).value))
        }
    }
    return {list, append,prepend}

}
function node (value=null, nextNode = null) {
    return {value,nextNode}
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");

console.log(list.list)

