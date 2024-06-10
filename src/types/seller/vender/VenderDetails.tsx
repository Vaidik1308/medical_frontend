import Image from 'next/image'
import React from 'react'

type Props = {}

const VenderDetails = (props: Props) => {
  return (
    <div>
        <div className='relative size-48'>
            <Image src={"https://plus.unsplash.com/premium_vector-1682298907650-f309cf27b5d0?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmYWNlfGVufDB8fDB8fHww"} alt='fsfd' fill className='rounded-lg object-cover'/>
        </div>
        <div>
            <h2>Shakti Pharma Supply</h2>
        </div>
    </div>
  )
}

export default VenderDetails