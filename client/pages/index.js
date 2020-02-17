import { withApollo } from '../lib/apollo'
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

  //if (data && data.viewer) {
    return (
      <div>
        <p>Фнффд</p>
        <p>Лфздшт</p>
      </div>
    )
  //}

  return <p>Loading...</p>
}

export default withApollo({ ssr: true })(withLayout(Index))