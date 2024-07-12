import {useState} from 'react'
import { moneyFormat } from './helpers';

function Header({ total, money })  {
  return (
    <>
       <div class="header">
           {total > 0 && money - total !== 0 &&(
               <div className="header"> Harcayacak <span> $ {moneyFormat(money - total)}</span> $ paranız kaldı!</div>
           )}
        {total === 0 &&(
             <div className="header" >Markette Harcamak için <span> $ {moneyFormat(money)} </span> paranız var!</div>
        )}
        {money - total ===0 && (
              <div className= "header">Paran bitti</div>
        ) }
 
        <style jsx>{`
           .header {
             position: sticky;
             top: 0;
             background: linear-gradient(to bottom, red, yellow );
             height: 60px;
             display: flex;
             align-items: center;
             justify-content: center;
             color: #fff;
             font-size: 24px;
             letter-spacing: 1px;

             }
            .header span {
            margin: 0 10px;
            font-weight: bold;
            }

        `}</style>

       
       </div>
    </>
  )
}

export default Header
