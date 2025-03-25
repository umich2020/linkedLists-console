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
    function size() {
        return list.length
    }
    function head() {
        return JSON.stringify(list.at(0))
    }
    function tail() {
        return JSON.stringify(list.at(-1))
    }
    function at(index) {
        return JSON.stringify(list.at(index))
    }
    function pop () {
        list.pop()
    }
    function find(search) {
        for (let i =0; i<list.length;i++) {
            if(list.at(i).value === search) {
                return true
            }
        }
        return false

    }
    function toString() {
        let str = ""
        for (let i=0; i<list.length;i++) {
            str += "( "+list.at(i).value+" ) -> "
        }
        str+= "null"
        return str
    }
    return {list, append,prepend,size,head,tail,at,pop,find,toString}

}
function node (value=null, nextNode = null) {
    return {value,nextNode}
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.list)
console.log(list.toString())


