import React, { useState } from 'react'
import '../styles/pagination.css'

const Pagination = ({ totalCount, setPageNumber, ProductPerPage, pageNumber }) => {

    const [numberOfPage, setNumberOfPage] = useState(Math.ceil(totalCount / 10));

    var renderPages = () => {
        const listItems = []
        for (let i = 0; i < numberOfPage; i++) {
            listItems.push(<li id={`page-${i}`} className='page' onClick={() => setPageNumber(i)}>{i}</li>)
        }
        return listItems;
    }

    return (
        <div className='paginationContainer'>
            <h1 className='prevButton' onClick={() => setPageNumber(pageNumber - 1)}>Prev</h1>
            <ul className='pagesWrapper'>
                {renderPages()}
            </ul>
            <h1 className='nextButton' onClick={() => setPageNumber(pageNumber + 1)}>Next</h1>
        </div>
    )
}

export default Pagination