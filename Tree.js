class Tree{
    root;
    constructor(array){
        const sortedArr = array
            .sort((a, b) => a - b)
            .filter((v, i, a) => i === 0 || v !== a[i - 1]);

        this.root = this.sortedArrayToBSTRecur(sortedArr, 0, sortedArr.length - 1);
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

    insert(value, tree){
        let tempTree;
        if(tree.data == value){
            return null;
        }
        if(tree.data > value){
            if(tree.left === null){
                tree.left = new Node(value);
            }else{
                this.insert(value, tree.left);
            }
        }
        if(tree.data < value){
            if(tree.Right == null){
                tree.right.data = value;
            }else{
                this.insert(value, tree.right);
            }            
        }
    }

    deleteItem(value){

    }

    
}