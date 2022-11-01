import React from 'react';
import {card} from '../assets'
import styles, {layout} from "../style.js";
import Button from './Button.jsx'

function CardDeal() {
    return (
        <section id='CardDeal' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2>Find a better card deal <br className='sm:block hidden'/></h2>
                in few easy steps.
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>
                <Button styles='mt-10'/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className='w-[100%] h-[100%]'/>
            </div>
        </section>
    );
}

export default CardDeal;