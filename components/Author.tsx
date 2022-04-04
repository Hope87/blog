import React, {FC} from 'react'
import {IAuthor} from '../interfaces'
import Image from 'next/image'


interface AuthorProps {
  author: IAuthor
}

const Author: FC<AuthorProps> = ({author}) => {

  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
      <Image src={author.photo.url} unoptimized height={100} width={100} className='align-middle rounded-full' alt={author.name}/>
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author