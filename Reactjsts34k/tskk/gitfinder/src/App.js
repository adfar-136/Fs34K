import React, { useState } from 'react'
import InputForm from './components/InputForm'
import DataDisplay from './components/DataDisplay';
import Repolist from './components/Repolist';
import Pagination from './Pagination';

export default function App() {
  const [userData,setUserData] =useState(null)
  const [repos,setRepos] = useState([])
  const [currentPage,setCurrentPage]= useState(1)
  const [perPage] = useState(5)
  const fetchData = async(username)=>{
    try{
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if(userResponse.ok){
        const userData = await userResponse.json()
        setUserData(userData)
        console.log(userData)

        const reposResponse = await fetch(userData.repos_url)
        if(reposResponse.ok){
          const reposData = await reposResponse.json();
          setRepos(reposData)
        }else{
          throw new Error("Failed to fetch usser repositories")
        }
      } else {
        throw new Error("User not found")
      }

    }catch(err){
      console.log(err)
      setUserData(null)
    }
  }
  const lastIndex = currentPage * perPage;
  const startindex = lastIndex - perPage
  const currentRepos = repos.slice(startindex,lastIndex)
  const pagination = (pageNumber)=>{
      setCurrentPage(pageNumber)
  }
  return (
    <div className='app'>
      <h1>GitHub Profile Finder</h1>
      <InputForm fetchData = {fetchData}/>
      {userData && <DataDisplay user={userData}/>}
      {currentRepos.length>0 ? (
        <>
        <Repolist repos={currentRepos}/>
        <Pagination 
        totalRepos = {repos.length}
        reposPerPage = {perPage}
        paginate={pagination}/>
        </>
      ):(
        <h1>No Repositories found</h1>
      )}
    </div>
  )
}
