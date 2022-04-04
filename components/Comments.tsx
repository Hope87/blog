import React, { FC, useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

interface CommentsProps {
  slug: string
}

interface CommentsState {
  comment: string,
  createdAt: string, 
  name: string
}

const Comments: FC<CommentsProps> = ({ slug }) => {
  const [comments, setComments] = useState<CommentsState[]>([])

  useEffect(() => {
    getComments(slug).then(res => setComments(res))
  }, [])
  

  return <div>
    {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
  </div>
}

export default Comments
