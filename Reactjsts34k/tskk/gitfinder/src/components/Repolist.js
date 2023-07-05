import React from 'react'

export default function Repolist({repos}) {
    console.log(repos)
  return (
    <div className='repo-list'>
       <h2>Repositories</h2>
       <ul>
         {repos.map((repo)=> (
            <li key={repo.id}>
                <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name} </a>
            </li>
         ))}
       </ul>
    </div>
  )
}
