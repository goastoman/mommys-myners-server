// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getContacts () {
  return [
    { address: '3PQUkwYARzugf7YDrYpDq93mmqmmEgZJMyw', title: 'Health Department'},
    { address: '3PMcQZAeH1efTzdpdyu7pNkngxrupvUFfhd', title: 'Education Department'},
    { address: '3PGRxoHdHgHCdS5Gk2tmACzceFCVXzbyMyR', title: 'Transport Department'},
  ]
}

const DepartmentLink = ({ item }) => (
  <li>
    <div>
      <p>
        <Link  href={`/department?address=${item.address}&title=${item.title}`}>
          <a>{item.title}</a>
        </Link>
      </p>
      <p className="address">{item.address}</p>
    </div>
    <style jsx>{`
      li {
        list-style: none;
        margin: 1em 0;
        padding: 0;
        font-size: 1.4em;
      }

      p {
        margin: 0 0 0.4em;
      }

      p span {
        border-radius: 4px;
        font-size: 1.2em;
      }

      p.address {
        font-size: 0.8em;
        border-radius: 4px;
        margin-bottom: 2em;
      }

    `}</style>
  </li>
)

export default ({ post }) => (
  <Layout>
    <div>
      <h1>Gotham City Hall</h1>
      <div className="container">
        <div className="city"></div>
        <div className="contacts">
          <ul>
            {
              getContacts().map((item) => (
                <DepartmentLink key={item.id} item={item}/>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700');
      font-family: 'IBM Plex Sans', sans-serif;

      h1 {
        font-size: 4em;
        font-weight: 300;
        margin: 1.4em 0;
        display: block;
        border-radius: 4px;
      }

      ul {
          padding: 0;
          margin: 0;
      }

      div.container {
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
      }

      div.city {
        flex: 1;
        background: url(./../static/city.jpg) top;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      div.contacts {
        flex: 1;       
        padding: 0 0 0 4em;
        color: #333;
        font-weight: 300;
      }
    `}</style>
  </Layout>
)