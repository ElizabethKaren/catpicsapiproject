import React from "react"

type CommentHolderProps = {
    comments: string[]
}

const CommentHolder: React.FC<CommentHolderProps> = ({ comments }) => {
    return (
        <div>
            {comments.map((com, index) => <p key={index}>{com}</p>)}
        </div>
    )
}

export default CommentHolder