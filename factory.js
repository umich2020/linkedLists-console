function LinkedList () {
    let list = []
    return {list, append}
    function append(value) {
        if(list.length===0) {
            list.push(node(value))
        } else {
            list.push(node(value))
            list.at(-2).nextNode= list.at(-1).value
        }
    }
}
function node (value=null, nextNode = null) {
    return {value,nextNode}
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

console.log(list.list)

