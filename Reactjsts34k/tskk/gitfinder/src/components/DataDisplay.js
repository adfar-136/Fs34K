import React from 'react'

export default function DataDisplay({user}) {
  return (
    <div className='user-card'>
        <img src={user.avatar_url} 
        alt={user.login} className='avatar'/>
        <h2>{user.name}</h2>
        <p className='login'>
            <strong>User-Name: </strong> 
            {user.login}</p>
        <p className='bio'>
            <strong>User-Bio: </strong>
             {user.bio}</p>
        <p>
            <strong>Followers: </strong> 
            {user.followers}
        </p>
        <p>
            <strong>Following: </strong> 
            {user.following}
        </p>
        <p>
            <strong>Public Repos: </strong> 
            {user.public_repos}
        </p>
    </div>
  )
}
