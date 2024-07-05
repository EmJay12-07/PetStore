import Image from 'next/image'
import aquarium from '../public/aquarium.svg';

const Jumbotron = () => {
    return (< >
        <div className="background-image">
            <Image src={aquarium} alt={aquarium} />
        </div>
        <div className="promotional-message">
            <h3>REDISCOVER</h3>
            <h2>Pet Store</h2>
            <p>Embrace <strong>the joy of companionship</strong>  the joy of companionship with products that cater to every member of your furry family..</p>
        </div>
    </>)
}
export default Jumbotron;