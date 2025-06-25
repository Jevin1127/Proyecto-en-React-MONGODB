import React, { Fragment } from "react";

function Index(){
    return(
        <Fragment>

  <header className="header">

    <div className="menu container">
        <a href="#" className="logo">Logo</a>

        <input type="checkbox" id="menu" />
        <label for="menu"><img src="assets/images/menu.png" className="menu-icono" alt=""/></label>
        <nav className="navbar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Quienes Somos</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <div>
            <ul>
                <li className="submenu">
                    <img src="assets/images/car.svg" id="img-carrito" alt=""/>
                    <div id="carrito">
                        <table id="lista-carrito">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                        <a href="#" id="vaciar-carrito" className="btn-3">Vaciar carrito</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div className="header-content container">
        <div className="swiper mySwiper-1">
            <div className="swiper-wrapper">

                <div className="swiper-slide">

                    <div className="header-info">
                        <div className="header-txt">
                            <h1>Cobertor + Vidrio Templado</h1>
                            <div className="price">
                                <p className="price-1">$15.99</p>
                                <p className="price-2">$13.99</p>
                            </div>
                            <a href="#" className="btn-1">Informacion</a>
                        </div>
                        <div className="header-img">
                            <img src="assets/images/Moto G Stylus 5G Vidrio y cobertor.webp" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide">

                    <div className="header-info">
                        <div className="header-txt">
                            <h1>Cobertor + Vidrio Templado</h1>
                            <div className="price">
                                <p className="price-1">$15.99</p>
                                <p className="price-2">$13.99</p>
                            </div>
                            <a href="#" className="btn-1">Informacion</a>
                        </div>
                        <div className="header-img">
                            <img src="assets/images/Moto g Stylus 5G 2022.webp" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide">

                    <div className="header-info">
                        <div className="header-txt">
                            <h1>Cobertor + Vidrio Templado</h1>
                            <div className="price">
                                <p className="price-1">$15.99</p>
                                <p className="price-2">$13.99</p>
                            </div>
                            <a href="#" className="btn-1">Informacion</a>
                        </div>
                        <div className="header-img">
                            <img src="assets/images/Moto G Stylus 5G Morado.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-pagination"></div>

        </div>
    </div>

</header>

<hr/>

<section className="promos container" id="lista-1">
    <h2>Promociones</h2>

    <div className="Categories">

        <div className="categorie">

            <div className="categorie-1">
                <h3>Promo 1</h3>
                <div className="prices">
                    <p className="price-1">$15.99</p>
                    <p className="price-2">$13.99</p>
                </div>
                <a href="#" className="agregar-carrito btn-3" data-id="1">Agregar al carrito</a>
            </div>
            <div className="categorie-img">
                <img src="assets/images/AudifonosS10.jpg" alt=""/>
            </div>
        </div>

        <div className="categorie">

            <div className="categorie-1">
                <h3>Promo 2</h3>
                <div className="prices">
                    <p className="price-1">$15.99</p>
                    <p className="price-2">$13.99</p>
                </div>
                <a href="#" className="agregar-carrito btn-3" data-id="2">Agregar al carrito</a>
            </div>
            <div className="categorie-img">
                <img src="assets/images/Audifonos deportivos inalambricos.webp" alt=""/>
            </div>
        </div>

        <div className="categorie">

            <div className="categorie-1">
                <h3>Promo 3</h3>
                <div className="prices">
                    <p className="price-1">$15.99</p>
                    <p className="price-2">$13.99</p>
                </div>
                <a href="#" className="agregar-carrito btn-3" data-id="3">Agregar al carrito</a>
            </div>
            <div className="categorie-img">
                <img src="assets/images/CargadorS10.jpg" alt=""/>
            </div>
        </div>

        <div className="categorie">

            <div className="categorie-1">
                <h3>Promo 4</h3>
                <div className="prices">
                    <p className="price-1">$15.99</p>
                    <p className="price-2">$13.99</p>
                </div>
                <a href="#" className="agregar-carrito btn-3" data-id="4">Agregar al carrito</a>
            </div>
            <div className="categorie-img">
                <img src="assets/images/CargaN10.jpg" alt=""/>
            </div>
        </div>
    </div>
</section>

<hr/>

<section className="products container" id="lista-2">

    <h2>Nuevos Productos</h2>

    <div className="swiper myswiper-2">

        <div className="swiper-wrapper">

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/Moto Edge+ 2022.webp" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="5">Agregar al carrito</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/Moto G Stylus 5G.webp" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="6">Agregar al carrito</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/galaxy-buds1.jpg" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="7">Agregar al carrito</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/CargaN10.jpg" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="8">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
    </div>

</section>

<hr/>

<section className="products container" id="lista-3">

    <h2>Productos</h2>

    <div className="swiper myswiper-2">

        <div className="swiper-wrapper">

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/Moto Edge+ 2022.webp" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="9">Agregar al carrito</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/Moto G Stylus 5G.webp" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="10">Agregar al carrito</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/galaxy-buds1.jpg" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="11">Agregar al carrito</a>
                    </div>
                </div>
            </div>

            <div className="swiper-slice">
                <div className="product">
                    <img src="assets/images/CargaN10.jpg" alt=""/>
                    <div className="product-txt">
                        <h3>Cobertor Motorola Edge+</h3>
                        <p>Version 2022, color rojo</p>
                        <p className="precio">$15.28</p>
                        <a href="#" className="agregar-carrito btn-3" data-id="12">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
    </div>

</section>

<footer className="footer container">

    <div className="link">
        <h3>Lorem</h3>
        <ul>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
        </ul>
    </div>

    <div className="link">
        <h3>Lorem</h3>
        <ul>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
        </ul>
    </div>

    <div className="link">
        <h3>Lorem</h3>
        <ul>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
        </ul>
    </div>

    <div className="link">
        <h3>Lorem</h3>
        <ul>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
            <li><a href="#">lorem</a></li>
        </ul>
    </div>

    <div className="link">
        <h3>Lorem</h3>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni nesciunt repudiandae consequuntur autem
            harum reiciendis eum alias quos aut.
        </p>

    </div>

</footer>

<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<script src="assets/fonts/script.js"></script>

        </Fragment>
    )
}

export default Index;
