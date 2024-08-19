import React from 'react'
import usePriceMul from '../hooks/usePriceMul'

const PriceMul = () => {
    const {price,onChange} = usePriceMul()
    const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div style={{margin:'50px'}}>
        <h2>Multipy onChange by {`${price? price : 'Number'}`}</h2>
        <input
           value={price}
           type='number'
           name='number'
           onChange={onChange}
        />
        {
            price ?
            arr?.map((item)=>(
                <div key={item}>
                    <p>{`${item} * ${price} = ${item*Number(price)}`}</p>
                </div>
            ))
             :''
        }
    </div>
  )
}

export default PriceMul