import { withApollo } from '../lib/apollo'
import withLayout from '../components/Layout'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

const booksQuery = gql`
  query{
    books{
      title
      author
    }
  }
`

const Index = () => {
  const router = useRouter()
  const { data, loading } = useQuery(booksQuery, {
    variables: { page: 0 }
  })

  if (data) {
    return (
      <div>
        <p>Книги</p>
        {data.books.map((book, i) => {     
           console.log("Entered");                 
           // Return the element. Also pass key     
           return (<div><b key={i} >{book.author}</b><p key={i} >{book.title}</p></div>) 
        })}
      </div>
    )
  }

  return <p>Loading...</p>
}

export default withApollo({ ssr: true })(withLayout(Index))