import truncate from '../../utils/truncate'
import './card.scss'
export default function Card(){
 return (
    <div id="card-flex">
        <div id="card-container">
            <img src="/nature.jpg" alt="" />
            <div id='card-data'>
                <h1>Migrating to linear 101</h1>
                <p>{truncate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam tempore possimus enim voluptatum sapiente exercitationem ullam sunt rem")}</p>
                <p id='publication'>Publié le 11 Dec 2028</p>
            </div>
        </div>
        <div id="card-container">
            <img src="/nature.jpg" alt="" />
            <div id='card-data'>
                <h1>Migrating to linear 101</h1>
                <p>{truncate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam tempore possimus enim voluptatum sapiente exercitationem ullam sunt rem")}</p>
                <p id='publication'>Publié le 11 Dec 2028</p>
            </div>
        </div>
        <div id="card-container">
            <img src="/nature.jpg" alt="" />
            <div id='card-data'>
                <h1>Migrating to linear 101</h1>
                <p>{truncate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam tempore possimus enim voluptatum sapiente exercitationem ullam sunt rem")}</p>
                <p id='publication'>Publié le 11 Dec 2028</p>
            </div>
        </div>
    </div>
 )  
}