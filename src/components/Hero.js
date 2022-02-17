import './hero.css';
// import heroImg from '../images/punit1.png';

export default function Hero() {
    return (
        <div className='hero'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQej3mcYulB7ZzPBUTx5AF5DP6bEK12WpzqHA&usqp=CAU" alt="Punit" className='hero__photo' />
            <h3 className='hero__header'>Online Experiences</h3>
            <p className='hero__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, aliquam, numquam molestias tempore cumque cupiditate sit suscipit ex odio provident quia distinctio?</p>
        </div>
    );
}