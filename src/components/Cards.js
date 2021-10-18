import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import CardItemImage1 from '../images/loukoum1.jpg';
import CardItemImage2 from '../images/loukoum2.jpg';
import CardItemImage3 from '../images/loukoum3.jpg';
import CardItemImage4 from '../images/loukoum4.jpg';
import CardItemImage5 from '../images/loukoum5.jpg';
import CardItemImage6 from '../images/loukoum6.jpg';
import CardItemImage7 from '../images/loukoum7.jpg';
import CardItemImage8 from '../images/loukoum8.jpg';
import CardItemImage9 from '../images/loukoum9.jpg';
import CardItemImage10 from '../images/loukoum10.jpg';
import CardItemImage11 from '../images/loukoum11.jpg';
import CardItemImage12 from '../images/loukoum12.jpg';
import CardItemImage13 from '../images/loukoum13.jpg';
import CardItemImage14 from '../images/loukoum14.jpg';
import CardItemImage15 from '../images/loukoum15.jpg';
import CardItemImage16 from '../images/loukoum16.jpg';
import CardItemImage17 from '../images/loukoum17.jpg';
import CardItemImage18 from '../images/loukoum18.jpg';
import CardItemImage19 from '../images/loukoum19.jpg';
import CardItemImage20 from '../images/loukoum20.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>NOS LOUKOUMS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage1}
              text='Loukoum 1'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage2}
              text='Loukoum 2'
              label='1.5€'
              path='/services/rachat'
            />
                               
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage3}
              text='Loukoum 3'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage4}
              text='Loukoum 4'
              label='1.5€'
              path='/services/rachat'
            />
                                  
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage5}
              text='Loukoum 5'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage6}
              text='Loukoum 6'
              label='1.5€'
              path='/services/rachat'
            />
                                 
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage7}
              text='Loukoum 7'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage8}
              text='Loukoum 8'
              label='1.5€'
              path='/services/rachat'
            />
                             
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage9}
              text='Loukoum 9'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage10}
              text='Loukoum 10'
              label='1.5€'
              path='/services/rachat'
            />
                                  
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage11}
              text='Loukoum 11'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage12}
              text='Loukoum 12'
              label='1.5€'
              path='/services/rachat'
            />
                                   
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={CardItemImage13}
              text='Loukoum 13'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage14}
              text='Loukoum 14'
              label='1.5€'
              path='/services/rachat'
            />                                 
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={CardItemImage15}
              text='Loukoum 15'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage16}
              text='Loukoum 16'
              label='1.5€'
              path='/services/rachat'
            />                                 
          </ul>              
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage17}
              text='Loukoum 17'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage18}
              text='Loukoum 18'
              label='1.5€'
              path='/services/rachat'
            />                                 
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage19}
              text='Loukoum 19'
              label='1.5€'
              path='/services/rachat'
            />
            <CardItem
              src={CardItemImage20}
              text='Loukoum 20'
              label='1.5€'
              path='/services/rachat'
            />                                 
          </ul>                          

        </div>
        
      </div>
    </div>
  );
}

export default Cards;
