import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import "../index.css"

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className="form1">
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='ml-sm-3 ml-sm-5'
      ></Form.Control>
      <Button type='submit'   className='p-1 form2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox