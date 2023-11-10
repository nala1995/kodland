import React from 'react'
import Photo from './assets/photo.jpg'
import './index.css'

function Sectiontwo() {
  return (
    <div className='section-two'>
        <div className='inner-container'>
            <div className='sectiontwo-letters'>
                <h1>ЧТОБЫ ВОСПОЛЬЗОВАТЬСЯ</h1>
                <p>Покупка в избытке способствует бессмысленному потребительству в обществе, которое подпитывается наркотиками маркетинга и которое вкладывает в ваш мозг то, что вы хотите, и зачем работать все, чтобы система никогда не падала, система должна преобладать, и именно поэтому вы - инструмент, который, пока вы чрезмерно потребляете, способствуете функционированию системы, вам следует как можно скорее прекратить такое поведение.</p>
            </div>
            <div className='sectiontwo-img'>
                <img className='photo' src={Photo} alt='sectiontwo img' />
            </div>
        </div>
    </div>
  )
}

export default Sectiontwo