import React from 'react';

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      'Buenos Aires':
        'https://es.wikipedia.org/wiki/Buenos_Aires#/media/Archivo:Montaje_de_la_Ciudad_de_Buenos_Aires.png',
      Sydney:
        'https://silversea-h.assetsadobe2.com/is/image/content/dam/silversea-com/ports/s/sydney/silversea-luxury-cruises-Sydney.jpg?hei=390&wid=930&fit=crop',
      Praga: 'https://www.viajarpraga.com/img/praga-antes-de-viajar.jpg',
      Boston: 'https://cidi.com/wp-content/uploads/2017/07/boston-que-ver-y-hacer.png',
      Tokio:
        'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/11/First-time-in-Tokyo-1024x664.jpg',
    };
  }
  render() {
    return (
      <div className="image">
        <p>Tu destino es viajar a {this.props.city}</p>
        <img src={this.cities[this.props.city]} alt={this.props.city} />
      </div>
    );
  }
}
export default CityImage;
