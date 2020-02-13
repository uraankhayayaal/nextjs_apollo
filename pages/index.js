import { withApollo } from '../apollo/client'
import withLayout from '../components/Layout'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`

const Index = () => {
  const router = useRouter()
  const { data, loading } = useQuery(ViewerQuery)

  // // Auth check
  // if (
  //   loading === false &&
  //   data.viewer === null &&
  //   typeof window !== 'undefined'
  // ) {
  //   router.push('/signin')
  // }

  //if (data && data.viewer) {
    return (
      <div>
      </div>
    )
  //}

  return <p>Loading...</p>
}

export default withApollo(withLayout(Index))