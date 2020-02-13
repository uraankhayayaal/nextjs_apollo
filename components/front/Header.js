import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header className="header">
    <div className="partnerName">
      <Link href="https://mintrud.sakha.gov.ru/">
        <a target="_blank">
          <img className="logo" src="/static/images/nav/logo_mintrud.png" alt="Министерство труда и социального развития Республики Саха (Якутия)" />
          <span>МТиСР РС(Я)</span>
        </a>
      </Link>
      <Link href="/search">
        <a>signout</a>
      </Link>
    </div>
    <div className="companyName">
      <a target="_blank">
        <img className="logo" src="/static/images/nav/logo.png" alt="ГБУ РС (Я) «Ресурсный центр социальной защиты «Победа» при Министерстве труда и социального развития РС (Я)" />
        <span>ГБУ РС (Я) «Ресурсный центр социальной защиты «Победа» при Министерстве труда и социального развития РС (Я)</span>
      </a>
    </div>
      <style jsx>{`
          .header {
          }
          .header .partnerName{
            background-color: #A7CE97;
          }
          .header .companyName{
            background-color: #729C92;
          }
          .header .companyName .logo{
            max-width: 75px;
            max-height: 75px;
          }
          .header a{
              color:red;
          }
      `}</style>
  </header>
);

export default Header;