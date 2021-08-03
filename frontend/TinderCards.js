import React, { useState,useEffect } from 'react';
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import axios from "./axios";

/*{
            name: "Gigi Hadid",
            url: "https://i.pinimg.com/originals/08/7c/34/087c348d30e14f3c10d7d7897317d5fa.jpg",
        },
        {
            name: "Megan Fox",
            url: "https://i.pinimg.com/originals/b6/ac/a3/b6aca38da1d44b9c6e05a83394fe79f7.jpg",
        },
        {
            name: "Inna",
            url: "https://celebmix.com/wp-content/uploads/2020/05/five-of-our-favourite-inna-singles-01.jpeg",
        },*/
function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people);
    
    const swiped = (direction,nameToDelete) => {
        console.log('removing: ' + nameToDelete);       
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir,person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            
                        <div
                            className="card"
                            style={{ backgroundImage: `url(${person.imgUrl})`}}
                        >
                                <h3>{ person.name }</h3>
                        </div>
                    </TinderCard>
                    
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards
