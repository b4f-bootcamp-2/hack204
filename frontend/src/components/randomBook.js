import { Component }  from 'react'
import { useNavigate, Link } from "react-router-dom";
// import background from "../images/book.png"
const initialState = {
    books:[{
        "title": "Os Maias",
        "genre": "History",
        "author":"Eça de Queirós",
        "description": "Os Maias is one of the best known works by the Portuguese writer Eça de Queiroz, published by Livraria Lello & Irmão in Porto, in 1888. The work deals with the history of a family (Maia) over generations, then focusing on the last one with the love story between Carlos da Maia and Maria Eduarda.",
        "price": 29.99,
        "promotion": "false"

    },
    {
        "title": "Os Lusiadas",
        "genre": "History",
        "author":"Luís vaz de Camões",
        "description": "Os Lusíadas is a work of epic poetry by the Portuguese writer Luís Vaz de Camões, the first Portuguese epic published in print. and Lisbon began in 1556 literary years in 1571, was published in 1572 in the period of Classicism, or late Renaissance, after the author's return from the East, probably.",
        "price": 29.99,
        "promotion": true
    },
    {
        "title":"Lisbon Unique & Unknown",
        "genre":"History",
        "author":"Anísio Franco",
        "description":"The stories within these pages lift the veil over episodes sometimes unimaginable, others brutally realistic, others yet of comical irony, whilst others may cause goosebumps.",
        "price": 11.99,
        "promotion": true
    },
    {
        "title":"The Christian Invention Of Time",
        "genre":"History",
        "author":"Simon Goldhill",
        "description":"With trademark versatility and brilliance, world-renowned classicist Simon Goldhill explores how Christianity transformed humanity's relationship with time in late antiquity. New ways of conceptualizing and experiencing time were developed, and even today we live in the shadow of this revolution.",
        "price": 23.99,
        "promotion": true
    },
    {
        "title":"Paper, Performance And The State",
        "genre":"History",
        "author":"Farhat Hasan",
        "description":"Looking at the political processes in early modern South Asia as shaped by state formation from below, this work argues that, outside the imperial and trans-regional contexts, the Mughal state subsisted on the mutually-empowering relations with the elites and common people.",
        "price": 29.99,
        "promotion": true
    },
    {
        "title": "In Search of Lost Time",
        "genre": "Modernist",
        "author": "Marcel Proust",
        "description": "The novel recounts the experiences of the Narrator (who is never definitively named) while he is growing up, learning about art, participating in society, and falling in love.",
        "price": 7.99,
        "promotion": true
    },
    {
        "title": "Ulysses",
        "genre": "Modernist",
        "author": "James Jouce",
        "description": "Ulysses chronicles the appointments and encounters of the itinerant Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904.",
        "price": 28.99,
        "promotion": true
    }, 
    {
        "title":"Heart of Darkness",
        "genre":"Modernist",
        "author":"Joseph Conrad",
        "description":"Heart of Darkness examines the horrors of Western colonialism, depicting it as a phenomenon that tarnishes not only the lands and peoples it exploits but also those in the West who advance it.",
        "price": 19.99,
        "promotion": true
    },
    {
        "title":"To the Lighthouse",
        "genre":"Modernist",
        "author":"Virginia Woolf",
        "description":"he novel recalls childhood emotions and highlights adult relationships. Among the book's many tropes and themes are those of loss, subjectivity, the nature of art and the problem of perception.",
        "price": 9.99,
        "promotion": true
    },
    {
        "title":"The Waste Land",
        "genre":"Modernist",
        "author":"T. S. Eliot",
        "description":"The Waste Land can be viewed as a poem about brokenness and loss, and Eliot's numerous allusions to the First World War suggest that the war played a significant part in bringing about this social, psychological, and emotional collapse.",
        "price": 3.99,
        "promotion": true
    },
    {
        "title": "Dom Quixote",
        "genre": "Adventure",
        "author": "Miguel de Cervantes",
        "description": "Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.",
        "price": 4.39,
        "promotion": true
    },
    {
        "title": "The Three Musketeers",
        "genre": "Adventure",
        "author": "Alexandre Dumas",
        "description": "In this classic by Dumas, a young man named d’Artagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis — the King’s most celebrated musketeers — and embarks on a journey of his own.",
        "price": 4.99,
        "promotion": true
    },
    {
        "title":"Harry Potter and the Philosopher's Stone",
        "genre":"Adventure",
        "author":"J. K. Rowling",
        "description":"Harry Potter and the Philosopher's Stone is an enthralling start to Harry's journey toward coming to terms with his past and facing his future. It was the first book written by Rowling, and she was praised for creating well-rounded characters and a fully realized wizard universe that coexisted with the present world.",
        "price": 7.99,
        "promotion": true
    },
    {
        "title":"Into the Wild",
        "genre":"Adventure",
        "author":"Jon Krakauer",
        "description":"Into the Wild tells the true story of the journey of 24-year-old Christopher McCandless into Alaska's Denali National Park and Preserve, where he starved to death in an abandoned bus after spending four months foraging and hunting game.",
        "price": 0.99,
        "promotion": true
    },
    {
        "title":"Moby Dick",
        "genre":"Adventure",
        "author":"Herman Melville",
        "description":"Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
        "price": 79.99,
        "promotion": true
    },
    {
        "title":"The Law And Politics Of Global Competition",
        "genre":"Politics",
        "author":"Mariana Tavares",
        "description":"This book hypothesises that the ICN's structures provide powerful influence mechanisms for strong NCAs and NGAs, over the weak; and 'competition experts' over wider state interests, discussing the legitimacy of this from a political and legal theory perspective, and analysing the ICN's effectiveness and efficiency.",
        "price": 296.99,
        "promotion": true
    },
    {
        "title":"Israel'S Moment",
        "genre":"Politics",
        "author":"Jeffrey Herf",
        "description":"Israel's Moment is a major new account of the foundation of the State of Israel from 1945 to 1949. Jeffrey Herf reveals how support for and opposition to the Jewish state in Palestine in the United States and Europe was very different from the way these positions came to be understood during the Cold War.",
        "price": 259.99,
        "promotion": true
    },
    {
        "title":"From Cooperation To Complicity",
        "genre":"Politics",
        "author":"Peter Hayes",
        "description":"A case study of the involvement of a major, now multinational, corporation in the rise and expansion of Nazism and in the crimes of the Nazi state.",
        "price": 129.99,
        "promotion": true
    },
    {
        "title":"South Asian Borderlands",
        "genre":"Politics",
        "author":"Farhana Ibrahim",
        "description":"Politics, social theory, history of ideas, South Asian government, politics, policy, South Asian history",
        "price": 292.99,
        "promotion": true
    },
    {
        "title":"Today Hong Kong Tomorrow The World",
        "genre":"Politics",
        "author":"Mark L Clifford",
        "description":"What China's Crackdown Reveals about Its Plans to End Freedom Everywhere. A gripping history of China's deteriorating relationship with Hong Kong, and its implications for the rest of the world.",
        "price": 81.99,
        "promotion": true
    },
    {
        "title": "One Hundred Years of Solitude",
        "genre": "Romance",
        "author": "Gabriel Garcia Marquez",
        "description": "This is the author's epic tale of seven generations of the Buendía family that also spans a hundred years of turbulent Latin American history, from the postcolonial 1820s to the 1920s. Patriarch José Arcadio Buendía builds the utopian city of Macondo in the middle of a swamp.",
        "price": 8.99,
        "promotion": true
    },
    {
        "title": "The Great Gatsby",
        "genre": "Romance",
        "author": "F. Scott Fitzgerald",
        "description": "The novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
        "price": 1.99,
        "promotion": true
    },
    {
        "title": "Seven Days in June",
        "genre": "Romance",
        "author": "Tia Williams",
        "description": "With its keen observations of creative life in America today, as well as the joys and complications of being a mother and a daughter, Seven Days in June is a hilarious, romantic, and sexy‑as‑hell story of two writers discovering their second chance at love.",
        "price": 20.00,
        "promotion": true
    },
    {
        "title": "The Kiss Quotient",
        "genre": "Romance",
        "author": "Helen Hoang",
        "description": "Stella Lane thinks math is the only thing that unites the universe. She comes up with algorithms to predict customer purchases—a job that has given her more money than she knows what to do with, and way less experience in the dating department than the average thirty-year-old.",
        "price": 22.99,
        "promotion": true
    },
    {
        "title": "Act Your Age, Eve Brown: A Novel",
        "genre": "Romance",
        "author": "Talia Hibbert",
        "description": "In Act Your Age, Eve Brown the flightiest Brown sister crashes into the life of an uptight B&B owner and has him falling hard—literally. Eve Brown is a certified hot mess. No matter how hard she strives to do right, her life always goes horribly wrong—so she's given up trying.",
        "price": 13.99,
        "promotion": true
    },
    {
        "title":"From Life Molecules to Global Health",
        "genre":"Medicine",
        "author":"José Fragata ",
        "description":"Health care demands more and more cooperation and the convergence of all health-related sciences, from Life Molecules to Global Health, as was most recently shown by the challenge of the COVID pandemic.",
        "price": 32.99,
        "promotion": true
    },
    {
        "title":"Immune",
        "genre":"Medicine",
        "author":"Philipp Dettmer ",
        "description":"A gorgeously-illustrated deep dive into the immune system that will forever change how you think about your body - how it works and why it is both your greatest ally and most dangerous enemy - from the creator of the popular science YouTube channel Kurzgesagt - In a Nutshell.",
        "price": 25.99,
        "promotion": true
    },
    {
        "title":"Microbiome Thyroid",
        "genre":"Medicine",
        "author":"Raphael Kellman ",
        "description":"The leader in Microbiome Medicine offers a revelatory guide to the gut-thyroid connection, with cutting-edge information-and a surprising source of thyroid illness",
        "price": 21.99,
        "promotion": true
    },
    {
        "title":"Sit To Get Fit",
        "genre":"Medicine",
        "author":"Suzy Reading",
        "description":"Change the way you sit in 28 days for health, energy and longevity",
        "price": 22.39,
        "promotion": true
    },
    {
        "title":"Fractional Calculus In Bioengineering, Part 2",
        "genre":"Medicine",
        "author":"R. Magin",
        "description":"By expanding the range of mathematical operations to include fractional calculus, we can develop new and potentially useful functional relationships for modeling complex biological systems in a direct and rigorous manner. In this volume the fundamental properties of fractional calculus are introduced.",
        "price": 39.99,
        "promotion": true
    },
    {
        "title":"Me Talk Pretty One Day",
        "genre":"Comedy",
        "author":"David Sedaris",
        "description":"Me Talk Pretty One Day is a collection of essays about the everyday life of the author, David Sedaris. The book's first essays detail his upbringing in North Carolina. As a child, he lives with his father, mother, and sisters. The opening essay recounts the time he's forced to see a speech therapist in the fifth grade.",
        "price": 49.99,
        "promotion": true
    },
    {
        "title":"Bossypants",
        "genre":"Comedy",
        "author":"Tina Fey",
        "description":"Bossypants is a memoir by Tina Fey which recounts episodes from her life in conjunction with her career as a comedian and writer for Saturday Night Live and 30 Rock. ... There, she helped sabotage another girl's acting in order to get revenge on her for stealing Tina's boyfriend.",
        "price": 59.99,
        "promotion": true
    },
    {
        "title":"The Hitchhiker's Guide to the Galaxy ",
        "genre":"Comedy",
        "author":"Douglas Adams",
        "description":"The saga mocks modern society with humour and cynicism and has as its hero a hapless, deeply ordinary Englishman (Arthur Dent) who unexpectedly finds himself adrift in a universe characterized by randomness and absurdity.",
        "price": 2.99,
        "promotion": true
    },
    {
        "title":"I Feel Bad About My Neck: And Other Thoughts on Being a Woman",
        "genre":"Comedy",
        "author":"Nora Ephron",
        "description":"With her disarming, intimate, completely accessible voice, and dry sense of humor, Nora Ephron shares with us her ups and downs in I Feel Bad About My Neck, a candid, hilarious look at women who are getting older and dealing with the tribulations of maintenance, menopause, empty nests, and life itself.",
        "price": 9.99,
        "promotion": true
    },
    {
        "title":"Yearbook",
        "genre":"Comedy",
        "author":"Seth Rogen",
        "description":"In “Yearbook,” Seth Rogen's candid collection of sidesplitting essays, the actor and filmmaker recalls being dumped three days into his first relationship, then penning a standup joke about that fleeting flirtation.",
        "price": 29.99,
        "promotion": true
    },


    ],
    gotrandomBook: false,
    nBook: Number(),
    genero: "",
    price: undefined,
    onPromotion:"",
}


export default class RandomBook extends Component {
    constructor(props){
        super(props)
        this.state = initialState
    }


    Random = () => {
        let n = Math.floor(Math.random() * this.state.books.length)
        console.log(n)
        this.setState({gotrandomBook: true})
        // this.setState({nBook: n, gotrandomBook: true})
        // if(this.state.genero.length>0){
        //     if(this.state.books[n].genre===this.state.genero){
        //     console.log(this.state.books[n].title, this.state.books[n].genre)
        //     }else{
        //         this.Random()
        //     }
        // }
        if(this.state.books[n].genre === this.state.genero){
            this.setState({nBook: n})
        } else if(this.state.genero.length === 0){
            this.setState({nBook: n})
        } else {
            this.Random()
        }
    }


    render() {
        const n = this.state.nBook
        const CopyBook = Object.values(this.state.books[n])
        const book = CopyBook.map((_c, i) => {
            return (
                <div key={i} className='content' /* style={{ backgroundImage: `url(${background})`}} */>
                    {
                        Object.keys(this.state.books[n])[0] === "title" &&
                        (<div className='title'>Title: "{CopyBook[0]}" </div>)
                    }
                    {
                        Object.keys(this.state.books[n])[1] === "genre" &&
                        (<div className='Genre'>Genre: {CopyBook[1]} </div>)
                    }
                    {
                        Object.keys(this.state.books[n])[2] === "author" &&
                        (<div className='Author'>Author: {CopyBook[2]} </div>)
                    }
                    {
                        Object.keys(this.state.books[n])[3] === "description" &&
                        (<div className='desc'>Description: {CopyBook[3]} </div>)
                    }
                    {
                        Object.keys(this.state.books[n])[4] === "price" &&
                        (<div className='desc'>Price: {this.state.books[n].price}€ </div>)
                    }   
                </div>
            )
        })
        return( 
            <div className="divdosdivs">
              
                <div className="header"><p className="titulo">Book'O'Holic</p>
                <p className="nome"></p></div>
                <div className="signoutButton" ><Link to="/">Sign out!</Link ></div>
                <div className="divselect">
                    <div>Genre:</div>
                    <select onChange={(e)=>this.setState({genero: e.target.value})}>
                        <option value=""  >No preference</option>
                        <option value="History" >History</option>
                        <option value="Modernist" >Modernist</option>
                        <option value="Adventure" >Adventure</option>
                        <option value="Romance" >Romance</option>
                        <option value="Politics" >Politics</option>
                        <option value="Medicine" >Medicine</option>
                        <option value="Comedy" >Comedy</option>
                    </select>
                   {/* <select className="dropdown" onChange={(e)=>this.setState({price: e.target.value})}>
                        <option value={999}  >No preference</option>
                        <option value={10} >Under 10 euros</option>
                        <option value={20} >Under 20 euros</option>
                        <option value={30} >Under 30 euros</option>
                        <option value={40} >Under 40 euros</option>
                        <option value={50} >Under 50 euros</option>
                    </select> */}
                    <p></p>
                    {/* <input onChange={(e)=>this.setState({genero: e.target.value})}></input> */}
                    <div className="divbotao">
                    <button className="botao" onClick={() => this.Random()} >Get Book</button></div>

                    
                    <div className="bookName" >
                    { this.state.gotrandomBook ? book[0] : "" }
                    </div>

                </div>
            </div>
        )
    }
}
