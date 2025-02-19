import React from 'react'

const Button = ({ tittle, ...rest }) => {
    return (
        <button {...rest} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 hover:scale-110 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
            {tittle}
        </button>
    )
}

export default Button