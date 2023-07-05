import React from 'react'

export default function Pagination({totalRepos,reposPerPage,paginate}) {
    const pageNumber = []
    for(let i=1;i<=Math.ceil((totalRepos/reposPerPage));i++){
        pageNumber.push(i)
    }
    console.log(pageNumber)
  return (
    <div className='pagination'>
        {pageNumber.map((number)=>(
            <li key={number}>
                <button onClick={()=>paginate(number)}>{number}</button>
            </li>
        ))}

    </div>
  )
}
