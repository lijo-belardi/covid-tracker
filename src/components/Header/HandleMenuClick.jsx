import React from 'react'
import { useNavigate } from 'react-router-dom'

const HandleMenuClick = (pageURL) => {
  const navigate = useNavigate(pageURL)
  return { navigate }
}

export default HandleMenuClick