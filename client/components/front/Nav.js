import { withApollo } from '../../lib/apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import NavItem from './NavItem'

const Nav = () => {

    return (
        <nav className="nav">
            <ul>
                <NavItem title="Главная" url="/" />
                <NavItem title="О нас" url="/about" />
                <NavItem title="Деятельность" url="/activity" />
                <NavItem title="Активное долголетие" url="/helsy" accent={true} />
                <NavItem title="Независимая оценка квалификации" url="/rating" accent={true} />
                <NavItem title="Документы" url="/docs" />
                <NavItem title="Социальный навигатор" url="/navigator" />
                <NavItem title="Контакты" url="/contact" />
            </ul>
            <style jsx>{`
                .nav {
                    background-color: #A7CE97;
                }
                .nav ul{
                    margin:0;
                    padding:0;
                    display: flex;
                    justify-content:start;
                    flex-flow: row wrap;
                }
            `}</style>
        </nav>
    )

    return <p>Loading...</p>
}

export default withApollo(Nav)