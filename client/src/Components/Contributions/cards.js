import React from 'react'
import Card from './card'

const cards = () => {
  const heightCheck ={
    height: '41rem',
    overflow: 'scroll',
    
  }
  return (
    <div className='flex scrollbar-hide flex-wrap mt-28 w-[85%] scroll-smooth ml-[20%]' style={heightCheck}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

    </div>
    
  )
}

export default cards