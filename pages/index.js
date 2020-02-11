import withLayout from '../components/Layout';
import Link from 'next/link';

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Page = () => {

    const EXCHANGE_RATES = gql`
    {
        books {
            title
            author
        }
    }
    `;

    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ title, author }) => (
        <div key={title}>
            {/* {title}: {author} */}
            <PostLink id={title} />
        </div>
    ));
};

export default withLayout(Page);