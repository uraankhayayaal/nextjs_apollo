import Link from 'next/link';

const NavItem = (props) => {

    return (
        <li>
            <Link href={props.url}>
                <a className={props.accent ? 'accent' : ''}>{props.title}</a>
            </Link>
            <style jsx>{`
                li{
                    list-style: none;
                }
                li a{
                    color:white;
                    display:inline-block;
                    padding: 8px 16px;
                    font-size: 16px;
                    font-weight: bold;
                }
                li a.accent{
                    color:#729C92;
                    background-color:white;
                }
            `}</style>
        </li>
    )

    return <p>Loading...</p>
}

export default NavItem