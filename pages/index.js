import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

class App extends Component {

  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/products');
    
    return { products: response.data } 
  }
  
  render() {
    return (
      <div className='container'>
        <style jsx>{`
            .header {
              padding: 16px 16px;
            }
            .content {
              padding: 16px 16px;
            }
            .post {
              margin-bottom: 16px;
            }
        `}</style>
         <div>
              <ul id="nav">
                <li><a href="http://localhost:3000/keystone">Ir a la UI Administrador</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        <div className='header'>
          <h1>Tienda de ropa</h1>
       </div>
        
        <div className='content'>
          { this.props.products.map((product, i) => {
              return (
               
<div className='product' key={i}>
                  <div className='row'>
                    <div className='col-12 col-md-4'>
                      <img className='img-fluid ' src={product.image.secure_url}/>
                      <div className='card'>
                      <h2>{product.title}</h2>
                      <div dangerouslySetInnerHTML={{__html: product.description.brief}}></div>
                      <h3>${product.price}</h3>
                      <br/>
                      <h3>Sizes</h3>
                      <p>{product.sizes}</p>
                      <h3>Colors</h3>
                      <p>{product.colors}</p>
                    </div>
                    <br/><br/>
                    </div>
                  </div>
                </div>
              );
            }) }
        </div>
      </div>
    );
  };
}

export default App;