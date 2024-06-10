import React, { ReactNode } from 'react'
import InfoContainer from './InfoContainer';

type Props = {
    bgColor:string;
    children:ReactNode;
}

const Card = ({children,bgColor}: Props) => {
  return (
    <div className={`flex flex-col items-start justify-center gap-4 bg-gray-50  shadow-lg  rounded-lg min-h-[15vh] p-4 py-2`}>
        {children}
    </div>
  )
}

export default Card