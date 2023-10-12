import Book from "./book";

function Read(){

              {/*I added the following JSON to the read component and stored it in a const variable.
                This will pass this read components data to our new books component.*/}
    const data = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },
    {
    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    "isbn": "1617292036",
    "pageCount": 0,
    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
    "status": "MEAP",
    "authors": ["Simon Holmes"],
    "categories": []
    }
    ];
    
return(
    <div>
              {/*For each book, I have to pulled out one book. The object MyBook will give you access*/}
        <h2>Hello from my Read component</h2>
        <Book myBook = {data}></Book>
    </div>

);
}

export default Read;
