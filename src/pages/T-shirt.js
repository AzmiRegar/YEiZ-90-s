import React, { Component } from "react";
import Card from "../components/Card"
import "../index.css"
import waveFlip from "../components/waveFlip.png"

class Tshirt extends Component {
    constructor() {
        super()
        this.state = {
            tshirt: [
                {
                    product_name: "YEiZ logo T-shirt", price: 169000,
                    cover: "https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    product_name: "YEiZ We Born T-shirt", price: 199000,
                    cover: "https://drive.google.com/uc?id=1rJDcCOmsd14NL6DG3Wps_kewZomGcLU-"
                },
                {
                    product_name: "YEiZ White Crop Top ", price: 210000,
                    cover: "https://drive.google.com/uc?id=1e-thvq7lkG1_gw0FqHzRoiAhfhdgpOUj"
                },
            ],

            action: "",
            product_name: "",
            price: 0,
            cover: "",
            selectedItem: null,
        }
        this.state.filterTshirt = this.state.tshirt
    }



    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = []

        // cek eksistensi dari data cart pada localStorage
        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }

        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)

        if (existItem) {
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini")
        } else {
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "")
            if (promptJumlah !== null && promptJumlah !== "") {
                // jika user memasukkan jumlah item yg dibeli

                // menambahkan properti "jumlahBeli" pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah

                // masukkan item yg dipilih ke dalam cart
                tempCart.push(selectedItem)

                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
    }



    render() {
        return (

            <>
                <div className="text-center"style={{ position: 'relative' }}>

                    <h3>T-SHIRT COLLECTION</h3>
                    {/* Gambar waveFlip */}
                    <img src={waveFlip} alt="Wave Flip" style={{ width: "calc(100% + 0px)",top: '0', left: '0', zIndex: '2' }} />
                </div>
                <div className="bg">
                    <div className="container">
                        <div className="row">
                            {this.state.filterTshirt.map((item, index) => (
                                <Card
                                    key={index}
                                    product_name={item.product_name}
                                    price={item.price}
                                    cover={item.cover}
                                    onCart={() => this.addToCart(item)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Tshirt;