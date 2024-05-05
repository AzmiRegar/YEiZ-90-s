import React from "react";
import "../index.css";

class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-12 p-2 "> {/* Menggunakan align-self-start untuk menempatkan card di pinggir */}
                <div className="cardP">
                    {/* menampilkan deskripsi */}
                    <div className="text-center">
                        <h5 className="judulP">
                            {this.props.product_name}
                        </h5>
                        <div className="card-image row">
                            {/* menampilkan Gambar / cover */}
                            <div className="img"></div>
                            <div className="col-5">
                                <img src={this.props.image} className="img" height="200" />
                            </div>
                        </div>
                        <p></p>
                        <h6 className="hargaP">
                            Harga: Rp {this.props.price}
                        </h6>
                        {/* button untuk menambah ke keranjang belanja */}
                        <button className="btn btn-sm btn-success m-1" onClick={this.props.onCart}>
                            Tambahkan ke keranjang belanja
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
