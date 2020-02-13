import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header className="header">
    <div className="partnerName">
      <div className="df-left">
        <Link href="https://mintrud.sakha.gov.ru/">
            <a target="_blank">
              <img className="logo" src="/static/images/nav/logo_mintrud.png" alt="Министерство труда и социального развития Республики Саха (Якутия)" />
              <span className="">МТиСР РС(Я)</span>
            </a>
        </Link>
      </div>
      <div className="df-right">
        <form>
          <input className="searchInput" name="search" type="text" placeholder="Поиск по сайту" />
          <button className="searchSubmit" type="submit">Поиск</button>
        </form>
        <Link href="/easyview">
          <a className="easyView"><i>W</i> Версия для слабовидящих</a>
        </Link>
      </div>
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
            display:flex;
            align-items:center;
            justify-content:space-between;
          }
          .header .partnerName .df-left img{
            padding: 8px;
            max-width: 52px;
            max-height: 52px;
          }
          .header .partnerName .df-left span{
            font-size:22px;
            color:white;
            margin-left: 8px;
          }
          .header .partnerName .df-left a{
            display:flex;
            align-items:center;
            justify-content:start;
          }
          .header .partnerName .df-right{
            display:flex;
            align-items:center;
            justify-content:start;
          }
          .header .partnerName .df-right .easyView{
            background-color:#565656;
            color:white;
            display: flex;
            height: 68px;
            align-items:center;
            justify-content:center;
            padding: 0 16px;
          }
          .header .partnerName .df-right .searchInput{searchSubmit
            background: white;
            font-size: 16px;
            padding: 8px 16px;
            margin-right: 8px;
            border: none;
            border-radius: 4px;
          }
          .header .partnerName .df-right .searchSubmit{
            border-radius: 4px;
            background: white;
            font-size: 16px;
            padding: 8px 16px;
            margin-right: 8px;
            border: none;
          }
          .header .companyName{
            background-color: #729C92;
          }
          .header .companyName a{
            display:flex;
            align-items:center;
            justify-content:start;
          }
          .header .companyName a img{
            margin: 8px;
          }
          .header .companyName a span{
            margin: 8px;
            font-size: 24px;
            color: white;
          }
          .header .companyName .logo{
            max-width: 75px;
            max-height: 75px;
          }
      `}</style>
  </header>
);

export default Header;