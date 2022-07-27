let myLibrary =[];

const Book = (title,author,read,pages)=>{
    return{title,author,read,pages}
}


function book2(title,author,read,pages){
    this.title = title;
    this.author = author;
    this.read =read;
    this.pages = pages;
}

book2.prototype.test = function(){
    console.log(this.title);
}
const add = (book)=>myLibrary.push(book);

const display = ()=>{
    for(let i =0;i<myLibrary.length;i++){
        console.log(myLibrary[i]);
    }

}

const current =Book('Test','author',true,55);

add(current);
const current2 = new book2('Test2','author2',true,57);
current2.test();
add(current2);
const current3 = new book2('Test3','author3',true,58);
add(current3);

display();




let board = [];
















