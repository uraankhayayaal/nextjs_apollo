import { withApollo } from '../apollo/client'
import withLayout from '../components/Layout'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

const models = require( '../sequelize/models/index')

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

  var userModel = {}
//console.log(models.Users);
  models.User.findByPk(1).then(user => {
    // user will be an instance of User and stores the content of the table entry
    // with id 123. if such an entry is not defined you will get null
    userModel = user
  })

  //if (data && data.viewer) {
    return (
      <div>
        <p>{userModel.firstName}</p>
        <p>{userModel.email}</p>
      </div>
    )
  //}

  return <p>Loading...</p>
}

export default withApollo(withLayout(Index))