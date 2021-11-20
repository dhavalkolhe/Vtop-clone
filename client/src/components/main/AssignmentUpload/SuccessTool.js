import React from 'react'

const SuccessTool = () => {
    return (
        <div>
            <h6>Success
                <i class="fa fa-fw fa-check-circle"></i>
            </h6>
            {new Date().toLocaleString() + ''}
        </div>
    )
}

export default SuccessTool
