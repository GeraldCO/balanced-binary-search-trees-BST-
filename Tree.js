class Tree{
    root;
    constructor(array = []){
        const sortedArr = array
            .slice()
            .sort((a, b) => a - b)
            .filter((v, i, a) => i === 0 || v !== a[i - 1]);

        this.root = this.buildTree(sortedArr);
    }

    //Recursive Function to Create BST
    sortedArrayToBSTRecur(array, start, end){
        if(start > end){
            return null;
        }
        let mid = start + Math.floor((end - start) / 2);
        let node = new Node(array[mid]);

        //Devide from middle element
        node.setLeft(this.sortedArrayToBSTRecur(array, start, mid-1));
        node.setRight(this.sortedArrayToBSTRecur(array, mid+1, end));

        return node;

    }

    prettyPrint(node, prefix = '', isLeft = true){
        if(node === null){
            return;
        }
        if(node.right !== null){
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if(node.left !== null){
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}