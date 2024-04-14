import React, { useState } from 'react'
import data from './data.js'
import './style.css'

const Main = () => {
    const [selected, setSelected] = useState(null);
    const [ enableMultiselect, setEnableMultiSelected] = useState(false)
    const [multiSelected, setMultiselected] = useState([]);

    function handleSingleSelection(currentId){
           setSelected(currentId === selected? null: currentId)
    }

    function handleMultiselected(currentId){
        let multyId = [...multiSelected]
        let indexOfId = multyId.indexOf(currentId)
        if(indexOfId === -1){
// console.log(multyId)
         multyId.push(currentId)
         }
         else {
            multyId.splice(indexOfId, 1)
        }
         setMultiselected(multyId)
    }

  return (
    <div className='wrapper'>
        <button onClick={()=> setEnableMultiSelected(!enableMultiselect)}>
            {enableMultiselect? <span>Disable</span>: <span>Enable</span>} Multi Select</button>
      <div className='accordian'>
        { data && data.length>0 ?
         data.map(dataItem => <div className='item'>
            <div 
            onClick={
                enableMultiselect
                ? ()=> handleMultiselected(dataItem.id) :
                 ()=>handleSingleSelection(dataItem.id)
                 } 
                 className='title'>
                <h3 >{dataItem.question}</h3>
                <span>+</span>
            </div>
            {
                enableMultiselect ?
                  multiSelected.indexOf(dataItem.id) !== -1? ( <div className='ans'>{dataItem.answer}</div>): null
                : selected === dataItem.id? <div className='ans'>{dataItem.answer}</div>: null
            }
        </div>) : <div>No data found!</div>}
      </div>
    </div>
  )
}

export default Main
