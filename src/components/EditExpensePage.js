import React from 'react'

const EditExpensePage = (props) => {
    return (
        <div>
            This is from the edit expense component. Edit id: {props.match.params.id}
        </div>
    )
}

export default EditExpensePage